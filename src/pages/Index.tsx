import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

import profileImage from "@/assets/saurav.png";
import { TypeWriter } from "@/components/TypeWriter";
import { TypedSectionHeader } from "@/components/SectionHeader";
import { GraduationCap, Calendar, Award } from "lucide-react";
import LFX from '@/assets/LFX.jpg'
import CNCF from '@/assets/CNCF.png'
import GSSoC from '@/assets/GSSoC.png'
import CircuitVerse from '@/assets/CircuitVerse.png'

const Index = () => {

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const experiences = [
    {
      company: "LFX'25",
      role: "SDE Intern — Headlamp",
      period: "June 2025 – Aug 2025",
      location: "Remote",
      logo: LFX,
      highlights: [
        `Built a Golang-based caching layer for Kubernetes APIs, reducing repeated request latency from 40 ms to 9–15 ms
while improving backend scalability and resource utilization.`,
        "Developed unit and integration tests achieving 61% coverage, improving CI reliability and long-term code quality.",
        `Integrated an optional in-memory cache layer with authorization and invalidation mechanisms for internal and
external resource updates.`,
        "Laid the foundation for server-side pagination and search using the cache as a backend source of truth.",
      ],
      link: [
        {
          label: "Headlamp",
          url: "https://github.com/kubernetes-sigs/headlamp/pulls?q=author%3Aupsaurav12",
        },
      ],
      tags: ["Go", "Kubernetes", "React", "Open Source"],
    },
    {
      company: "CNCF",
      role: "Software Developer (Open Source)",
      period: "Jan 2025 – Present",
      location: "Remote",
      logo: CNCF,
      highlights: [
        `Implemented backend services and supporting UI features in Headlamp, improving performance, modularity, and
maintainability; contributed 7+ merged pull requests.`,
        `Refactored critical code paths and improved error handling across CNCF projects including Headlamp, External-DNS,
Inspektor-Gadget, and KubeEdge.`,
        `Collaborated with maintainers by submitting and reviewing 15+ pull requests, strengthening CI pipelines and
enforcing code quality standards.`,
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
        },
      ],
      tags: ["Go", "Cloud Native", "CNCF"],
    },
    {
      company: "CircuitVerse",
      role: "Open Source Contributor",
      period: "Dec 2023 – May 2024",
      location: "Remote",
      logo: CircuitVerse,
      highlights: [
        "Contributed to CircuitVerse by fixing bugs and adding new features to enhance platform functionality.",
        "Worked with Vue.js, Ruby, and Rails to improve code quality, maintainability, and user experience.",
        "Collaborated with maintainers to review changes and align contributions with project roadmap.",
      ],
      link: [
        {
          label: "CircuitVerse",
          url: "https://github.com/CircuitVerse/CircuitVerse/pulls?q=author%3Aupsaurav12",
        },
      ],
      tags: ["Vue.js", "Ruby", "Rails", "Open Source"],
    },
    {
      company: "GirlScript Summer of Code (GSSoC)",
      role: "Open Source Contributor",
      period: "June 2024 – Aug 2024",
      location: "Remote",
      logo: GSSoC,
      highlights: [
        "Contributed to multiple projects by fixing critical website bugs and enhancing UI features.",
        "Collaborated with a global team of contributors using GitHub workflows and code reviews.",
        "Successfully merged 10+ pull requests across different projects, improving functionality and user experience.",
      ],
      link: [],
      tags: ["JavaScript", "HTML", "CSS", "GitHub"],
    },
  ];

  const projects = [
    {
      title: "BootstrapCLI",
      description:
        "A production-ready Golang project scaffolding CLI that generates opinionated, best-practice project structures with routing, database integration, tooling, and Docker support—designed to reduce setup overhead and guide developers through scalable backend development.",
      stack: ["Go", "CLI", "Docker"],
      repoUrl: "https://github.com/upsaurav12/bootstrap",
      liveUrl: "https://go-bootstrapper-docs.vercel.app/",
    },
    {
      title: "CICDOrchestr",
      description:
        "A lightweight, self-hosted CI/CD orchestrator that executes Dockerized pipelines defined as code. Supports multi-stage YAML workflows, isolated job execution, and real-time log streaming via WebSockets, with a modern React-based UI for monitoring pipeline runs.",
      stack: ["Go", "React", "Docker"],
      repoUrl: "https://github.com/upsaurav12/CICDOrchestr",
    },
  ];


  const skills = [
    { name: "Go", icon: "devicon-go-plain" },
    { name: "C", icon: "devicon-c-plain" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },

    { name: "React", icon: "devicon-react-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },

    { name: "REST APIs", icon: "devicon-fastapi-plain" }, // semantic fit

    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
    { name: "GitHub Actions", icon: "devicon-github-original" },
    { name: "CI/CD", icon: "devicon-githubactions-plain" },
    { name: "Infrastructure Automation", icon: "devicon-terraform-plain" }, // closest semantic fit

    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },

    { name: "Git", icon: "devicon-git-plain" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "Bash", icon: "devicon-bash-plain" },

    { name: "YAML", icon: "devicon-yaml-plain" },
    { name: "JSON", icon: "devicon-json-plain" },
    { name: "OpenAPI", icon: "devicon-swagger-plain" },
  ];



  return (
    <div className="min-h-screen bg-bg text-fg font-mono">
      <main className="mx-auto max-w-4xl px-4 py-16 space-y-24">

        {/* HERO */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[1fr_auto] gap-12"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <TypeWriter
                  lines={[
                    "whoami?",
                    "I am Saurav Upadhyay",
                    "An open source developer",
                    "Backend & Cloud Native Engineer",
                  ]}
                />
              </div>


              <h1 className="text-4xl font-bold">
                Saurav Upadhyay
              </h1>

              <p className="text-accent">
                developer · open source · cloud native
              </p>

              <p className="text-muted max-w-xl leading-relaxed">
                Backend-focused engineer contributing to CNCF projects,
                interested in Kubernetes internals and scalable systems.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  India
                </span>
                <SocialLinks />
                <ThemeToggle />
              </div>

            </div>

            <motion.img
              src={profileImage}
              alt="Saurav Upadhyay"
              className="w-44 h-44 rounded-lg  grayscale hover:grayscale-0 transition"
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
        </section>

        <section className="space-y-6 rounded-2xl bg-card/50 p-6">
          <TypedSectionHeader label="experience" />

          <div
            className="
      max-h-[520px]
      overflow-y-auto
      space-y-6
      pr-2
      scroll-smooth
    "
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ExperienceCard {...exp} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-6 rounded-2xl bg-card/40 backdrop-blur p-6">
          <TypedSectionHeader label="projects" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
            className="grid gap-6 md:grid-cols-2"
          >
            {projects.map((p) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 18,
                    scale: 0.98,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.45,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </motion.div>
        </section>


        {/* SKILLS */}
        {/* SKILLS */}
        <section className="space-y-6">
          <TypedSectionHeader label="skills" />

          <Card className="bg-card border-none shadow-none">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
            flex items-center gap-3
            text-sm text-muted
            hover:text-fg
            transition
          "
                  >
                    <i
                      className={`${skill.icon} text-xl`}
                      aria-hidden
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </section>

        <section className="space-y-4">
          <TypedSectionHeader label="education" />

          <div className="flex items-start justify-between gap-6">
            {/* Left */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent" />
                <p className="font-semibold text-fg">
                  SRM Institute of Science and Technology
                </p>
              </div>

              <p className="text-sm text-muted pl-6">
                B.Tech · Computer Science
              </p>

              <div className="flex items-center gap-2 pl-6 text-sm text-muted">
                <Award className="w-3.5 h-3.5" />
                <span>CGPA 8.25 / 10</span>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 text-sm text-muted whitespace-nowrap">
              <Calendar className="w-4 h-4" />
              <span>2022 – 2026</span>
            </div>
          </div>
        </section>


        {/* FOOTER */}
        <footer className="mt-24 pt-8 border-t border-border/40 text-sm text-muted">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left — terminal exit */}
            <pre className="font-mono text-xs text-muted">
              {`> exit 0`}
            </pre>

            {/* Right — copyright */}
            <p className="text-xs">
              © 2025 <span className="text-fg">Saurav Upadhyay</span>
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Index;
