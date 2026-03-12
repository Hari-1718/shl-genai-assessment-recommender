import Link from "next/link";
import PRODUCT_STRATEGY_IMAGE from "../assets/generative_ai.png";
import PRODUCT_VISION_IMAGE from "../assets/embedded_systems.png";
import GTM_IMAGE from "../assets/ai_ml.png";

export default function ProductConsulting() {
  return (
    <div id="top" className="flex flex-col w-full bg-[#101622]">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 pb-12">
        <div className="@container mt-6">
          <div className="rounded-xl overflow-hidden relative">
            <div
              className="flex min-h-[360px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12 md:px-12 md:pb-16"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.6) 0%, rgba(16, 22, 34, 0.8) 100%), url("${PRODUCT_STRATEGY_IMAGE.src}")`,
              }}
            >
              <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />
              <div className="absolute inset-0 hero-gradient-overlay pointer-events-none" aria-hidden="true" />
              <div className="flex flex-col gap-3 text-left max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/70 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/30 w-fit">
                  Product Management Consulting
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black font-display leading-[1.04] tracking-tight">
                  Scale Your Product <br />
                  <span className="text-primary">with Expert Guidance</span>
                </h1>
                <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  From product vision and strategy to go-to-market execution, our experienced product consultants help you build, launch, and scale products that win in the market.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/form/schedule-consultation?context=product" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all transform hover:-translate-y-1">Schedule Consultation</Link>
                <Link href="/form/apply-consultant?role=product-manager" className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-bold transition-all backdrop-blur-sm transform hover:-translate-y-1">
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          <h2 className="text-white text-3xl font-bold font-display leading-tight">Our Product Management Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
            <div id="startup-advisory" className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">handshake</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Startup Advisory</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Align product strategy, fundraising narratives, and early GTM motion with practical guidance tailored for fast-moving startup teams.</p>
            </div>

            <div className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">lightbulb</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Product Vision & Strategy</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Define your product roadmap, positioning, and long-term strategy to achieve market leadership.</p>
            </div>

            <div className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Go-to-Market Strategy</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Develop compelling GTM plans with clear positioning, pricing, distribution, and launch tactics.</p>
            </div>

            <div className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">trending_up</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Product Innovation</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Identify market gaps, innovate features, and deliver breakthrough products customers love.</p>
            </div>

            <div className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">business_center</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Business Model Design</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Shape sustainable business models with the right revenue streams, customer segments, and margins.</p>
            </div>

            <div className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">assessment</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Product-Led Growth</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Implement product-first growth strategies to acquire, retain, and expand your customer base.</p>
            </div>

            <div className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">analytics</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Market Insights & Research</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Leverage deep market intelligence and competitive analysis to make informed product decisions.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl p-6 bg-[#0b1220] border border-[#2d3546]">
          <h3 className="text-xl font-bold text-white mb-4">Engagement Models</h3>
          <p className="text-slate-200 mb-6">We offer flexible engagement models to suit the maturity and needs of your organization.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1c2333] rounded-xl p-6 border border-[#2d3546]">
              <h4 className="text-white font-bold mb-2">Fractional Product Management</h4>
              <p className="text-sm text-text-secondary">Part-time, senior product leadership for roadmap, stakeholder alignment, and interim CPO responsibilities—ideal for early-stage teams or companies needing experienced guidance without a full-time hire.</p>
            </div>
            <div className="bg-[#1c2333] rounded-xl p-6 border border-[#2d3546]">
              <h4 className="text-white font-bold mb-2">Full-Time Product Management</h4>
              <p className="text-sm text-text-secondary">Dedicated product leaders embedded in your organization to drive product development, go‑to‑market execution, and long-term product strategy.</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/form/apply-consultant?role=product-manager" className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-lg font-bold lift">Apply as a Product Consultant</Link>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-[#1a212e] overflow-hidden border border-border-dark">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold font-display text-white mb-4 leading-tight">Ready to Transform Your Product?</h2>
              <p className="text-slate-200 mb-8 leading-relaxed">
                Our product management consultants combine deep industry experience with proven frameworks to help you navigate complex product challenges and achieve ambitious goals.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display">Seasoned Leaders</h4>
                    <p className="text-sm text-text-secondary">Former CPOs and product leaders from fast-growing startups and enterprise companies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">public</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display">Global Expertise</h4>
                    <p className="text-sm text-text-secondary">Experience across industries, markets, and business models worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#151b26] p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-border-dark flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule Consultation?</h3>
              <p className="text-slate-200 mb-8">Connect with our product experts to discuss your specific needs.</p>
              <Link href="/form/schedule-consultation?context=product" className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-colors lift">
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
