import { ExternalLink, Github } from "lucide-react";

const STACK_ICON_MAP: Record<string, string> = {
  Go: "devicon-go-plain",
  "C++": "devicon-cplusplus-plain",
  JavaScript: "devicon-javascript-plain",
  TypeScript: "devicon-typescript-plain",
  React: "devicon-react-original",
  "Node.js": "devicon-nodejs-plain",
  Docker: "devicon-docker-plain",
  Kubernetes: "devicon-kubernetes-plain",
  PostgreSQL: "devicon-postgresql-plain",
  GitHub: "devicon-github-original",
  "GitHub Actions": "devicon-githubactions-plain",
};

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  stack,
  repoUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div
      className="
        group
        relative
        rounded-xl
        p-6
        bg-background/60
        backdrop-blur
        border border-border/40
        transition-all
        duration-300
        hover:border-accent/40
        hover:bg-background/80
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
      <div className="relative flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors">
          {title}
        </h3>

        <div className="flex gap-2">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-muted hover:text-fg transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-muted hover:text-fg transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="relative text-sm text-muted leading-relaxed mb-4">
        {description}
      </p>

      {/* Tech stack (icons) */}
      <div className="relative flex flex-wrap gap-3 mb-4">
        {stack.map((tech) => {
          const icon = STACK_ICON_MAP[tech];

          return (
            <div
              key={tech}
              title={tech}
              className="
                flex items-center justify-center
                w-9 h-9
                rounded-md
                bg-bg/60
                text-muted
                transition
                group-hover:text-fg
              "
            >
              {icon ? (
                <i className={`${icon} text-xl`} />
              ) : (
                <span className="text-[10px] font-mono text-center px-1">
                  {tech}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
