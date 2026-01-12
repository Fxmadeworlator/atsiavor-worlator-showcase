// src/pages/Toolstack.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Palette, Github } from "lucide-react";
import FigmaSvg from "@/assets/figma.svg?react";
import CanvaSvg from "@/assets/canva.svg?react";
import VscodeSvg from "@/assets/vscode.svg?react";
import LovableSvg from "@/assets/lovable.svg?react";
import CursorSvg from "@/assets/cursor.svg?react";
import ChatgptSvg from "@/assets/chatgpt.svg?react";
import GeminiSvg from "@/assets/gemini.svg?react";

interface ToolCardProps {
  category: string;
  tools: { name: string; logo: React.ReactNode }[];
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
        <Palette className="h-5 w-5 text-primary" />
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {tools.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
          >
            {t.logo}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Toolstack = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  const toolGroups: ToolCardProps[] = [
    {
      category: "Design & Prototyping",
      tools: [
        { name: "Figma", logo: <FigmaSvg className="h-4 w-4" /> },
        { name: "Canva", logo: <CanvaSvg className="h-4 w-4" /> },
      ],
    },
    {
      category: "Development",
      tools: [
        { name: "GitHub", logo: <Github className="h-4 w-4" /> },
        { name: "VS Code", logo: <VscodeSvg className="h-4 w-4" /> },
      ],
    },
    {
      category: "No-Code",
      tools: [
        { name: "Lovable", logo: <LovableSvg className="h-4 w-4" /> },
        { name: "Cursor AI", logo: <CursorSvg className="h-4 w-4" /> },
      ],
    },
    {
      category: "AI & Productivity",
      tools: [
        { name: "ChatGPT", logo: <ChatgptSvg className="h-4 w-4" /> },
        { name: "Gemini", logo: <GeminiSvg className="h-4 w-4" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="min-h-screen px-8 pb-20">
        <div
          ref={headerRef}
          className={`pt-[20vh] mb-16 max-w-3xl mx-auto transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tool Stack</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            The apps I actually open every day to design, build, and ship.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
          {toolGroups.map((g) => (
            <ToolCard key={g.category} category={g.category} tools={g.tools} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Toolstack;
