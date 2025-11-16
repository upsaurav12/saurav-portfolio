import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SocialLinks = () => {
  const socials = [
    {
      icon: Mail,
      href: "mailto:sauravup041103@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/upsaurav12",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/er-saurav-upadhyay",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/sauravusingnvim",
      label: "X (Twitter)",
    },
  ];

  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};
