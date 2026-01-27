import { useEffect, useState } from "react";

interface TerminalTyperProps {
  lines: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

export function TypeWriter({
  lines,
  typingSpeed = 60,
  deletingSpeed = 40,
  pause = 1200,
}: TerminalTyperProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentLine = lines[lineIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentLine.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentLine, deletingSpeed, typingSpeed, pause, lines.length]);

  return (
    <pre className="text-sm text-muted font-mono">
      &gt; {currentLine.slice(0, charIndex)}
      <span className="animate-pulse">▊</span>
    </pre>
  );
}
