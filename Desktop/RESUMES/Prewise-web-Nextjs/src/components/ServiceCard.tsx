import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative bg-[#1c2333] rounded-xl p-6 border border-[#2d3546] hover:border-[#1152d4]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1152d4]/10 hover:-translate-y-1">
      <div className="h-48 rounded-lg overflow-hidden mb-6 bg-slate-900 relative">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url('${service.image.src}')` }}
        />
        {service.hasImageOverlay && (
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        )}
      </div>
      <div className="flex items-center gap-3 mb-3">
        <span className="material-symbols-outlined text-[#1152d4] bg-[#1152d4]/10 p-2 rounded-lg">
          {service.icon}
        </span>
        <h4
          className="text-xl font-bold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {service.title}
        </h4>
      </div>
      <p className="text-[#9da6b9] text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      <Link
        prefetch
        href={service.href}
        className="inline-flex items-center text-sm font-bold text-[#1152d4] hover:text-blue-400"
      >
        Learn more
        <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">
          chevron_right
        </span>
      </Link>
    </div>
  );
}
