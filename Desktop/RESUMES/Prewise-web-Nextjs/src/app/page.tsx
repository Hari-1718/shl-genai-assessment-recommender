"use client";

import Link from "next/link";
import AnimatedStat from "@/components/AnimatedStat";
import HERO_BACKGROUND_IMAGE from "@/assets/home_hero_bg.png";
import LAB_ENGINEER_IMAGE from "@/assets/lab_engineer.png";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";
import { TextGenerateEffect } from "@/ui/text-generate-effect";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <section className="w-full relative px-4 sm:px-6 py-12 lg:py-24 flex justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.75), rgba(16, 22, 34, 0.9)), url("${HERO_BACKGROUND_IMAGE.src}")`,
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-[960px] flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-300 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[18px] text-primary">auto_awesome</span>
            <span className="text-primary">Deep Tech & Product Management</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <TextGenerateEffect
              text="Prewise Consulting:"
              className="block text-white"
              speedMs={55}
            />
            <TextGenerateEffect
              text="Product Management & Deep Tech Engineering"
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary"
              speedMs={55}
              startDelayMs={400}
            />
          </h1>
          <div className="flex flex-col gap-4 text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed text-left px-1">
            <p>
              <strong>Product Management Consulting:</strong> We guide product strategy & vision, startup advisory, go-to-market planning, product innovation, business model design, product-led growth, and market insights to accelerate your success.
            </p>
            <p>
              <strong>DeepTech Consulting:</strong> Prewise delivers specialized consulting for VLSI design, semiconductors, embedded systems, AI/ML, and data engineering. We solve complex technical challenges with scalable, production-ready solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full max-w-3xl px-1">
            <Link
              prefetch
              href="/form/schedule-consultation?context=home-hero"
              className="h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-900/30 flex items-center gap-2 justify-center transform hover:-translate-y-1 focus-ring w-full sm:w-auto"
            >
              <span className="material-symbols-outlined">person_search</span>
              Schedule Consultation
            </Link>
            <a
              className="h-12 px-8 rounded-lg bg-surface-dark/50 hover:bg-surface-dark border border-slate-700 hover:border-primary/50 text-white font-bold text-base backdrop-blur-md transition-all duration-200 flex items-center gap-2 justify-center transform hover:-translate-y-1 w-full sm:w-auto"
              href="#deep-tech-services"
            >
              Explore Practices
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 pt-6 border-t border-slate-800/50 mt-6 w-full">
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

      <section className="w-full px-4 sm:px-6 py-12 lg:py-24 bg-[#101622]" id="deep-tech-services">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-[#1152d4] font-bold text-sm tracking-widest uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Prewise Practices</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Prewise – DeepTech & Product Management Consulting</h3>
              <p className="mt-4 text-[#9da6b9] text-lg">We bridge the gap between complex hardware requirements and intelligent software solutions across semiconductors, embedded systems, and AI/ML.</p>
            </div>
            <Link prefetch href="/expertise" className="text-[#1152d4] font-bold hover:underline inline-flex items-center gap-1 group">
              View All Capabilities
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_outward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-dark border-y border-slate-800/50 scroll-mt-20" id="about">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
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

      <section className="w-full py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-[#0A3A9C] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-blue-100 text-lg max-w-3xl leading-relaxed">Pioneering the future of technology with specialized consulting and elite VLSI, Embedded, AI, and Product Management talent to shape winning roadmaps, launch successful products, and scale high‑impact platforms.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
              <Link
                prefetch
                href="/form/schedule-consultation?context=general"
                className="h-12 px-8 rounded-lg bg-white text-primary font-bold text-base hover:bg-blue-50 transition-all duration-200 hover:-translate-y-1 shadow-lg active:translate-y-0 flex items-center justify-center w-full sm:w-auto"
              >
                Schedule Consultation
              </Link>
              <Link
                prefetch
                className="flex items-center justify-center h-12 px-8 rounded-lg bg-blue-900/40 text-white border border-blue-400/30 font-bold text-base hover:bg-blue-900/60 transition-all duration-200 hover:-translate-y-1 backdrop-blur-sm active:translate-y-0 w-full sm:w-auto"
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
