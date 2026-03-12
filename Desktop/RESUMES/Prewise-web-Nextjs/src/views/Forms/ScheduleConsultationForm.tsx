"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSupabaseClient } from '../../lib/supabase';

const ScheduleConsultationForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Normalize context so we reliably route partner submissions to their own table.
  const contextParam = (searchParams?.get('context') || 'general').toLowerCase();
  const isPartnersContext = contextParam === 'partners';
  const context = isPartnersContext ? 'partners' : contextParam; // supported: general, product, deeptech, talent, partners

  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    budget: '',
    timeline: '',
    projectDetails: '',
  });

  const hideBudgetTimeline = context === 'partners';

  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [errorString, setErrorString] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const timelines = [
    { value: 'immediate', label: 'Immediate (0-2 weeks)' },
    { value: '1month', label: '1 Month' },
    { value: '2-3months', label: '2-3 Months' },
    { value: 'flexible', label: 'Flexible' },
  ];

  const budgets = [
    { value: '10k-50k', label: '$10k - $50k' },
    { value: '50k-100k', label: '$50k - $100k' },
    { value: '100k-250k', label: '$100k - $250k' },
    { value: '250k+', label: '$250k+' },
    { value: 'flexible', label: 'Flexible' },
  ];

  const contextLabels: { [key: string]: { title: string; subtitle: string } } = {
    general: {
      title: 'Schedule a Consultation',
      subtitle: 'Let\'s discuss how Prewise can help your project succeed.',
    },
    product: {
      title: 'Schedule Product Consulting',
      subtitle: 'Connect with our product strategy experts to discuss your product vision and go-to-market strategy.',
    },
    deeptech: {
      title: 'Schedule DeepTech Consultation',
      subtitle: 'Work with our specialized engineers on complex technical challenges and innovation.',
    },
    talent: {
      title: 'Schedule Talent Discussion',
      subtitle: 'Explore our specialist network and find the right experts for your team.',
    },
    partners: {
      title: 'Discuss Partnership',
      subtitle: 'Explore collaboration opportunities between your organization and Prewise.',
    },
  };

  const currentContext = contextLabels[context] || contextLabels.general;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateField = (name: string, value: string) => {
    if (["companyName", "firstName", "lastName", "email", "projectDetails"].includes(name) && !value) {
      return "This field is required";
    }
    if (name === "email") {
      const emailOk = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value.trim());
      if (!emailOk) return "Enter a valid email";
    }
    if (name === "timeline" && !hideBudgetTimeline && !value) {
      return "Please select a timeline";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorString(null);
    setToast(null);
    setIsSubmitting(true);

    // Normalize and validate email to align with DB constraints.
    const normalizedEmail = formData.email.trim().toLowerCase();
    const emailIsValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(normalizedEmail);
    const domain = normalizedEmail.split('@')[1] || '';
    const allowlistedDomains = new Set(['prewise.in', 'prewise.co', 'prewise.io']);
    const personalDomains = new Set([
      'gmail.com', 'yahoo.com', 'yahoo.co.in', 'hotmail.com', 'outlook.com', 'live.com', 'msn.com', 'icloud.com', 'me.com',
      'aol.com', 'proton.me', 'protonmail.com', 'gmx.com', 'pm.me', 'yandex.com', 'yandex.ru', 'mail.ru'
    ]);

    const requiredFields = ["companyName", "firstName", "lastName", "email", "projectDetails"] as const;
    const newTouched: Record<string, boolean> = {};
    let hasError = false;
    requiredFields.forEach((field) => {
      newTouched[field] = true;
      const err = validateField(field, (formData as any)[field]);
      if (err) hasError = true;
    });
    if (!hideBudgetTimeline) {
      newTouched.timeline = true;
      if (!formData.timeline) hasError = true;
    }
    setTouched((prev) => ({ ...prev, ...newTouched }));

    if (!emailIsValid) {
      setErrorString('Please enter a valid work email address.');
      setIsSubmitting(false);
      return;
    }

    if (!allowlistedDomains.has(domain) && personalDomains.has(domain)) {
      setErrorString('That email does not meet our policy. Please use your company domain email.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Use a dedicated table for partner discussions to keep data isolated from other consultations.
      const targetTable = isPartnersContext ? 'partner_requests' : 'consultations';

      const supabase = getSupabaseClient();

      // Build payload to match the destination table shape.
      const payload: Record<string, string | null> = {
        context: context,
        company_name: formData.companyName,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: normalizedEmail,
        phone: formData.phone || null,
        location: formData.location || null,
      };

      if (isPartnersContext) {
        payload.partnership_details = formData.projectDetails;
      } else {
        payload.project_details = formData.projectDetails;
        payload.budget = formData.budget || null;
        payload.timeline = formData.timeline || null;
      }

      const { error } = await supabase
        .from(targetTable)
        .insert([payload]);

      if (error) {
        if (error.message?.includes('partner_requests_email_chk')) {
          setErrorString('That email does not meet our policy. Please use a valid business email (no personal providers).');
          return;
        }
        throw error;
      }

      // Automatically send email notification securely via FormSubmit
      try {
        await fetch("https://formsubmit.co/ajax/connect@prewise.in", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Prewise Consultation Request: ${formData.companyName}`,
            Context: currentContext.title,
            Company: formData.companyName,
            Name: `${formData.firstName} ${formData.lastName}`,
            Email: normalizedEmail,
            Phone: formData.phone || "Not provided",
            Location: formData.location || "Not provided",
            Budget: formData.budget || "Not provided",
            Timeline: formData.timeline,
            ProjectDetails: formData.projectDetails,
          })
        });
      } catch (emailErr) {
        // We log silently and do not break the UI if the network blocked the notification 
        // since the user's data is already successfully saved to the database.
        console.error("Email notification failed to send:", emailErr);
      }

      setSubmitted(true);
      setToast({ type: "success", message: "Request received. We will reach out within 24 hours." });
      setFormData({
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        budget: '',
        timeline: '',
        projectDetails: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
      setTimeout(() => setToast(null), 5000);

    } catch (err: any) {
      console.error('Submission error:', err);
      if (err?.message?.toLowerCase().includes('failed to fetch')) {
        setErrorString('Network error while submitting. Please check your connection or allow the request and try again.');
        setToast({ type: "error", message: "Network error. Please retry." });
        return;
      }
      setErrorString(err?.message || 'Failed to submit consultation request. Please try again.');
      setToast({ type: "error", message: err?.message || 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#101622] text-white min-h-screen pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-6 inline-flex items-center gap-2 text-[#9da6b9] hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back
        </button>

        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {currentContext.title}
          </h1>
          <p className="text-[#9da6b9] text-lg" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
            {currentContext.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1c2333] rounded-xl p-8 border border-[#2d3546] space-y-6"
        >
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
              <label htmlFor="companyName" className="block text-sm font-semibold mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                placeholder="Your Company"
              />
              {touched.companyName && validateField("companyName", formData.companyName) && (
                <p className="mt-2 text-xs text-red-300">{validateField("companyName", formData.companyName)}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

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
                placeholder="john@company.com"
              />
              {touched.email && validateField("email", formData.email) && (
                <p className="mt-2 text-xs text-red-300">{validateField("email", formData.email)}</p>
              )}
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                placeholder="San Francisco, CA"
              />
            </div>
          </div>

          {!hideBudgetTimeline && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                >
                  <option value="">Select budget</option>
                  {budgets.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold mb-2">
                  Project Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors focus-ring"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
                {touched.timeline && validateField("timeline", formData.timeline) && (
                  <p className="mt-2 text-xs text-red-300">{validateField("timeline", formData.timeline)}</p>
                )}
              </div>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="projectDetails" className="block text-sm font-semibold mb-2">
              {hideBudgetTimeline ? 'Partnership Details & Notes *' : 'Project Details & Requirements *'}
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-[#101622] border border-[#2d3546] rounded-lg px-4 py-3 text-white focus:border-[#1152d4] focus:outline-none transition-colors resize-none focus-ring"
              placeholder={
                hideBudgetTimeline
                  ? "Tell us about your partnership proposal, capabilities, and any relevant notes..."
                  : "Tell us about your project, challenges, and what you're looking for in a partner..."
              }
              style={{ fontFamily: "'Noto Sans', sans-serif" }}
            />
            {touched.projectDetails && validateField("projectDetails", formData.projectDetails) && (
              <p className="mt-2 text-xs text-red-300">{validateField("projectDetails", formData.projectDetails)}</p>
            )}
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
            {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
          </button>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-green-400">check_circle</span>Response in &lt;24h</span>
            <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-blue-300">lock</span>Your info stays private</span>
          </div>

          {errorString && (
            <div className="mt-4 p-4 bg-red-900/30 border border-red-600 rounded-lg text-red-200">
              {errorString}
            </div>
          )}

          {submitted && (
            <div className="mt-4 p-4 bg-green-900/30 border border-green-600 rounded-lg text-green-200">
              Thank you for your request! Our team will reach out within 24 hours to schedule your consultation.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ScheduleConsultationForm;
