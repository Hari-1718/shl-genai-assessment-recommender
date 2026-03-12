import { useEffect, useRef, useState } from "react";

interface TextGenerateEffectProps {
  text: string;
  className?: string;
  speedMs?: number;
  startDelayMs?: number;
}

export function TextGenerateEffect({
  text,
  className = "",
  speedMs = 55,
  startDelayMs = 0,
}: TextGenerateEffectProps) {
  const [visible, setVisible] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const chars = Array.from(text);

  useEffect(() => {
    setVisible(0);

    const clearRunningInterval = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const delayTimer = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setVisible((prev) => {
          if (prev >= chars.length) {
            clearRunningInterval();
            return prev;
          }
          return prev + 1;
        });
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(delayTimer);
      clearRunningInterval();
    };
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
