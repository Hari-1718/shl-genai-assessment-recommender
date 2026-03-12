"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HERO_BACKGROUND_IMAGE from "@/assets/home_hero_bg.png";
import VLSI_DESIGN_IMAGE from "@/assets/vlsi_design.png";
import EMBEDDED_SYSTEMS_IMAGE from "@/assets/embedded_systems.png";
import AI_ML_IMAGE from "@/assets/ai_ml.png";
import GENERATIVE_AI_IMAGE from "@/assets/generative_ai.png";
import PRODUCT_MANAGEMENT_IMAGE from "@/assets/product_management_img.png";
import STARTUP_ADVISORY_IMAGE from "@/assets/startup_advisory_img.png";
import DATA_ANALYTICS_IMAGE from "@/assets/data_analytics_img.png";
import QUANT_FINANCE_IMAGE from "@/assets/quant_finance_img.png";
import LAB_ENGINEER_IMAGE from "@/assets/lab_engineer.png";
import AnimatedStat from "@/components/AnimatedStat";
import { TextGenerateEffect } from "@/ui/text-generate-effect";

export default function LandingPage() {
  const router = useRouter();
  const [persona, setPersona] = useState<string>("");
  const [error, setError] = useState<string>("");

  const personas = [
    {
      value: "product-leader",
      label: "Product Manager / Product Leader",
      help: "I’m looking for collaboration or a sounding board.",
      icon: "strategy",
      href: "/join-us",
    },
    {
      value: "founder",
      label: "Founder / CXO / Business Head",
      help: "I need help with product or project execution.",
      icon: "rocket_launch",
      href: "/form/schedule-consultation?context=founder-exec",
    },
    {
      value: "deep-tech",
      label: "Deep-tech Engineer / Architect",
      help: "I’m interested in working on VLSI / embedded / AI products.",
      icon: "memory",
      href: "/join-us",
    },
    {
      value: "partner",
      label: "Ecosystem Partner / Investor / Other",
      help: "I’d like to explore partnership.",
      icon: "handshake",
      href: "/form/schedule-consultation?context=partners",
    },
  ];

  const handleCollaborate = () => {
    if (!persona) {
      setError("Please select the option that best describes you.");
      return;
    }
    const target = personas.find((p) => p.value === persona)?.href;
    if (target) {
      router.push(target);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <section className="w-full relative px-6 py-12 lg:py-24 flex justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.75), rgba(16, 22, 34, 0.9)), url("${HERO_BACKGROUND_IMAGE.src}")`,
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-[960px] flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-300 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[18px] text-primary">auto_awesome</span>
            <span className="text-primary">Deep Tech & Product Management</span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.05] space-y-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <TextGenerateEffect
              text="Prewise Consulting:"
              className="block text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
              speedMs={55}
            />
            <TextGenerateEffect
              text="Product Management &"
              className="block text-[#2d7cf6] drop-shadow-[0_10px_26px_rgba(45,124,246,0.35)]"
              speedMs={55}
              startDelayMs={350}
            />
            <TextGenerateEffect
              text="Deep Tech Engineering"
              className="block text-[#2d7cf6] drop-shadow-[0_10px_26px_rgba(45,124,246,0.35)]"
              speedMs={55}
              startDelayMs={650}
            />
          </h1>
          <p className="text-slate-200 text-xl md:text-2xl max-w-3xl leading-relaxed">
            Build Your Next Product Bet with On-Demand Product Leadership. Tell us who you are so we can collaborate in the right way.
          </p>

          <div className="w-full max-w-4xl space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {personas.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => {
                    setPersona(p.value);
                    setError("");
                  }}
                  aria-pressed={persona === p.value}
                  className={`w-full text-left rounded-xl border px-4 py-4 transition-all duration-300 ease-out backdrop-blur-sm focus-ring transform hover:-translate-y-[2px] hover:scale-[1.01] ${
                    persona === p.value
                      ? "border-primary/80 bg-gradient-to-br from-primary/20 via-[#15213a] to-primary/5 text-white shadow-[0_18px_50px_-18px_rgba(17,82,212,0.75)] scale-[1.03]"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-primary/40 hover:bg-white/10 hover:shadow-[0_10px_28px_-18px_rgba(17,82,212,0.55)]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`material-symbols-outlined mt-0.5 text-[20px] ${persona === p.value ? "text-primary" : "text-slate-400"}`}>
                      {persona === p.value ? "radio_button_checked" : "radio_button_unchecked"}
                    </span>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-[20px] transition-colors duration-300 ${persona === p.value ? "text-primary" : "text-slate-400"}`}>{p.icon}</span>
                        <p className="text-sm font-semibold leading-snug text-white">{p.label}</p>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">{p.help}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {error && <p className="text-xs text-red-300">{error}</p>}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleCollaborate}
              className={`h-12 px-8 rounded-lg text-white font-bold text-base transition-all duration-200 flex items-center gap-2 transform active:scale-[0.98] active:translate-y-[1px] focus-ring ${
                persona
                  ? "bg-primary hover:bg-blue-600 shadow-[0_18px_55px_-18px_rgba(17,82,212,0.85)] hover:shadow-[0_22px_65px_-18px_rgba(17,82,212,0.9)] hover:-translate-y-1 animate-pulse group"
                  : "bg-primary/70 cursor-not-allowed opacity-75 pointer-events-none"
              }`}
            >
              <span className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-[2px]">handshake</span>
              Collaborate
              {persona && <span className="material-symbols-outlined text-[18px] animate-pulse">arrow_forward</span>}
            </button>
            <Link
              className="h-12 px-8 rounded-lg bg-surface-dark/50 hover:bg-surface-dark border border-slate-700 hover:border-primary/50 text-white font-bold text-base backdrop-blur-md transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-1"
              href="/expertise"
            >
              Explore Practices
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 pt-6 border-t border-slate-800/50 mt-6 w-full px-6">
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

      <section className="w-full px-6 py-16 lg:py-24 bg-[#101622]" id="deep-tech-services">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-[#1152d4] font-bold text-sm tracking-widest uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Prewise Practices</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Prewise – DeepTech & Product Management Consulting</h3>
              <p className="mt-4 text-[#9da6b9] text-lg" style={{ fontFamily: "'Noto Sans', sans-serif" }}>We bridge the gap between complex hardware requirements and intelligent software solutions across semiconductors, embedded systems, and AI/ML.</p>
            </div>
            <Link href="/expertise" className="text-[#1152d4] font-bold hover:underline inline-flex items-center gap-1 group" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
              View All Capabilities
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_outward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${PRODUCT_MANAGEMENT_IMAGE.src}')` }}></div>
                <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">lightbulb</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Product Management</h4>
              </div>
              <p className="text-[#9da6b9] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Guidance on product vision, go‑to‑market strategy, innovation, and market insights to drive growth.</p>
              <Link href="/product-consulting#top" className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
            </div>

            <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${STARTUP_ADVISORY_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">rocket_launch</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Startup Advisory</h4>
              </div>
              <p className="text-[#9da6b9] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Early-stage guidance on business model, funding strategy, product-market fit, and scaling playbooks.</p>
              <Link href="/product-consulting#top" className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
            </div>

            <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${VLSI_DESIGN_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">memory</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>VLSI Design</h4>
              </div>
              <p className="text-[#9da6b9] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>End-to-end chip design, verification, and physical design services for next-gen silicon.</p>
              <Link href="/expertise#top" className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
            </div>

            <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${EMBEDDED_SYSTEMS_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">developer_board</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Embedded Systems</h4>
              </div>
              <p className="text-[#9da6b9] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Firmware development, RTOS, and IoT integration for mission-critical industrial systems.</p>
              <Link href="/expertise#top" className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
            </div>

            <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${AI_ML_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">neurology</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI & ML</h4>
              </div>
              <p className="text-[#9da6b9] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Custom model development, training, and deployment for scalable artificial intelligence solutions.</p>
              <Link href="/expertise#top" className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
            </div>

            <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${GENERATIVE_AI_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">smart_toy</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Generative AI</h4>
              </div>
              <p className="text-[#9da6b9] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Fine-tuning LLMs and building RAG pipelines for enterprise-grade generative applications.</p>
              <Link href="/expertise" className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
            </div>

            <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${DATA_ANALYTICS_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">analytics</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Data & Analytics</h4>
              </div>
              <p className="text-[#9da6b9] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Data science, annotation, analytics, and business intelligence services for data-driven insights.</p>
              <Link href="/expertise" className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
            </div>

            <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
              <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${QUANT_FINANCE_IMAGE.src}')` }}></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">trending_up</span>
                <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quant Finance</h4>
              </div>
              <p className="text-[#9da6b9] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Algorithmic trading, risk modeling, and quantitative strategies for financial innovation.</p>
              <Link href="/expertise" className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400" style={{ fontFamily: "'Noto Sans', sans-serif" }}>Learn more <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-dark border-y border-slate-800/50 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 w-full">
            <div>
              <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Why Choose Prewise?</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Expert Consulting for Deep Tech & Product Management</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
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
