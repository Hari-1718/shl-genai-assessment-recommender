import Link from "next/link";

const PARTNERS_HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuAcO2QNW0_w0w0qNKPcKQcebZB6ckyHE32iIdh1NCh_cEFtUuedrrDWFwX_vkTMzq5rL5YJ2b73XzdPNq7Z-kK3IjN5J9f8NcPhtxhV7ByKSPxad3PGoCCxMhZXJTFJVNm7FTC3XoqvMg6QEvPDrei4gla0P3cf-5bDlYKWc6wcZV27Rt8XLP-wxHA-7tuPZfkPHYS9XblOuNwxmHu2oMF0mWEsM5I2RHv4alzM66ppoe54lzqflx3oNStPd5eYGlxvY4khcqFjSuKl";

export default function Partners() {
  return (
    <main className="flex-1 flex flex-col items-center w-full bg-[#101622]">
      <div
        className="relative w-full h-[260px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(16,22,34,0.55), rgba(16,22,34,0.8)), url('${PARTNERS_HERO}')`,
        }}
      >
        <div className="absolute inset-0 hero-gleam opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 hero-gradient-overlay" aria-hidden="true" />
        <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
        <div className="absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 lg:px-14 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight font-display">
            Partner with Prewise
          </h1>
          <p className="text-slate-200 text-base md:text-xl leading-relaxed">
            We collaborate with recruitment agencies, startups, and service providers who can deliver engineers,
            co-working space, or other resources under our umbrella. Let's build together.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl px-6 md:px-10 lg:px-14 mt-16 space-y-10">
        <section className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
          <div className="rounded-xl bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] p-6 ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1152d4]/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">group_add</span>
              <h2 className="text-xl font-bold text-white">Who We're Looking For</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Recruitment</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Startups</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Consulting</span>
            </div>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Recruitment agencies with deep tech or product talent pools</li>
              <li>Startups offering engineering teams or co-working facilities</li>
              <li>Consulting firms interested in joint go-to-market initiatives</li>
              <li>Any partner capable of augmenting Prewise under flexible terms</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
              <span>Flexible engagement models</span>
              <span className="material-symbols-outlined text-[18px] text-[#b5c4f5]">chevron_right</span>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-b from-[#1d2435] to-[#121927] border border-[#2d3546] p-6 ring-1 ring-transparent hover:ring-[#1152d4]/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1152d4]/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">workspace_premium</span>
              <h2 className="text-xl font-bold text-white">What We Offer</h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 text-[11px] uppercase tracking-[0.08em] text-[#9da6b9]">
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Branding</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Network</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Flexible</span>
            </div>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Prewise branding and client reach</li>
              <li>Transparent payroll and engagement management</li>
              <li>Access to our global network and projects</li>
              <li>Flexible collaboration models (payroll, co-working, referrals)</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-[#2d3546] flex items-center justify-between text-sm text-[#9da6b9]">
              <span>Trust & transparent ops</span>
              <span className="material-symbols-outlined text-[18px] text-[#b5c4f5]">chevron_right</span>
            </div>
          </div>
        </section>

        <section className="text-center rounded-xl border border-[#2d3546] bg-[#111829] p-8 ring-1 ring-transparent hover:ring-[#1152d4]/30 transition-all">
          <p className="text-text-secondary mb-6">
            Interested in partnering? Tell us more.
          </p>
          <Link
            href="/form/schedule-consultation?context=partners"
            className="inline-flex items-center px-7 py-3 bg-primary hover:bg-primary/90 text-white rounded-md text-[15px] font-semibold tracking-[0.01em] transition-colors lift focus-ring"
          >
            Discuss Partnership
            <span className="material-symbols-outlined text-[18px] ml-2">arrow_outward</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
