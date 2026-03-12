import Link from "next/link";
import AnimatedStat from "../components/AnimatedStat";
import HERO_BACKGROUND_IMAGE from "../assets/home_hero_bg.png";
import VLSI_DESIGN_IMAGE from "../assets/vlsi_design.png";
import EMBEDDED_SYSTEMS_IMAGE from "../assets/embedded_systems.png";
import AI_ML_IMAGE from "../assets/ai_ml.png";
import GENERATIVE_AI_IMAGE from "../assets/generative_ai.png";
import PRODUCT_MANAGEMENT_IMAGE from "../assets/product_management_img.png";
import STARTUP_ADVISORY_IMAGE from "../assets/startup_advisory_img.png";
import DATA_ANALYTICS_IMAGE from "../assets/data_analytics_img.png";
import QUANT_FINANCE_IMAGE from "../assets/quant_finance_img.png";
import LAB_ENGINEER_IMAGE from "../assets/lab_engineer.png";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <section className="w-full relative px-6 md:px-10 lg:px-14 py-14 lg:py-24 flex justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.78), rgba(16, 22, 34, 0.92)), url("${HERO_BACKGROUND_IMAGE.src}")`,
          }}
        ></div>
        <div className="absolute inset-0 z-0 hero-gleam" aria-hidden="true"></div>
        <div className="absolute inset-0 z-0 hero-gradient-overlay" aria-hidden="true"></div>
        <div className="absolute inset-0 z-0 noise-overlay" aria-hidden="true"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/18 via-transparent to-transparent" aria-hidden="true"></div>
        <div className="relative z-10 max-w-[960px] flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-300 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[18px] text-primary">auto_awesome</span>
            <span className="text-primary">Deep Tech & Product Management</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] font-display">
            <TextGenerateEffect text="Prewise Consulting:" className="block text-white" speedMs={55} />
            <TextGenerateEffect
              text="Product Management & Deep Tech Engineering"
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary"
              speedMs={55}
              startDelayMs={400}
            />
          </h1>
          <div className="flex flex-col gap-4 text-slate-100 text-lg md:text-lg max-w-2xl font-light leading-relaxed text-left">
            <p>
              <strong>Product Management Consulting:</strong> We guide product strategy & vision, startup advisory, go-to-market planning, product innovation, business model design, product-led growth, and market insights to accelerate your success.
            </p>
            <p>
              <strong>DeepTech Consulting:</strong> Prewise delivers specialized consulting for VLSI design, semiconductors, embedded systems, AI/ML, and data engineering. We solve complex technical challenges with scalable, production-ready solutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              className="h-12 px-7 rounded-md bg-primary hover:bg-blue-600 text-white font-semibold text-[15px] tracking-[0.01em] transition-all duration-200 hover:shadow-xl hover:shadow-blue-900/30 flex items-center gap-2 transform hover:-translate-y-1 lift focus-ring"
              href="/form/schedule-consultation?context=general"
            >
              <span className="material-symbols-outlined">person_search</span>
              Schedule Consultation
            </Link>
            <a
              className="h-12 px-7 rounded-md bg-surface-dark/50 hover:bg-surface-dark border border-slate-700 hover:border-primary/50 text-white font-semibold text-[15px] tracking-[0.01em] backdrop-blur-md transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-1 lift focus-ring"
              href="#deep-tech-services"
            >
              Explore Practices
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <Link
              className="h-12 px-7 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-[15px] tracking-[0.01em] transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-1 lift focus-ring shadow-[0_12px_30px_-18px_rgba(255,255,255,0.45)]"
              href="/form/schedule-consultation?context=expert"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              Talk to an Expert
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 pt-6" aria-hidden="true">
            <span className="text-[12px] uppercase tracking-[0.12em] text-slate-400">Scroll to explore</span>
            <a href="#deep-tech-services" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-colors focus-ring">
              <span className="material-symbols-outlined animate-bounce text-lg">keyboard_double_arrow_down</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 pt-6 border-t border-slate-800/50 mt-6 w-full">
            <div className="flex flex-col items-center text-center gap-1 hover:text-primary transition-colors cursor-default group">
              <AnimatedStat value={250} suffix="+" className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary transition-colors" />
              <span className="text-sm md:text-base text-slate-400">Experts & Consultants</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1 hover:text-primary transition-colors cursor-default group">
              <AnimatedStat value={8} suffix="+" className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary transition-colors" />
              <span className="text-sm md:text-base text-slate-400">Practice Areas</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1 hover:text-primary transition-colors cursor-default group">
              <AnimatedStat value={2} className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary transition-colors" />
              <span className="text-sm md:text-base text-slate-400">Core Practices</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-6 md:px-10 lg:px-14 py-20 lg:py-24 bg-[#101622]"
        id="deep-tech-services"
        style={{ scrollMarginTop: "calc(var(--header-height) + 24px)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div className="max-w-2xl">
              <h2 className="text-[#1152d4] font-semibold text-xs md:text-sm tracking-[0.22em] uppercase mb-3 font-display">Prewise Practices</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight">Prewise – DeepTech & Product Management Consulting</h3>
              <p className="mt-4 text-slate-200 text-lg leading-relaxed">We bridge the gap between complex hardware requirements and intelligent software solutions across semiconductors, embedded systems, and AI/ML.</p>
            </div>
            <Link href="/expertise" className="text-[#1152d4] font-bold hover:underline inline-flex items-center gap-1 group" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
              View All Capabilities
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_outward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
            {/* Product Management tile - First */}
            <div className="group relative rounded-xl p-6 bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/12 hover:-translate-y-1 flex flex-col min-h-[420px]">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${PRODUCT_MANAGEMENT_IMAGE.src}')` }}></div>
                <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">lightbulb</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Product Management</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Strategy</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">GTM</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Roadmaps</span>
              </div>
              <p className="text-[#c3cadd] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Guidance on product vision, go‑to‑market strategy, innovation, and market insights to drive growth.</p>
              <div className="mt-auto pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
                <Link href="/product-consulting#top" className="inline-flex items-center font-semibold text-[#b5c4f5] hover:text-white transition-colors" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
              </div>
            </div>

            {/* Startup Advisory tile - Second */}
            <div className="group relative rounded-xl p-6 bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/12 hover:-translate-y-1 flex flex-col min-h-[420px]">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${STARTUP_ADVISORY_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">rocket_launch</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Startup Advisory</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">PMF</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Funding</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Scale</span>
              </div>
              <p className="text-[#c3cadd] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Early-stage guidance on business model, funding strategy, product-market fit, and scaling playbooks.</p>
              <div className="mt-auto pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
                <Link href="/product-consulting#top" className="inline-flex items-center font-semibold text-[#b5c4f5] hover:text-white transition-colors" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
              </div>
            </div>

            <div className="group relative rounded-xl p-6 bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/12 hover:-translate-y-1 flex flex-col min-h-[420px]">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${VLSI_DESIGN_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">memory</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>VLSI Design</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">RTL</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Verification</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Physical</span>
              </div>
              <p className="text-[#c3cadd] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>End-to-end chip design, verification, and physical design services for next-gen silicon.</p>
              <div className="mt-auto pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
                <Link href="/expertise#top" className="inline-flex items-center font-semibold text-[#b5c4f5] hover:text-white transition-colors" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
              </div>
            </div>

            <div className="group relative rounded-xl p-6 bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/12 hover:-translate-y-1 flex flex-col min-h-[420px]">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${EMBEDDED_SYSTEMS_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">developer_board</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Embedded Systems</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Firmware</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">RTOS</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">IoT</span>
              </div>
              <p className="text-[#c3cadd] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Firmware development, RTOS, and IoT integration for mission-critical industrial systems.</p>
              <div className="mt-auto pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
                <Link href="/expertise#top" className="inline-flex items-center font-semibold text-[#b5c4f5] hover:text-white transition-colors" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
              </div>
            </div>

            <div className="group relative rounded-xl p-6 bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/12 hover:-translate-y-1 flex flex-col min-h-[420px]">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${AI_ML_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">neurology</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI & ML</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Models</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">MLOps</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Deploy</span>
              </div>
              <p className="text-[#c3cadd] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Custom model development, training, and deployment for scalable artificial intelligence solutions.</p>
              <div className="mt-auto pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
                <Link href="/expertise#top" className="inline-flex items-center font-semibold text-[#b5c4f5] hover:text-white transition-colors" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
              </div>
            </div>

            <div className="group relative rounded-xl p-6 bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/12 hover:-translate-y-1 flex flex-col min-h-[420px]">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${GENERATIVE_AI_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">smart_toy</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Generative AI</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">LLMs</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">RAG</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Fine-tune</span>
              </div>
              <p className="text-[#c3cadd] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Fine-tuning LLMs and building RAG pipelines for enterprise-grade generative applications.</p>
              <div className="mt-auto pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
                <Link href="/expertise" className="inline-flex items-center font-semibold text-[#b5c4f5] hover:text-white transition-colors" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
              </div>
            </div>

            {/* Data Science tile */}
            <div className="group relative rounded-xl p-6 bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/12 hover:-translate-y-1 flex flex-col min-h-[420px]">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${DATA_ANALYTICS_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">analytics</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Data & Analytics</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">BI</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Analytics</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Data</span>
              </div>
              <p className="text-[#c3cadd] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Data science, annotation, analytics, and business intelligence services for data-driven insights.</p>
              <div className="mt-auto pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
                <Link href="/expertise" className="inline-flex items-center font-semibold text-[#b5c4f5] hover:text-white transition-colors" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
              </div>
            </div>

            {/* Quant Finance tile */}
            <div className="group relative rounded-xl p-6 bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/12 hover:-translate-y-1 flex flex-col min-h-[420px]">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${QUANT_FINANCE_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">trending_up</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quant Finance</h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-3 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Risk</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Algo</span>
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Models</span>
              </div>
              <p className="text-[#c3cadd] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Algorithmic trading, risk modeling, and quantitative strategies for financial innovation.</p>
              <div className="mt-auto pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
                <Link href="/expertise" className="inline-flex items-center font-semibold text-[#b5c4f5] hover:text-white transition-colors" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-dark border-y border-slate-800/50 scroll-mt-20" id="about">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 py-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 w-full">
            <div>
              <h2 className="text-primary font-semibold text-xs md:text-sm tracking-[0.22em] uppercase mb-2 font-display">Why Choose Prewise?</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display leading-tight">Expert Consulting for Deep Tech & Product Management</h3>
              <p className="text-slate-200 text-lg leading-relaxed">
                Prewise combines deep technical expertise with strategic product knowledge. Whether you're building the next generation of semiconductors or scaling a product to market, we deploy specialized consultants who understand complex system architecture and business strategy.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Vetted Top 1% Talent</h4>
                  <p className="text-slate-400">Rigorous technical screening by domain experts ensuring immediate project contribution.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Rapid Deployment</h4>
                  <p className="text-slate-400">Reduce hiring time from months to days with our pre-assessed talent network.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">hub</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Flexible Engagement Models</h4>
                  <p className="text-slate-400">From staff augmentation to managed projects and dedicated offshore development centers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md mx-auto relative">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                  <img
                    alt="Engineer working on complex hardware system in lab"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    src={LAB_ENGINEER_IMAGE.src}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-background-dark/90 backdrop-blur-md border border-slate-700 rounded-lg z-20 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-white font-bold text-sm truncate">Project Milestone Reached</p>
                        <p className="text-slate-400 text-xs truncate">AI Model Deployment - Phase 2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-[#0A3A9C] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute inset-0 noise-overlay" aria-hidden="true"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-blue-100 text-lg max-w-3xl leading-relaxed">Pioneering the future of technology with specialized consulting and elite VLSI, Embedded, AI, and Product Management talent to shape winning roadmaps, launch successful products, and scale high‑impact platforms.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link
                href="/form/schedule-consultation?context=general"
                className="h-12 px-8 rounded-lg bg-white text-primary font-bold text-base hover:bg-blue-50 transition-all duration-200 hover:-translate-y-1 shadow-lg active:translate-y-0 flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
              <Link
                className="flex items-center justify-center h-12 px-8 rounded-lg bg-blue-900/40 text-white border border-blue-400/30 font-bold text-base hover:bg-blue-900/60 transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm active:translate-y-0"
                href="/talent-solutions"
              >
                Explore Our Practices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
