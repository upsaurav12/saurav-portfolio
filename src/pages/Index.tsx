import { MapPin } from "lucide-react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/saurav.png";
import { motion } from "framer-motion";


const Index = () => {
  // const experiences = [
  //   {
  //     company: "LFX Mentorship (CNCF)",
  //     role: "LFX Intern",
  //     period: "Jun 2025 - Aug 2025",
  //     location: "Remote",
  //     description:
  //       "Contributed to CNCF projects focusing on performance optimization and testing.",
  //     highlights: [
  //       "Designed k8cache in Go, reducing latency from 40ms to ~10ms",
  //       "Improved CI coverage to 61% with comprehensive unit/integration tests",
  //       "Added optional in-memory caching and backend pagination",
  //     ],
  //     tags: ["Go", "Kubernetes", "CI/CD", "Testing"],
  //   },
  //   {
  //     company: "CNCF",
  //     role: "Open Source Contributor",
  //     period: "Jan 2024 - Present",
  //     location: "Remote",
  //     description:
  //       "Active contributor to multiple CNCF projects, focusing on improving developer experience and system reliability.",
  //     highlights: [
  //       "Contributed 20+ PRs to Headlamp, External-DNS, Inspektor-Gadget, and KubeEdge",
  //       "Improved CI pipelines and added comprehensive test coverage",
  //       "Optimized React + Go code for better performance",
  //     ],
  //     tags: ["Go", "React", "Kubernetes", "Open Source"],
  //   },
  // ];

  // Example experience data including LFX, CNCF, CircuitVerse, GSSoC
// Plug this into your Experience section where you map over experiences

// Example experience data including LFX, CNCF, CircuitVerse, GSSoC
// Plug this into your Experience section where you map over experiences

const experiences = [
  {
    company: "Linux Foundation (LFX)",
    role: "LFX Intern — Headlamp",
    period: "June 2025 – Aug 2025",
    location: "Remote",
    description:
      "Worked on Kubernetes SIG Headlamp, contributing core UI/UX improvements and feature enhancements.",
    highlights: [
      "Designed and implemented the k8cache package in Golang to cache Kubernetes API responses, reducing latency from 40 ms to 9–15 ms",
      "Developed unit and integration tests achieving 61% coverage, improving CI robustness and code quality.",
      "Collaborated with maintainers to integrate an optional in-memory cache layer into Headlamp’s backend, adding authorization and invalidation mechanisms.",
      "Laid the foundation for server-side pagination and search in Headlamp’s backend.",
    ],
    link: [
      {
        label: "Headlamp",
        url: "https://github.com/kubernetes-sigs/headlamp/pulls?q=author%3Aupsaurav12",
      },
    ],
    tags: ["Kubernetes", "React", "TypeScript", "Open Source"],
  },

  {
    company: "CNCF Projects",
    role: "Open Source Contributor",
    period: "Jan 2025 – Present",
    location: "Remote",
    description:
      "Contributed to multiple CNCF-hosted projects under Kubernetes SIGs and cloud native tooling.",
    highlights: [
  "Headlamp (Kubernetes Dashboard) – Implemented new UI features, improved data fetching with optimized hooks, and refactored large legacy components into modular, reusable units; contributed 7+ merged PRs improving maintainability and performance.",
  "Designed and developed a reusable `headlampConfig` backend package in Go, enabling cleaner architecture, standardized config handling, and easier integration for future features.",
  "External-DNS – Improved unit test coverage for cloud providers like civo, gandhi and improve error handling from gaps in unit tests.",
  "Inspektor-Gadget – Strengthened testing reliability by adding unit tests across critical packages (datasource/formatters/json, utils/protocols, utils/syscalls).",
  "Collaborated with maintainers across multiple repositories; submitted, reviewed, and discussed 15+ pull requests, improving CI quality, test coverage, and code hygiene across the CNCF ecosystem."
],
    link: [
      {
        label: "Headlamp",
        url: "https://github.com/kubernetes-sigs/headlamp/pulls?q=author%3Aupsaurav12",
      },
      {
        label: "External DNS",
        url: "https://github.com/kubernetes-sigs/external-dns/pulls?q=author%3Aupsaurav12",
      },
      {
        label: "Inspektor Gadget",
        url: "https://github.com/inspektor-gadget/inspektor-gadget/pulls?q=author%3Aupsaurav12",
      }
    ],
    tags: ["Go", "Kubernetes", "CNCF", "Cloud Native"],
  },

  {
    company: "GirlScript Summer of Code (GSSoC)",
    role: "Open Source Contributor",
    period: "June 2024 - August 2024",
    location: "Remote",
    description:
      "Contributed to numerous open-source projects by fixing website bugs and enhancing UI components.",
    highlights: [
      "Fixed major UI issues across multiple repositories.",
      "Collaborated with global contributors using GitHub workflows.",
      "Merged 10+ PRs across different projects."
    ],
    link: [],
    tags: ["GitHub", "HTML/CSS", "JavaScript", "Open Source"],
  },

  {
    company: "CircuitVerse",
    role: "Contributor",
    period: "Dec 2023 – May 2024",
    location: "Remote",
    description:
      "Contributed to CircuitVerse by fixing bugs and adding new features to enhance the platform functionality.",
    highlights: [
      "Worked with Vue.js, Ruby, and Rails to improve code quality.",
      "Enhanced UI and improved overall user experience."
    ],
    link: [
      {
        label: "CircuitVerse",
        url: "https://github.com/CircuitVerse/CircuitVerse/pulls?q=author%3Aupsaurav12",
      }
    ],
    tags: ["Vue.js", "Ruby", "Rails", "Open Source"],
  },
];



  const projects = [
    {
      title: "GitFlow",
      description:
        "Lightweight self-hosted CI/CD platform for automating build, test, and deployment workflows",
      stack: ["Go", "React", "Docker", "WebSockets"],
      repoUrl: "https://github.com/upsaurav12/gitflow",
    },
    {
      title: "bootstrap-cli",
      description:
        "CLI tool for scaffolding production-ready Golang REST APIs with best practices and Docker support",
      stack: ["Go", "Cobra", "Docker", "CLI"],
      repoUrl: "https://github.com/upsaurav12/bootstrap",
    },
  ];

  const skills = {
    Languages: ["Go", "C++", "Python"],
    Web: ["React.js", "REST APIs", "HTML", "CSS", "JavaScript"],
    Databases: ["PostgreSQL", "MySQL"],
    DevOps: ["Docker", "GitHub Actions", "CI/CD", "Linux"],
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl border-gray-200 bg-white">
        {/* Hero Section */}
        <section className="mb-20">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col md:flex-row items-start gap-10 md:gap-12 border-gray-200 p-6 rounded-xl bg-white"
  >
    <div className="flex-1 space-y-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          Saurav Upadhyay
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-blue-600 font-medium mb-3"
        >
          Developer | Open Source Contributor (CNCF)
        </motion.p>

        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Software developer skilled in designing backend systems and contributing to CNCF open-source projects. Passionate about scalable systems and automation.
        </p>
      </div>

      <div className="flex items-center gap-2 text-gray-600">
        <MapPin className="w-4 h-4" />
        <span>India 🇮🇳</span>
        <div className="ml-10">
          <SocialLinks />
        </div>
      </div>
    </div>

    <motion.img
      src={profileImage}
      alt="Saurav Upadhyay"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-60 h-60 md:w-60 md:h-60 rounded-full object-cover shadow-lg"
    />
  </motion.div>
</section>


        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <ExperienceCard {...exp} />
  </motion.div>
))}

          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <ProjectCard {...project} />
  </motion.div>
))}

          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
        {Object.values(skills).flat().map((skill, idx) => (
  <motion.div
    key={skill}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: idx * 0.05 }}
  >
    <Badge variant="secondary" className="bg-gray-100 text-gray-800">
      {skill}
    </Badge>
  </motion.div>
))}
</div>
</section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="rounded-lg p-6 bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              B.Tech in Computer Science (AI-ML)
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              SRM Institute of Science and Technology
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-gray-600">
              <span>2022 - 2026</span>
              <span className="hidden md:inline">•</span>
              <span>CGPA: 8.25/10</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
          © 2025 Saurav Upadhyay — All Rights Reserved
        </footer>
      </main>
    </div>
  );
};

export default Index;
