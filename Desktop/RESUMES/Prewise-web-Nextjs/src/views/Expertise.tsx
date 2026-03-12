import Link from "next/link";
import DEEPTECH_HERO_IMAGE from "../assets/deeptech_hero_bg.png";

export default function DeepTechConsulting() {
  return (
    <div id="top" className="flex flex-col w-full bg-[#101622]">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 pb-12">
        <div className="@container mt-6">
          <div className="rounded-xl overflow-hidden relative">
            <div
              className="flex min-h-[360px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12 md:px-12 md:pb-16"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.6) 0%, rgba(16, 22, 34, 0.8) 100%), url("${DEEPTECH_HERO_IMAGE.src}")`,
              }}
            >
              <div className="absolute inset-0 noise-overlay pointer-events-none" aria-hidden="true" />
              <div className="absolute inset-0 hero-gradient-overlay pointer-events-none" aria-hidden="true" />
              <div className="flex flex-col gap-3 text-left max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/70 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/30 w-fit">
                  Deep Tech Consulting
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black font-display leading-[1.04] tracking-tight">
                  Cutting-Edge Technology <br />
                  <span className="text-primary">for Mission-Critical Systems</span>
                </h1>
                <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  From semiconductor design and embedded systems to AI/ML and data engineering, our specialized consultants deliver production-ready solutions for complex technical challenges.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/form/schedule-consultation?context=deeptech" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all transform hover:-translate-y-1">Schedule Consultation</Link>
                <Link href="/form/apply-consultant" className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-bold transition-all backdrop-blur-sm transform hover:-translate-y-1">
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          <h2 className="text-white text-3xl font-bold font-display leading-tight">Our Deep Tech Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
            <div id="vlsi-design" className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">memory</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">VLSI Design</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">End-to-end chip design, verification, and physical design services for next-gen silicon including design automation and testability optimization.</p>
            </div>

            <div id="embedded-systems" className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">developer_board</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Embedded Systems</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Firmware development, RTOS implementation, and IoT integration for mission-critical industrial systems and real-time applications.</p>
            </div>

            <div id="ai-ml" className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">neurology</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">AI & ML Engineering</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Custom model development, training infrastructure, and deployment for scalable artificial intelligence solutions at enterprise scale.</p>
            </div>

            <div id="generative-ai" className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">smart_toy</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Generative AI</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Fine-tuning LLMs, building RAG pipelines, and prompt engineering for enterprise-grade generative AI applications.</p>
            </div>

            <div id="data-analytics" className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">analytics</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Data & Analytics</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Data science, annotation services, and analytics pipelines for data-driven decision making and ML-powered insights.</p>
            </div>

            <div id="quant-finance" className="group bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 rounded-xl p-6 flex flex-col">
              <div className="flex justify-start items-start mb-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">trending_up</span>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Quantitative Finance</h3>
              <p className="text-text-secondary text-sm mb-4 flex-1">Algorithmic trading systems, risk modeling, and quantitative strategies for financial innovation and high-performance computing.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-[#1a212e] overflow-hidden border border-border-dark">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold font-display text-white mb-4 leading-tight">Why Partner with Prewise for Deep Tech?</h2>
              <p className="text-slate-200 mb-8 leading-relaxed">
                Our expert consultants combine decades of experience in semiconductor engineering, systems design, and AI/ML to deliver production-ready solutions for your most critical technical challenges.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display">Proven Expertise</h4>
                    <p className="text-sm text-text-secondary">Engineers with experience at leading tech companies and deep technical domain knowledge.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">public</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display">Production-Ready Solutions</h4>
                    <p className="text-sm text-text-secondary">We deliver scalable, tested, and deployment-ready solutions, not just proof-of-concepts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#151b26] p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-border-dark flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule Consultation?</h3>
              <p className="text-slate-200 mb-8">Connect with our deep tech experts to discuss your technical challenges and requirements.</p>
              <Link href="/form/schedule-consultation?context=deeptech" className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-colors lift">
                Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

