import Link from "next/link";
import PrewiseLogo from "../assets/PrewiseLogo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#2d3546] bg-[#101622] py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 text-white mb-6">
            <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-[#1152d4]/40 bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:border-[#1152d4]/60 transition-all">
              <img src={PrewiseLogo.src} alt="Prewise Logo" className="w-full h-full object-contain scale-[1.3]" />
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Prewise Consulting</span>
          </div>
          <p className="text-[#9da6b9] text-sm leading-relaxed">
            Pioneering the future of technology with specialized consulting and elite VLSI, Embedded, AI, and Product Management talent.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              aria-label="Prewise Home"
              className="text-[#9da6b9] hover:text-white transition-colors hover:scale-110 duration-200"
              href="/"
            >
              <span className="material-symbols-outlined">public</span>
            </Link>
            <a
              aria-label="Email Prewise"
              className="text-[#9da6b9] hover:text-white transition-colors hover:scale-110 duration-200"
              href="mailto:connect@prewise.in"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <Link
              aria-label="Schedule Consultation"
              className="text-[#9da6b9] hover:text-white transition-colors hover:scale-110 duration-200"
              href="/form/schedule-consultation"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
            </Link>
            <a
              aria-label="Prewise on LinkedIn"
              className="text-[#9da6b9] hover:text-white transition-colors hover:scale-110 duration-200"
              href="https://www.linkedin.com/company/prewise/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 22h4.52V7.98H.24V22zM7.8 7.98h4.33v1.91h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.91V22h-4.52v-6.14c0-1.46-.03-3.34-2.03-3.34-2.03 0-2.34 1.58-2.34 3.22V22H7.8V7.98z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6f7a92] font-semibold mb-2">Services</p>
          <h4 className="text-white font-bold mb-3 font-display leading-tight">Consulting & Talent</h4>
          <ul className="space-y-2 text-[#9da6b9] text-sm">
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/product-consulting">Product Management Consulting</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/product-consulting#startup-advisory">Startup Advisory</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/expertise#vlsi-design">VLSI Design</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/expertise#embedded-systems">Embedded Systems</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/expertise#ai-ml">AI &amp; Machine Learning</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/expertise#generative-ai">Generative AI</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/expertise#quant-finance">Quantitative Finance</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/expertise#data-analytics">Data Science &amp; Analytics</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6f7a92] font-semibold mb-2">Company</p>
          <h4 className="text-white font-bold mb-3 font-display leading-tight">Explore Prewise</h4>
          <ul className="space-y-2 text-[#9da6b9] text-sm">
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/about">About Us</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/join-us">Careers</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" href="/partners">Partners</Link></li>
          </ul>
          <div className="mt-5 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-white font-semibold text-sm mb-2">Schedule a call</p>
            <Link href="/form/schedule-consultation?context=footer" className="inline-flex items-center gap-2 text-[#b5c4f5] hover:text-white text-sm font-medium transition-colors focus-ring">
              Talk to an expert
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#6f7a92] font-semibold mb-2">Contact</p>
          <h4 className="text-white font-bold mb-3 font-display leading-tight">Get in Touch</h4>
          <ul className="space-y-3 text-[#9da6b9] text-sm">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#1152d4] text-lg mt-0.5">location_on</span>
              <span>H.No 4, AECS Layout, Maruthi Layout,<br />Chinnappanahalli, Bangalore,<br />Karnataka, India PIN - 560037</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1152d4] text-lg">phone</span>
              <a className="hover:text-white" href="tel:+918277468190">+91 8277468190</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1152d4] text-lg">phone</span>
              <a className="hover:text-white" href="tel:+918048659567">+91 80 48659567</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1152d4] text-lg">email</span>
              <a className="hover:text-white" href="mailto:connect@prewise.in">connect@prewise.in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto border-t border-[#2d3546] mt-12 pt-8 text-center text-[#9da6b9] text-xs">
        © 2026 Samyati Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
