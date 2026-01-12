// src/pages/Toolstack.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Palette, Github } from "lucide-react";

/* ----------  SVG LOGOS AS REACT COMPONENTS  ---------- */
const FigmaLogo = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.332 3.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM13.5 14a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM3.5 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM10.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM24 12a6 6 0 0 0-6-6h-3v6a6 6 0 0 0 6 6v-6z"/>
  </svg>
);

const CanvaLogo = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 .001 5.373.001 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm4.35 17.42c-1.118.73-2.553 1.147-4.35 1.147-3.026 0-5.47-1.6-5.47-4.25 0-2.16 1.72-3.97 4.02-4.25.146-.02.29-.04.44-.055v2.16c-1.27.27-2.18 1.3-2.18 2.57 0 1.45 1.18 2.63 2.63 2.63.88 0 1.66-.43 2.13-1.09l1.81 1.81z"/>
  </svg>
);

const VscodeLogo = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.3 2.15a1.2 1.2 0 0 0-1.2 1.2v17.3a1.2 1.2 0 0 0 1.2 1.2l1.8-1.8L6.9 3.35l-2.6-1.2zM18.9 3.35L17.3 2.15a1.2 1.2 0 0 0-1.7 0L8.1 8.55l4.2 4.2 7.6-5.4zM8.1 15.45l4.2 4.2-5.4 5.4a1.2 1.2 0 0 0 0 1.7l1.2 1.2 11.4-11.4-4.2-4.2z"/>
  </svg>
);

const LovableLogo = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const CursorLogo = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const ChatGPTLogo = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-11.23-2.26c.37-1.2.15-2.5-.6-3.45-.75-.95-1.94-1.37-3.13-1.1-.48-1.7-2.08-2.8-3.9-2.38-1.82.42-3.05 2.12-2.83 3.93.6.1 1.17.34 1.67.7.8.57 1.3 1.46 1.3 2.4 0 .35-.06.7-.18 1.02.37 1.2.15 2.5-.6 3.45-.75.95-1.94 1.37-3.13 1.1-.48 1.7-2.08 2.8-3.9 2.38-1.82-.42-3.05-2.12-2.83-3.93.6-.1 1.17-.34 1.67-.7.8-.57 1.3-1.46 1.3-2.4 0-.35-.06-.7-.18-1.02z"/>
  </svg>
);

const GeminiLogo = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

/* ----------  TOOL DATA  ---------- */
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

/* ----------  PAGE COMPONENT  ---------- */
const Toolstack = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  const toolGroups: ToolCardProps[] = [
    {
      category: "Design & Prototyping",
      tools: [
        { name: "Figma", logo: <FigmaLogo /> },
        { name: "Canva", logo: <CanvaLogo /> },
      ],
    },
    {
      category: "Development",
      tools: [
        { name: "GitHub", logo: <Github className="h-4 w-4" /> },
        { name: "VS Code", logo: <VscodeLogo /> },
      ],
    },
    {
      category: "No-Code",
      tools: [
        { name: "Lovable", logo: <LovableLogo /> },
        { name: "Cursor AI", logo: <CursorLogo /> },
      ],
    },
    {
      category: "AI & Productivity",
      tools: [
        { name: "ChatGPT", logo: <ChatGPTLogo /> },
        { name: "Gemini", logo: <GeminiLogo /> },
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
