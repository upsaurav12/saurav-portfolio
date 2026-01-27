import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TypedSectionHeaderProps {
  label: string;
  speed?: number;
}

export function TypedSectionHeader({
  label,
  speed = 40,
}: TypedSectionHeaderProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (index < label.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, isInView, label.length, speed]);

  return (
    <motion.h2
      ref={ref}
      className="text-2xl font-bold font-mono"
    >
      <span className="text-muted">$ </span>
      {label.slice(0, index)}
      {index < label.length && (
        <span className="animate-pulse text-muted">▊</span>
      )}
    </motion.h2>
  );
}
