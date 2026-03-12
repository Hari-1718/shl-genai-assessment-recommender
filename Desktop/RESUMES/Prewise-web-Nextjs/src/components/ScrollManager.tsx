"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Scroll restoration tuned for Next.js App Router:
 * - On back/forward, restore the saved scroll position for that route+query.
 * - On new navigations, scroll to top.
 * Uses the history index (state.idx) to detect back/forward.
 */
export default function ScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const positionsRef = useRef<Map<string, number>>(new Map());
  const prevKeyRef = useRef<string | null>(null);
  const prevIdxRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const key = `${pathname}?${searchParams?.toString() || ""}${hash}`;
    const idx = (window.history.state && (window.history.state as { idx?: number }).idx) ?? 0;

    // Save current position for the previous route
    if (prevKeyRef.current) {
      positionsRef.current.set(prevKeyRef.current, window.scrollY);
    }

    const isBackNavigation = prevIdxRef.current !== null && idx < prevIdxRef.current;
    const saved = positionsRef.current.get(key);

    requestAnimationFrame(() => {
      if (hash && typeof document !== "undefined") {
        const targetId = hash.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
      }

      if (isBackNavigation && saved !== undefined) {
        window.scrollTo({ top: saved, behavior: "auto" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });

    prevKeyRef.current = key;
    prevIdxRef.current = idx;

    // Persist the latest position on unmount
    return () => {
      positionsRef.current.set(key, window.scrollY);
    };
  }, [pathname, searchParams]);

  return null;
}