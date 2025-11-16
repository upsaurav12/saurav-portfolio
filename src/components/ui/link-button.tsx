import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function LinkButton({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md active:scale-95",
        className
      )}
    >
      {label}
      <ExternalLink className="w-4 h-4 opacity-70" />
    </a>
  );
}
