import ApplyConsultantForm from "./Forms/ApplyConsultantForm";
import JOIN_HERO_IMAGE from "../assets/join_hero_bg.png";

export default function JoinUs() {
  // page wrapper around the shared consultant application form
  return (
    <main className="flex-1 flex flex-col items-center w-full bg-[#101622]">
      {/* hero with background image */}
      <div
        className="relative w-full h-[260px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(16,22,34,0.55), rgba(16,22,34,0.8)), url('${JOIN_HERO_IMAGE.src}')` }}
      >
        <div className="absolute inset-0 hero-gradient-overlay" aria-hidden="true" />
        <div className="absolute inset-0 noise-overlay" aria-hidden="true" />
        <div className="absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 lg:px-14 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight font-display">
            Join Prewise
          </h1>
          <p className="text-slate-200 text-base md:text-xl leading-relaxed">
            If you're a Product Consultant or Deep Tech Consultant interested in working with Prewise,
            tell us about yourself by filling out the form below.
          </p>
        </div>
      </div>

      {/* form section pulled up slightly */}
      <div className="w-full max-w-3xl px-6 md:px-8 -mt-16">
        <ApplyConsultantForm />
      </div>
    </main>
  );
}