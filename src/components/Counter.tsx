import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

interface CounterProps {
  value: string;
  className?: string;
}

const NUMBER_PATTERN = /^([\d.]+)(.*)$/;

export default function Counter({ value, className }: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const [display, setDisplay] = useState(() => value.replace(NUMBER_PATTERN, (_, num: string) => (num.includes(".") ? "0.0" : "0")));

  useEffect(() => {
    if (!inView) return;
    const match = value.match(NUMBER_PATTERN);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes(".");
    const duration = 1200;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay((isDecimal ? current.toFixed(1) : Math.round(current).toString()) + suffix);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
