import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "./ui/link-button";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  logo?: string;
  tags: string[];
  link: {
    label: string;
    url: string;
  }[];
}

const TAG_ICON_MAP: Record<string, string> = {
  // Languages
  Go: "devicon-go-plain",
  JavaScript: "devicon-javascript-plain",
  TypeScript: "devicon-typescript-plain",
  Ruby: "devicon-ruby-plain",

  // Frontend / Frameworks
  React: "devicon-react-original",
  "Vue.js": "devicon-vuejs-plain",
  Rails: "devicon-rails-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",

  // Cloud / Infra
  Docker: "devicon-docker-plain",
  Kubernetes: "devicon-kubernetes-plain",
  Linux: "devicon-linux-plain",

  // Ecosystem / Concepts
  "Cloud Native": "devicon-kubernetes-plain", // CNCF umbrella
  CNCF: "devicon-kubernetes-plain",
  "Open Source": "devicon-github-original",

  // Tooling
  GitHub: "devicon-github-original",
};



export const ExperienceCard = ({
  company,
  role,
  period,
  location,
  highlights,
  logo,
  tags,
  link,
}: ExperienceCardProps) => {
  return (
    <div
      className="
        group
        relative
        rounded-xl
        p-4 sm:p-6
        bg-background/60
        backdrop-blur
        border border-border/40
        transition-all
        duration-300
        hover:bg-background/80
        hover:border-accent/40
        flex flex-col
      "
    >
      {/* subtle hover glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-xl
          opacity-0
          group-hover:opacity-100
          transition
          bg-gradient-to-br
          from-accent/10
          via-transparent
          to-transparent
        "
      />

      {/* Header */}
      <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="
                w-9 h-9 sm:w-10 sm:h-10
                rounded-md
                object-contain
                bg-bg/60
                border border-border/40
                p-1
                shrink-0
              "
            />
          )}

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-fg">
              {company}
            </h3>
            <p className="text-accent font-medium text-sm sm:text-base">
              {role}
            </p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs sm:text-sm text-muted">
          <span>{period}</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <ul className="relative space-y-2 mb-4">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="
              text-sm
              text-muted
              flex
              items-start
              leading-relaxed
            "
          >
            <span className="text-accent mr-2 select-none">▹</span>
            <span className="group-hover:text-fg transition-colors">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

      {/* Tags (icons) */}
      <div className="relative flex flex-wrap gap-3 mb-4">
        {tags.map((tag) => {
          const icon = TAG_ICON_MAP[tag];

          return (
            <div
              key={tag}
              title={tag}
              className="
                flex items-center justify-center
                w-8 h-8 sm:w-9 sm:h-9
                rounded-md
                bg-bg/60
                text-muted
                transition
                group-hover:text-fg
              "
            >
              {icon ? (
                <i className={`${icon} text-lg sm:text-xl`} />
              ) : (
                <span className="text-[10px] font-mono px-1 text-center">
                  {tag}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Links */}
      {link?.length > 0 && (
        <div className="relative flex flex-wrap gap-2 mt-auto self-start sm:self-end">
          {link.map((l, i) => (
            <LinkButton
              key={i}
              href={l.url}
              label={l.label}
              className="
                bg-bg/80
                text-fg
                border border-border/60
                hover:border-accent
                hover:text-accent
                transition
                text-xs
              "
            />
          ))}
        </div>
      )}
    </div>
  );
};

