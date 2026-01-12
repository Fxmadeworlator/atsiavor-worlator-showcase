// app/toolstack/page.tsx  (or pages/toolstack.tsx depending on your setup)
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Zap,
  Palette,
  Code,
  Wrench,
  Cpu,
  Layers,
  Figma,
  Github,
  Slack,
  Chrome,
} from "lucide-react";

interface ToolCardProps {
  category: string;
  tools: { name: string; icon?: React.ReactNode }[];
}

const ToolCard = ({ category, tools }: ToolCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <Wrench className="h-5 w-5 text-primary" />
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {tools.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
          >
            {t.icon}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ToolStack() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  const toolGroups: ToolCardProps[] = [
    {
      category: "3D & Simulation",
      tools: [
        { name: "SolidWorks", icon: <Layers className="h-4 w-4" /> },
        { name: "Ansys", icon: <Cpu className="h-4 w-4" /> },
      ],
    },
    {
      category: "Design & Prototyping",
      tools: [
        { name: "Figma", icon: <Figma className="h-4 w-4" /> },
        { name: "Framer", icon: <Palette className="h-4 w-4" /> },
        { name: "After Effects", icon: <Zap className="h-4 w-4" /> },
      ],
    },
    {
      category: "Development",
      tools: [
        { name: "Github", icon: <Github className="h-4 w-4" /> },
        { name: "VS Code", icon: <Code className="h-4 w-4" /> },
      ],
    },
    {
      category: "No-Code / Automation",
      tools: [
        { name: "Wix" },
        { name: "Zapier", icon: <Zap className="h-4 w-4" /> },
        { name: "Canva", icon: <Palette className="h-4 w-4" /> },
      ],
    },
    {
      category: "AI & Productivity",
      tools: [
        { name: "ChatGPT" },
        { name: "Slack", icon: <Slack className="h-4 w-4" /> },
        { name: "Chrome DevTools", icon: <Chrome className="h-4 w-4" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="min-h-screen px-8 pb-20">
        {/* Header */}
        <div
          ref={headerRef}
          className={`pt-[20vh] mb-16 max-w-3xl mx-auto transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tool Stack</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            My go-to toolkit — the apps, platforms, and resources I rely on to design, build, and ship ideas.
          </p>
        </div>

        {/* Tool grids */}
        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
          {toolGroups.map((g) => (
            <ToolCard key={g.category} category={g.category} tools={g.tools} />
          ))}
        </div>
      </main>
    </div>
  );
}
