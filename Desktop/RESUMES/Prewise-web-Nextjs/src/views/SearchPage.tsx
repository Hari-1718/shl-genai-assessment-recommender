"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

// Our site's main content paths and keywords for a mock search index
const SITE_CONTENT = [
  {
    title: "Product Management Consulting",
    path: "/product-consulting",
    description: "Strategic leadership driving end-to-end product development, market positioning, and roadmap execution.",
    tags: ["product", "strategy", "roadmap", "go-to-market", "consulting"]
  },
  {
    title: "DeepTech Consulting",
    path: "/expertise",
    description: "Work with our specialized engineers on complex technical challenges across VLSI, AI/ML, and Embedded Systems.",
    tags: ["deeptech", "vlsi", "embedded", "ai", "hardware", "engineering"]
  },
  {
    title: "Talent Solutions",
    path: "/talent-solutions",
    description: "Access pre-vetted experts who power our engagements. Specialists ready to augment your team.",
    tags: ["talent", "hiring", "augmentation", "jobs", "careers", "staff"]
  },
  {
    title: "About Prewise",
    path: "/about",
    description: "Learn about our mission, vision, and the core team behind Prewise Deep Tech.",
    tags: ["about", "company", "mission", "vision", "team", "founder"]
  },
  {
    title: "Join Prewise",
    path: "/join-us",
    description: "Apply to become a consultant within the Prewise network.",
    tags: ["join", "apply", "careers", "consultant", "application"]
  },
  {
    title: "Schedule Consultation",
    path: "/form/schedule-consultation",
    description: "Connect with our experts to discuss your upcoming product or deep tech project.",
    tags: ["contact", "schedule", "consultation", "form", "booking", "meeting"]
  }
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";

  // Filter content based on query matching title, description, or tags
  const searchResults = useMemo(() => {
    if (!query) return [];

    const lowerQuery = query.toLowerCase().trim();
    return SITE_CONTENT.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }, [query]);

  return (
    <main className="w-full bg-[#101622] min-h-screen text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2 font-display">Search Results</h1>
        <p className="text-[#9da6b9] text-lg mb-10">
          Showing results for: <span className="text-white font-semibold">"{query}"</span>
        </p>

        {query === "" ? (
          <div className="bg-[#1c2333] border border-[#2d3546] rounded-xl p-8 text-center">
            <span className="material-symbols-outlined text-4xl text-[#9da6b9] mb-4">search</span>
            <h2 className="text-xl font-bold mb-2">Please enter a search term</h2>
            <p className="text-[#9da6b9]">Use the search bar in the header to find capabilities and pages.</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="flex flex-col gap-4">
            {searchResults.map((result, index) => (
              <Link
                key={index}
                href={result.path}
                className="group flex flex-col bg-[#1c2333] border border-[#2d3546] hover:border-[#1152d4]/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#1152d4]/10 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#1152d4] transition-colors">{result.title}</h3>
                  <span className="material-symbols-outlined text-[#9da6b9] group-hover:text-[#1152d4] transition-colors translate-x-0 group-hover:translate-x-1 duration-300">
                    arrow_forward
                  </span>
                </div>
                <p className="text-[#9da6b9] mb-4">{result.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {result.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-black/30 text-[#bbc3d4] border border-[#2d3546]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-[#1c2333] border border-[#2d3546] rounded-xl p-12 text-center">
            <span className="material-symbols-outlined text-5xl text-[#1152d4]/50 mb-4">search_off</span>
            <h2 className="text-2xl font-bold mb-3">No results found</h2>
            <p className="text-[#9da6b9] max-w-md mx-auto">
              We couldn't find anything matching "{query}". Try checking for typos or using more general terms like "ai", "talent", or "product".
            </p>
          </div>
        )}
      </div>
    </main>
  );
}