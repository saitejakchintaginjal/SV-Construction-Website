import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
}

export default function Reveal({ children, delay = 0, className = "", variant = "up" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? "reveal--in" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
