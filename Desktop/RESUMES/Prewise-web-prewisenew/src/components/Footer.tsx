import { Link } from "react-router-dom";
import PrewiseLogo from "../assets/PrewiseLogo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#2d3546] bg-[#101622] py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 text-white mb-6">
            <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-[#1152d4]/40 bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:border-[#1152d4]/60 transition-all">
              <img src={PrewiseLogo} alt="Prewise Logo" className="w-full h-full object-contain scale-[1.3]" />
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
              to="/"
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
              to="/form/schedule-consultation"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Services</h4>
          <ul className="space-y-2 text-[#9da6b9] text-sm">
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/product-consulting">Product Management Consulting</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/product-consulting#startup-advisory">Startup Advisory</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/expertise#vlsi-design">VLSI Design</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/expertise#embedded-systems">Embedded Systems</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/expertise#ai-ml">AI &amp; Machine Learning</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/expertise#generative-ai">Generative AI</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/expertise#quant-finance">Quantitative Finance</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/expertise#data-analytics">Data Science &amp; Analytics</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Company</h4>
          <ul className="space-y-2 text-[#9da6b9] text-sm">
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/about">About Us</Link></li>
            {/* partners link removed; header button handles navigation */}
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/join-us">Careers</Link></li>
            <li><Link className="hover:text-[#1152d4] transition-colors" to="/">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact</h4>
          <ul className="space-y-3 text-[#9da6b9] text-sm">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#1152d4] text-lg mt-0.5">location_on</span>
              <span>H.No 4, AECS Layout, Maruthi Layout,<br />Chinnappanahalli, Bangalore,<br />Karnataka, India PIN - 560037</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1152d4] text-lg">phone</span>
              <span>+91 8277468190</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1152d4] text-lg">phone</span>
              <span>+91 80 48659567</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1152d4] text-lg">email</span>
              <span>connect@prewise.in</span>
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
