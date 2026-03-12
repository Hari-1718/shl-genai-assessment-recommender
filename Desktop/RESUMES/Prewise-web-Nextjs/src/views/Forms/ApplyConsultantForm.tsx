"use client";

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabase';
import { isValidEmail, isTextOnly, isValidUrl } from '@/lib/validation';

export default function ApplyConsultantForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRole = searchParams?.get('role') || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    role: initialRole,
    engagement: '',
    linkedIn: '',
    resume: null as File | null,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [errorString, setErrorString] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string | File | null) => {
    if (["firstName", "lastName", "email", "location", "role", "engagement"].includes(name) && !value) {
      return "This field is required";
    }
    if ((name === "firstName" || name === "lastName") && typeof value === "string" && value && !isTextOnly(value)) {
      return "Name must contain only letters";
    }
    if (name === "email" && typeof value === "string" && !isValidEmail(value)) {
      return "Enter a valid email";
    }
    if (name === "linkedIn" && typeof value === "string" && value && !isValidUrl(value)) {
      return "Enter a valid URL (e.g. https://linkedin.com/in/...)";
    }
    if (name === "resume" && !value) {
      return "Please attach your resume";
    }
    return "";
  };

  const roles = [
    { value: 'product-manager', label: 'Product Manager' },
    { value: 'startup-advisor', label: 'Startup Advisor' },
    { value: 'vlsi-engineer', label: 'VLSI Design Engineer' },
    { value: 'embedded-systems', label: 'Embedded Systems Engineer' },
    { value: 'ai-ml-specialist', label: 'AI/ML Specialist' },
    { value: 'generative-ai', label: 'Generative AI Specialist' },
    { value: 'data-scientist', label: 'Data Scientist' },
    { value: 'data-analyst', label: 'Data Analyst' },
    { value: 'quant-finance', label: 'Quantitative Finance Specialist' },
  ];

  const engagementTypes = [
    { value: 'fractional', label: 'Fractional (Part-time)' },
    { value: 'full-time', label: 'Full-time' },
    { value: 'project-based', label: 'Project-based' },
    { value: 'flexible', label: 'Flexible' },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
      setTouched((prev) => ({ ...prev, resume: true }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorString(null);
    setToast(null);
    setIsSubmitting(true);

    const requiredFields = ["firstName", "lastName", "email", "location", "role", "engagement", "resume"] as const;
    const newTouched: Record<string, boolean> = {};
    let hasError = false;
    requiredFields.forEach((field) => {
      newTouched[field] = true;
      const err = validateField(field, (formData as any)[field]);
      if (err) hasError = true;
    });
    // Validate optional fields that have format rules
    if (formData.linkedIn) {
      newTouched.linkedIn = true;
      if (validateField("linkedIn", formData.linkedIn)) hasError = true;
    }
    setTouched((prev) => ({ ...prev, ...newTouched }));
    if (hasError) {
      setErrorString("Please correct the highlighted fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const supabase = getSupabaseClient();
      let fileUrl: string | null = null;

      if (formData.resume) {
        const fileExt = formData.resume.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `resumes/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(filePath, formData.resume);

        if (uploadError) {
          throw new Error(`Failed to upload resume: ${uploadError.message}`);
        }

        const { data } = supabase.storage
          .from('resumes')
          .getPublicUrl(filePath);

        fileUrl = data?.publicUrl ?? null;
      }

      const { error: dbError } = await supabase
        .from('applications')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            location: formData.location,
            role: formData.role,
            engagement: formData.engagement,
            linkedin: formData.linkedIn,
            message: formData.message,
            resume_url: fileUrl,
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      try {
        await fetch("https://formsubmit.co/ajax/connect@prewise.in", {
          method: "POST",
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: `New Consultant Application: ${formData.firstName} ${formData.lastName}`,
            Role: formData.role,
            Name: `${formData.firstName} ${formData.lastName}`,
            Email: formData.email,
            Location: formData.location || "Not provided",
            Engagement_Type: formData.engagement,
            LinkedIn: formData.linkedIn || "Not provided",
            Message: formData.message || "No message provided",
            Resume_URL: fileUrl || "No resume uploaded",
          })
        });
      } catch {
        // Email notification is non-critical; application data is already saved.
      }

      setSubmitted(true);
      setToast({ type: "success", message: "Application submitted. We will review and respond soon." });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        role: '',
        engagement: '',
        linkedIn: '',
        resume: null,
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
      setTimeout(() => setToast(null), 5000);

    } catch (err: any) {
      console.error('Error submitting application:', err);
      setErrorString(err.message || "Failed to submit application. Please try again.");
      setToast({ type: "error", message: err.message || "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#101622] text-white min-h-screen pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-12">
          <button
            type="button"
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center text-[#9da6b9] hover:text-white transition-colors"
          >
            <svg
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 15.707a1 1 0 01-1.414 0L6.586 11l4.707-4.707a1 1 0 011.414 1.414L9.414 11l3.293 3.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1c2333] rounded-xl p-8 border border-[#2d3546] space-y-6">
          {toast && (
            <div
              className={`flex items-start gap-3 rounded-lg px-4 py-3 border text-sm ${toast.type === "success" ? "bg-green-900/30 border-green-600 text-green-100" : "bg-red-900/30 border-red-600 text-red-100"}`}
            >
              <span className="material-symbols-outlined mt-0.5 text-base">
                {toast.type === "success" ? "check_circle" : "error"}
              </span>
              <span>{toast.message}</span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                placeholder="John"
              />
              {touched.firstName && validateField("firstName", formData.firstName) && (
                <p className="mt-2 text-xs text-red-300">{validateField("firstName", formData.firstName)}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                placeholder="Doe"
              />
              {touched.lastName && validateField("lastName", formData.lastName) && (
                <p className="mt-2 text-xs text-red-300">{validateField("lastName", formData.lastName)}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                placeholder="john@example.com"
              />
              {touched.email && validateField("email", formData.email) && (
                <p className="mt-2 text-xs text-red-300">{validateField("email", formData.email)}</p>
              )}
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-semibold mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                placeholder="San Francisco, CA"
              />
              {touched.location && validateField("location", formData.location) && (
                <p className="mt-2 text-xs text-red-300">{validateField("location", formData.location)}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="role" className="block text-sm font-semibold mb-2">
                Consultant Role *
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
              >
                <option value="">Select a role</option>
                {roles.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
              {touched.role && validateField("role", formData.role) && (
                <p className="mt-2 text-xs text-red-300">{validateField("role", formData.role)}</p>
              )}
            </div>
            <div>
              <label htmlFor="engagement" className="block text-sm font-semibold mb-2">
                Preferred Engagement *
              </label>
              <select
                id="engagement"
                name="engagement"
                value={formData.engagement}
                onChange={handleChange}
                required
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
              >
                <option value="">Select engagement type</option>
                {engagementTypes.map((e) => (
                  <option key={e.value} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
              {touched.engagement && validateField("engagement", formData.engagement) && (
                <p className="mt-2 text-xs text-red-300">{validateField("engagement", formData.engagement)}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="linkedIn" className="block text-sm font-semibold mb-2">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
              placeholder="https://linkedin.com/in/john-doe"
            />
            {touched.linkedIn && validateField("linkedIn", formData.linkedIn) && (
              <p className="mt-2 text-xs text-red-300">{validateField("linkedIn", formData.linkedIn)}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="resume" className="block text-sm font-semibold mb-2">
              Resume / CV *
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf, .doc, .docx"
              required
              className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
            />
            {touched.resume && validateField("resume", formData.resume) && (
              <p className="mt-2 text-xs text-red-300">{validateField("resume", formData.resume)}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors resize-none focus-ring"
              placeholder="Tell us about your experience and why you'd be great to work with Prewise..."
              style={{ fontFamily: "'Noto Sans', sans-serif" }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${isSubmitting ? 'bg-[#1152d4]/50 cursor-not-allowed' : 'bg-[#1152d4] hover:bg-[#0d3aa1]'} text-white font-semibold text-[15px] tracking-[0.01em] py-3 rounded-md transition-colors duration-200 lift focus-ring flex items-center justify-center gap-2`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {isSubmitting && (
              <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
            )}
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-green-400">check_circle</span>Response in &lt;24h</span>
            <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-blue-300">lock</span>We keep your data private</span>
          </div>

          {errorString && (
            <div className="mt-4 p-4 bg-red-900/30 border border-red-600 rounded-lg text-red-200">
              {errorString}
            </div>
          )}

          {submitted && (
            <div className="mt-4 p-4 bg-green-900/30 border border-green-600 rounded-lg text-green-200">
              Thank you for your application! We'll review it and get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
