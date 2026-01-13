// src/pages/Toolstack.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Figma, 
  Github, 
  Code2, 
  Sparkles, 
  Bot, 
  Brush,
  Layers,
  Zap,
  MessageSquare,
  Video,
  Calendar,
  BarChart3,
  FileText,
  Table2,
  Send,
  Youtube,
  Globe,
  BookOpen
} from "lucide-react";

interface ToolCardProps {
  category: string;
  icon: React.ReactNode;
  tools: { name: string; logo: React.ReactNode }[];
}

const ToolCard = ({ category, icon, tools }: ToolCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        {icon}
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {tools.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground"
          >
            <span className="h-5 w-5 flex items-center justify-center">{t.logo}</span>
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ----------  OTHER TOOLS – 4-COLUMN GRID  ---------- */
const OtherTools = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const tools = [
    { name: "Excel", icon: <Table2 className="h-6 w-6" /> },
    { name: "Word", icon: <FileText className="h-6 w-6" /> },
    { name: "Discord", icon: <MessageSquare className="h-6 w-6" /> },
    { name: "Google", icon: <Globe className="h-6 w-6" /> },
    { name: "Telegram", icon: <Send className="h-6 w-6" /> },
    { name: "YouTube", icon: <Youtube className="h-6 w-6" /> },
    { name: "Vercel", icon: <Zap className="h-6 w-6" /> },
    { name: "Notion", icon: <BookOpen className="h-6 w-6" /> },
    { name: "Google Meet", icon: <Video className="h-6 w-6" /> },
    { name: "Google Analytics", icon: <BarChart3 className="h-6 w-6" /> },
    { name: "Zoom", icon: <Video className="h-6 w-6" /> },
    { name: "Google Calendar", icon: <Calendar className="h-6 w-6" /> },
  ];

  return (
    <div
      ref={ref}
      className={`max-w-5xl mx-auto mt-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-center text-xl font-semibold mb-6">Other Tools I use</h3>
      <div className="grid grid-cols-4 gap-6 place-items-center">
        {tools.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            title={t.name}
          >
            {t.icon}
            <span className="text-xs">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ----------  MAIN PAGE  ---------- */
const Toolstack = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  const toolGroups: ToolCardProps[] = [
    {
      category: "Design & Prototyping",
      icon: <Brush className="h-5 w-5 text-primary" />,
      tools: [
        { name: "Figma", logo: <Figma className="h-5 w-5" /> },
        { name: "Canva", logo: <Layers className="h-5 w-5" /> },
      ],
    },
    {
      category: "Development",
      icon: <Code2 className="h-5 w-5 text-primary" />,
      tools: [
        { name: "GitHub", logo: <Github className="h-5 w-5" /> },
        { name: "VS Code", logo: <Code2 className="h-5 w-5" /> },
      ],
    },
    {
      category: "No-Code",
      icon: <Zap className="h-5 w-5 text-primary" />,
      tools: [
        { name: "Lovable", logo: <Sparkles className="h-5 w-5" /> },
        { name: "Cursor AI", logo: <Bot className="h-5 w-5" /> },
      ],
    },
    {
      category: "AI & Productivity",
      icon: <Bot className="h-5 w-5 text-primary" />,
      tools: [
        { name: "ChatGPT", logo: <Bot className="h-5 w-5" /> },
        { name: "Gemini", logo: <Sparkles className="h-5 w-5" /> },
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
            <ToolCard key={g.category} category={g.category} icon={g.icon} tools={g.tools} />
          ))}
        </div>

        <OtherTools />

        {/* -----  LUCIDE ATTRIBUTION  ----- */}
        <div className="max-w-5xl mx-auto mt-12 text-center text-xs text-muted-foreground">
          Icons by{" "}
          <a href="https://lucide.dev/" target="_blank" rel="noreferrer" className="underline">Lucide Icons</a>
        </div>
      </main>
    </div>
  );
};

export default Toolstack;
