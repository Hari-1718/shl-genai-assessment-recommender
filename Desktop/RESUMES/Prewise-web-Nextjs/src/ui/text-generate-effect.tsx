import React, { useEffect, useState } from "react";

interface TextGenerateEffectProps {
  text: string;
  className?: string;
  speedMs?: number; // lower is faster
  startDelayMs?: number;
}

export function TextGenerateEffect({
  text,
  className = "",
  speedMs = 55,
  startDelayMs = 0,
}: TextGenerateEffectProps) {
  const [visible, setVisible] = useState(0);
  const chars = Array.from(text);

  useEffect(() => {
    setVisible(0);
    const startTimer = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        setVisible((prev) => {
          if (prev >= chars.length) {
            window.clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, speedMs);
      return () => window.clearInterval(interval);
    }, startDelayMs);

    return () => window.clearTimeout(startTimer);
  }, [text, speedMs, startDelayMs, chars.length]);

  return (
    <span className={className} aria-label={text}>
      {chars.map((char, idx) => (
        <span
          key={idx}
          className={idx < visible ? "opacity-100" : "opacity-0"}
          style={{ transition: "opacity 0.12s ease" }}
        >
          {char === "\n" ? " " : char}
        </span>
      ))}
    </span>
  );
}
