import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    <div className="group rounded-lg p-6 border border-gray-200 hover:border-blue-400 bg-white transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <div className="flex gap-2">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-700 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="text-xs bg-gray-100 text-gray-800"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
