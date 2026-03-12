"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import PrewiseLogo from "../assets/PrewiseLogo.png";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollProgress(Math.min(Math.max(ratio, 0), 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Smart Search Navigation
  const routes: Record<string, string> = {
    expertise: "/expertise",
    deeptech: "/expertise",
    talent: "/talent-solutions",
    product: "/product-consulting",
    about: "/about",
    join: "/join-us",
    consult: "/form/schedule-consultation",
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const query = search.toLowerCase().trim();
    if (!query) return;

    const matchedRoute = Object.keys(routes).find((key) =>
      query.includes(key)
    );

    router.push(matchedRoute ? routes[matchedRoute] : `/search?query=${encodeURIComponent(query)}`);
    setSearch("");
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Product Consulting", path: "/product-consulting" },
    { name: "DeepTech Consulting", path: "/expertise" },
    { name: "Talent Solutions", path: "/talent-solutions" },
    { name: "About Us", path: "/about" },
    // partners removed from the main nav; accessible via CTA button
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex flex-col border-b border-[#2d3546] bg-[#0c1324]/88 backdrop-blur-2xl backdrop-saturate-150 w-full shadow-[0_14px_38px_-24px_rgba(0,0,0,0.85)]"
      style={{
        minHeight: "var(--header-height)",
        backgroundImage:
          "radial-gradient(circle at 18% 20%, rgba(17,82,212,0.15), transparent 38%), radial-gradient(circle at 82% 12%, rgba(255,255,255,0.05), transparent 32%)",
      }}
    >
      <div className="flex items-center justify-between px-5 py-3 lg:px-8">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:opacity-85 transition-opacity"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 aspect-square shrink-0 overflow-hidden rounded-full border border-[#1152d4]/25 bg-white flex items-center justify-center shadow-sm">
              <img
                src={PrewiseLogo.src}
                alt="Prewise Logo"
                className="w-full h-full object-contain scale-125"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </div>
            <h2
              className="text-base sm:text-lg font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Prewise Consulting
            </h2>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-[15px] font-medium transition-colors focus-ring ${isActive
                    ? "text-[#1152d4]"
                    : "text-slate-300 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* SEARCH FORM */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center relative w-60"
          >
            <button
              type="submit"
              className="absolute left-3 flex items-center justify-center text-[#9da6b9] hover:text-[#1152d4] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                search
              </span>
            </button>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search capabilities..."
              className="w-full bg-[#1c222e]/90 border border-transparent focus:border-[#1152d4] focus:ring-0 rounded-lg py-2.5 pl-10 pr-4 text-[15px] text-white placeholder-[#9da6b9] outline-none shadow-inner focus-ring"
            />
          </form>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/form/schedule-consultation?context=general"
              className="bg-[#1152d4] hover:bg-[#1152d4]/90 text-white px-5 py-2.5 rounded-md text-[15px] font-semibold tracking-[0.01em] transition-all shadow-lg shadow-[#1152d4]/20 whitespace-nowrap lift focus-ring"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/join-us"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-md text-[15px] font-semibold tracking-[0.01em] transition-all backdrop-blur-sm whitespace-nowrap lift focus-ring"
            >
              Join Prewise
            </Link>
            <Link
              href="/partners"
              className="bg-secondary/10 hover:bg-secondary/20 border border-white/60 text-white px-5 py-2.5 rounded-md text-[15px] font-semibold tracking-[0.01em] transition-all whitespace-nowrap lift focus-ring"
            >
              Partner With Us
            </Link>          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden flex items-center justify-center p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="h-[3px] bg-white/5 hide-mobile-progress">
        <div
          className="h-full bg-gradient-to-r from-[#5b8dff] via-[#1152d4] to-[#7bc7ff] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
          aria-hidden="true"
        />
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="xl:hidden flex flex-col bg-[#101622]/95 border-t border-[#2d3546] px-6 py-4 shadow-xl backdrop-blur-xl">
          <nav className="flex flex-col gap-4 mb-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-[#2d3546] focus-ring ${isActive
                    ? "text-[#1152d4]"
                    : "text-slate-300 active:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <form onSubmit={handleSearch} className="md:hidden flex items-center relative w-full mb-6">
            <button
              type="submit"
              className="absolute left-3 flex items-center justify-center text-[#9da6b9] hover:text-[#1152d4] transition-colors z-10"
            >
              <span className="material-symbols-outlined text-xl">
                search
              </span>
            </button>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search capabilities..."
              className="w-full bg-[#1c222e] border-transparent focus:border-[#1152d4] focus:ring-0 rounded-lg py-3 pl-10 pr-4 text-base text-white placeholder-[#9da6b9] outline-none"
            />
          </form>

          <div className="flex flex-col gap-3">
            <Link
              href="/form/schedule-consultation?context=general"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#1152d4] text-white text-center px-5 py-3 rounded-lg text-base font-bold transition-colors duration-300 ease-out"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/join-us"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white/10 border border-white/20 text-white text-center px-5 py-3 rounded-lg text-base font-bold transition-colors duration-300 ease-out"
            >
              Join Prewise
            </Link>
            <Link
              href="/partners"
              onClick={() => setIsMenuOpen(false)}
              className="bg-transparent border border-white text-white text-center px-5 py-3 rounded-lg text-base font-bold transition-colors duration-300 ease-out"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}