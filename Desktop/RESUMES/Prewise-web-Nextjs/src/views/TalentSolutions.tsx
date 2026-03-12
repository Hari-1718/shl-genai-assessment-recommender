import Link from "next/link";
import AnimatedStat from "../components/AnimatedStat";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import HERO_BACKGROUND_IMAGE from "../assets/join_hero_bg.png";

const ROLE_CATEGORIES = [
  "All Roles",
  "LLM Specialists",
  "Finance Tech",
  "Embedded Systems",
  "VLSI Design",
  "Product Management",
];

interface Job {
  id: number;
  category: string;
  status: string;
  statusColor: string;
  title: string;
  description: string;
  skills: string[];
  type: string;
  icon: string;
}

const FALLBACK_ROLES: Job[] = [
  {
    id: 1,
    category: "LLM Specialists",
    status: "Available Now",
    statusColor: "green",
    title: "LLM Business Analyst",
    description: "Specialized in bridging the gap between generative AI capabilities and enterprise business requirements.",
    skills: ["Prompt Engineering", "RAG Architectures", "Python"],
    type: "Full-time",
    icon: "psychology",
  },
  {
    id: 2,
    category: "Finance Tech",
    status: "Available Now",
    statusColor: "green",
    title: "Quant Finance Analyst",
    description: "Expert in algorithmic trading strategies, risk modeling, and high-frequency trading systems.",
    skills: ["Stochastic Calculus", "C++", "Market Data"],
    type: "Contract",
    icon: "candlestick_chart",
  },
  {
    id: 3,
    category: "Finance Tech",
    status: "Starting Soon",
    statusColor: "yellow",
    title: "Sr. C++ Developer (Low Latency)",
    description: "Backend optimization specialist for high-performance computing environments.",
    skills: ["C++20", "Multithreading", "Linux Kernel"],
    type: "Full-time",
    icon: "terminal",
  },
  {
    id: 4,
    category: "VLSI Design",
    status: "Available Now",
    statusColor: "green",
    title: "FPGA Engineer",
    description: "Hardware acceleration specialist for AI model inference and signal processing.",
    skills: ["Verilog", "VHDL", "Xilinx Vivado"],
    type: "Contract",
    icon: "memory",
  },
  {
    id: 5,
    category: "LLM Specialists",
    status: "Available Now",
    statusColor: "green",
    title: "NLP Research Scientist",
    description: "Focus on fine-tuning large language models for domain-specific applications.",
    skills: ["PyTorch", "Hugging Face", "Transformers"],
    type: "Full-time",
    icon: "robot",
  },
  {
    id: 6,
    category: "Embedded Systems",
    status: "Starting Soon",
    statusColor: "yellow",
    title: "Embedded Linux Engineer",
    description: "Driver development and kernel customization for IoT edge devices.",
    skills: ["Yocto", "Device Drivers", "RTOS"],
    type: "Contract",
    icon: "developer_board",
  },
  {
    id: 7,
    category: "Product Management",
    status: "Available Now",
    statusColor: "green",
    title: "Senior Product Manager",
    description: "Strategic leader driving end-to-end product development, market positioning, and roadmap execution.",
    skills: ["Product Strategy", "Go-To-Market", "Agile"],
    type: "Full-time",
    icon: "lightbulb",
  }
];

export default function TalentSolutions() {
  const [activeCategory, setActiveCategory] = useState("All Roles");
  const [roles, setRoles] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      if (!supabase) {
        setRoles(FALLBACK_ROLES);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('jobs')
          .select('*');
        if (error) {
          throw error;
        }
        if (data && data.length > 0) {
          // Note: In an actual production environment we might have to map column names here 
          // like status_color -> statusColor if the shape doesn't match exactly.
          setRoles(data as Job[]);
        } else {
          setRoles(FALLBACK_ROLES);
        }
      } catch (err) {
        console.error("Error fetching jobs from supabase", err);
        // Fallback array if connection fails or table doesn't exist yet
        setRoles(FALLBACK_ROLES);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const filteredRoles = roles.filter(role =>
    activeCategory === "All Roles" || role.category === activeCategory
  );

  return (
    <main id="top" className="flex-1 flex flex-col items-center w-full bg-[#101622]">
      <div className="w-full max-w-[1280px] px-6 md:px-10 lg:px-14 pb-12">
        <div className="@container mt-6">
          <div className="rounded-xl overflow-hidden relative">
            <div
              className="flex min-h-[360px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12 md:px-12 md:pb-16"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.6) 0%, rgba(16, 22, 34, 0.8) 100%), url("${HERO_BACKGROUND_IMAGE.src}")`,
              }}
            >
              <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />
              <div className="absolute inset-0 hero-gradient-overlay pointer-events-none" aria-hidden="true" />
              <div className="flex flex-col gap-3 text-left max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/70 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/30 w-fit">
                  Staff Augmentation
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black font-display leading-[1.04] tracking-tight">
                  Expert Talent for <br />
                  <span className="text-primary">Prewise Consulting</span>
                </h1>
                <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  Access pre-vetted experts who power our DeepTech Consulting, Product Management & Strategy engagements. Specialists in VLSI, embedded systems, AI/ML, and product delivery or product leadership ready to augment your team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/form/schedule-consultation?context=talent" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all transform hover:-translate-y-1">Schedule Consultation</Link>
                <Link href="/form/apply-consultant" className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-bold transition-all backdrop-blur-sm transform hover:-translate-y-1">
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <h2 className="text-white text-2xl md:text-3xl font-bold font-display leading-tight">Featured Roles</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {ROLE_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap flex h-9 items-center justify-center gap-x-2 rounded-lg px-4 text-sm font-medium transition-colors cursor-pointer ${activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-card-dark border border-border-dark hover:border-primary/50 text-slate-300"}
                  focus-ring
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 mt-6">
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role) => (
              <div key={role.id} className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col min-h-[360px] ring-1 ring-transparent hover:ring-[#1152d4]/35 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1152d4]/12">
                <div className="flex justify-between items-start mb-4">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">{role.icon}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${role.statusColor === 'green'
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                    {role.status}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold font-display mb-1 group-hover:text-primary transition-colors">{role.title}</h3>
                <p className="text-[#c3cadd] text-sm mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                  {role.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-border-dark flex items-center justify-between text-text-secondary text-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    <span>{role.type}</span>
                  </div>
                  <Link href={`/form/schedule-consultation?role=${encodeURIComponent(role.title)}`} className="inline-flex items-center gap-1 text-[#b5c4f5] hover:text-white text-xs font-semibold tracking-[0.04em] transition-colors focus-ring">
                    Learn more
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-slate-400 text-lg">No open roles currently available in this category.</p>
            </div>
          )}
        </div>

        <div className="mt-16 rounded-2xl bg-[#1a212e] overflow-hidden border border-border-dark">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold font-display text-white mb-4 leading-tight">Looking for Consulting Services?</h2>
              <p className="text-slate-200 mb-8 leading-relaxed">
                Prewise offers consulting practices beyond staff augmentation. Our expert consultants provide DeepTech Consulting for VLSI, embedded systems, and AI/ML projects — and full‑stack Product Management Consulting, including product strategy & vision, startup advisory, go‑to‑market planning, product innovation, business model design, product‑led growth, and market insights.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display">Expert Consultants</h4>
                    <p className="text-sm text-text-secondary">DeepTech and Product Management specialists with proven track records.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display">Strategic Guidance</h4>
                    <p className="text-sm text-text-secondary">End-to-end consulting from problem definition to implementation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#151b26] p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-border-dark flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Find Your Expert?</h3>
              <p className="text-slate-200 mb-8">Connect with our team to discuss your specific talent or consulting needs.</p>
              <div className="flex flex-col gap-4 w-full">
                <Link href="/form/schedule-consultation?context=talent" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-colors lift">
                  Schedule Consultation →
                </Link>
                <Link href="/join-us" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-bold transition-colors lift">
                  Join Prewise
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 border-b border-border-dark">
          <div className="text-center">
            <AnimatedStat value={250} suffix="+" className="text-3xl md:text-4xl font-black text-white font-display mb-1" />
            <p className="text-text-secondary text-sm">Experts & Consultants</p>
          </div>
          <div className="text-center">
            <AnimatedStat value={8} suffix="+" className="text-3xl md:text-4xl font-black text-white font-display mb-1" />
            <p className="text-text-secondary text-sm">Practice Areas</p>
          </div>
          <div className="text-center">
            <AnimatedStat value={2} className="text-3xl md:text-4xl font-black text-white font-display mb-1" />
            <p className="text-text-secondary text-sm">Core Practices</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-black text-white font-display mb-1">48h</p>
            <p className="text-text-secondary text-sm">Avg. Engagement Start</p>
          </div>
        </div>
      </div>
    </main>
  );
}
