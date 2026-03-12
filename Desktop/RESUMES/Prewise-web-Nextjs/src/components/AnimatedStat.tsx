import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedStat({ value, suffix = "", duration = 1200, className = "" }: AnimatedStatProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let frame = 0;
    let started = 0;

    const animate = (timestamp: number) => {
      if (!started) started = timestamp;
      const progress = Math.min((timestamp - started) / duration, 1);
      const current = Math.round(progress * value);
      setDisplay(current);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          frame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  const text = `${display.toLocaleString()}${suffix}`;

  return (
    <span ref={nodeRef} className={className} aria-label={`${value}${suffix}`}>
      {text}
    </span>
  );
}
