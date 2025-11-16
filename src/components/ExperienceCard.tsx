import { IdCard, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stringify } from "querystring";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  // description: string;
  highlights: string[];
  tags: string[];
  link: {
    label: string;
    url: string;
  }[];
}

export const ExperienceCard = ({
  company,
  role,
  period,
  location,
  highlights,
  tags,
  link,
}: ExperienceCardProps) => {
  return (
    <div className="group rounded-lg p-6 transition-colors bg-white flex flex-col">

  {/* Top section */}
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
    <div>
      <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
      <p className="text-blue-600 font-medium">{role}</p>
    </div>

    <div className="flex flex-col items-start md:items-end gap-1">
      <span className="text-sm text-gray-500">{period}</span>
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <MapPin className="w-3 h-3" />
        <span>{location}</span>
      </div>
    </div>
  </div>

  {/* Middle Content */}
  {/* <p className="text-gray-700 mb-4">{description}</p> */}

  <ul className="space-y-2 mb-4">
    {highlights.map((highlight, index) => (
      <li key={index} className="text-sm text-gray-900 flex items-start">
        <span className="text-blue-600 mr-2">▹</span>
        <span>{highlight}</span>
      </li>
    ))}
  </ul>

  <div className="flex flex-wrap gap-2 mb-4">
    {tags.map((tag) => (
      <Badge
        key={tag}
        variant="secondary"
        className="text-xs bg-gray-100 text-gray-800"
      >
        {tag}
      </Badge>
    ))}
  </div>

  {/* ✅ Bottom-right Link Buttons */}
  {link && (
  <div className="flex flex-wrap gap-2 mt-auto self-end">
    {link.map((l, idx) => (
      <a key={idx} href={l.url} target="_blank" rel="noopener noreferrer">
        <Button
  size="sm"
  variant="outline"
  className="
    text-xs h-7 px-3 rounded-md
    border-gray-300 text-gray-700
    bg-white
    hover:bg-gray-100
    dark:bg-white dark:text-gray-700 dark:border-gray-300 dark:hover:bg-gray-200
  "
>
  {l.label}
</Button>

      </a>
    ))}
  </div>
)}

</div>

  );
};
