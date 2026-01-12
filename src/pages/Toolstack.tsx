// src/pages/Toolstack.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Github } from "lucide-react";

/* ----------  HELPER: plain <img> logo  ---------- */
const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={`/images/toolstack/${src}`}
    alt={alt}
    className="h-10 w-10 object-contain"
  />
);

/* ----------  TOOL CARD (keeps round pills) ---------- */
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

/* ----------  OTHER TOOLS – BARE ICON GRID ---------- */
const OtherTools = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const tools = [
    /* office */
    { name: "Excel",     img: "excel.png" },
    { name: "Word",      img: "w.png" },
    /* social / comms */
    { name: "Discord",   img: "discord.png" },
    { name: "Google",    img: "google.png" },
    { name: "Telegram",  img: "telegram.png" },
    { name: "YouTube",   img: "youtube.png" },
    { name: "X",         img: "x.png" },
    { name: "Pinterest", img: "pinterest.png" },
    /* dev / productivity */
    { name: "Vercel",    img: "vercel.png" },
    { name: "Kimi AI",   img: "k.png" },
    { name: "DeepSeek",  img: "deepseek.png" },
    { name: "Notion",    img: "notion.png" },
    { name: "Google Meet", img: "meet.png" },
    { name: "Google Analytics", img: "analytics.png" },
    { name: "Wix",       img: "wix.png" },
    { name: "Zoom",      img: "zoom.png" },
    { name: "Google Calendar", img: "gcalendar.png" },
  ];

  return (
    <div
      ref={ref}
      className={`max-w-5xl mx-auto mt-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-center text-xl font-semibold mb-6">Other Tools I use</h3>
      {/* 4-column grid of naked icons */}
      <div className="grid grid-cols-4 gap-6 place-items-center">
        {tools.map((t) => (
          <div
            key={t.name}
            className="text-foreground/70 hover:text-foreground transition-colors"
            title={t.name}
          >
            <Logo src={t.img} alt={t.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ----------  MAIN PAGE ---------- */
const Toolstack = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  const toolGroups: ToolCardProps[] = [
    {
      category: "Design & Prototyping",
      tools: [
        { name: "Figma", logo: <Logo src="figma.png" alt="Figma" /> },
        { name: "Canva", logo: <Logo src="canva.png" alt="Canva" /> },
      ],
    },
    {
      category: "Development",
      tools: [
        { name: "GitHub", logo: <Github className="h-10 w-10" /> },
        { name: "VS Code", logo: <Logo src="vscode.png" alt="VS Code" /> },
      ],
    },
    {
      category: "No-Code",
      tools: [
        { name: "Lovable", logo: <Logo src="lovable.png" alt="Lovable" /> },
        { name: "Cursor AI", logo: <Logo src="cursor.png" alt="Cursor" /> },
      ],
    },
    {
      category: "AI & Productivity",
      tools: [
        { name: "ChatGPT", logo: <Logo src="chatgpt.png" alt="ChatGPT" /> },
        { name: "Gemini", logo: <Logo src="gemini.png" alt="Gemini" /> },
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

        {/* -----  OTHER TOOLS – 4-COLUMN GRID OF PLAIN IMAGES ----- */}
        <OtherTools />
      </main>
    </div>
  );
};

export default Toolstack;
