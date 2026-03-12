import Link from "next/link";
import FOUNDER_IMAGE from "../assets/founder.jpeg";
import TEAM_IMAGE from "../assets/lab_engineer.png";
import ABOUT_HERO_BG from "../assets/about_hero_bg.png";

export default function AboutUs() {
  return (
    <main className="flex-1 flex flex-col items-center w-full bg-[#101622]">
      {/* Mission Section */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 pb-12 mt-6">
        <div className="rounded-xl overflow-hidden relative">
          <div
            className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-6 py-16 md:px-12 text-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.6) 0%, rgba(16, 22, 34, 0.8) 100%), url(${ABOUT_HERO_BG.src})`,
            }}
          >
            <div className="absolute inset-0 hero-gradient-overlay pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4 font-display">
              About <span className="text-primary">Prewise Consulting</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 max-w-3xl leading-relaxed font-light">
              We are building the bridge between deep technical expertise and strategic product vision, empowering companies to innovate and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-[#0c1018] py-16 lg:py-24 px-6 md:px-10 lg:px-14 border-y border-[#2d3546]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-[#1c2333] rounded-xl p-8 border border-[#2d3546] shadow-xl hover:border-[#1152d4]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">flag</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-display leading-tight">Our Mission</h2>
              <p className="text-slate-200 leading-relaxed text-lg">
                To empower organizations with specialized consulting expertise in deep technology and product management, transforming complex challenges into scalable solutions that drive business growth and innovation.
              </p>
            </div>
            <div className="bg-[#1c2333] rounded-xl p-8 border border-[#2d3546] shadow-xl hover:border-[#1152d4]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-display leading-tight">Our Vision</h2>
              <p className="text-slate-200 leading-relaxed text-lg">
                To be the trusted partner for companies building the future — whether through cutting-edge deep tech innovations or breakthrough products that define markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="w-full py-16 lg:py-24 px-6 md:px-10 lg:px-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-display leading-tight">Meet the Founder</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center 2xl:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#2d3546] shadow-2xl">
                <img
                  src={FOUNDER_IMAGE.src}
                  alt="Sriramulu Appana, Founder"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Sriramulu Appana</h3>
              <p className="text-primary font-bold mb-6">Founder & Product Manager, Prewise Consulting</p>

              <div className="space-y-6 text-slate-300">
                <p>
                  Sriramulu is a seasoned engineering and product leader with deep expertise in deeptech, product management, and building high-performance teams. With a track record of success across startups and enterprises, he combines technical rigor with strategic product vision.
                </p>

                <div>
                  <h4 className="text-white font-bold mb-3">Background</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Engineering leadership and hands-on technical expertise</li>
                    <li>✓ Product strategy and go-to-market execution</li>
                    <li>✓ Building and scaling distributed teams</li>
                    <li>✓ Deep experience in AI/ML, semiconductors, and embedded systems</li>
                    <li>✓ Mentorship and advisory roles for emerging tech startups</li>
                  </ul>
                </div>

                <p className="text-sm text-slate-200">
                  Sriramulu founded Prewise to help organizations unlock their potential through expert consulting, specialized talent, and strategic guidance. He's passionate about solving complex technical and business challenges.
                </p>

                <div className="flex gap-4 mt-8">
                  <a href="https://www.linkedin.com/in/sriramuluappana/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-blue-400 font-bold transition-colors">
                    <span className="material-symbols-outlined">link</span>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-[#0c1018] py-16 lg:py-24 px-6 md:px-10 lg:px-14 border-y border-[#2d3546]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-display leading-tight">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: "verified_user",
              title: "Excellence",
              copy: "We deliver top-tier expertise and solutions, maintaining the highest standards in every engagement.",
            }, {
              icon: "library_books",
              title: "Knowledge & Innovation",
              copy: "We stay at the forefront of technology and business trends, bringing cutting-edge insights.",
            }, {
              icon: "group",
              title: "Partnership",
              copy: "We work closely with our clients as true partners, committed to their long-term success.",
            }, {
              icon: "lightbulb",
              title: "Pragmatism",
              copy: "We combine theoretical expertise with practical, implementable solutions grounded in reality.",
            }, {
              icon: "rocket_launch",
              title: "Impact",
              copy: "We measure success by the tangible business outcomes and growth we enable for our clients.",
            }, {
              icon: "handshake",
              title: "Integrity",
              copy: "We operate with transparency, honesty, and accountability in every interaction.",
            }].map((value) => (
              <div
                key={value.title}
                className="group bg-[#1c2333] rounded-xl p-8 border border-[#2d3546] transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_20px_40px_rgba(17,82,212,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display">{value.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {value.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 px-6 md:px-10 lg:px-14">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display leading-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Whether you need deep tech expertise or product strategy guidance, we're here to help your organization succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/talent-solutions"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold transition-all lift"
            >
              Explore Our Services
            </Link>
            <Link
              href="/form/schedule-consultation?context=general"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition-all backdrop-blur-sm lift"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
