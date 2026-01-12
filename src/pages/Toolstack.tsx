// src/pages/Toolstack.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Github } from "lucide-react";

const FLATICON = "https://cdn-icons-png.flaticon.com/512";

const Logo = ({ src }: { src: string }) => (
  <img src={src} alt="" className="h-10 w-10 object-contain" />
);

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

/* ----------  OTHER TOOLS – 4-COLUMN GRID  ---------- */
const OtherTools = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const tools = [
    { name: "Excel",     img: `${FLATICON}/732212/732212.png` },
    { name: "Word",      img: `${FLATICON}/732221/732221.png` },
    { name: "Discord",   img: `${FLATICON}/2111370/2111370.png` },
    { name: "Google",    img: `${FLATICON}/2991147/2991147.png` },
    { name: "Telegram",  img: `${FLATICON}/2111646/2111646.png` },
    { name: "YouTube",   img: `${FLATICON}/1384060/1384060.png` },
    { name: "X",         img: `${FLATICON}/5969020/5969020.png` },
    { name: "Pinterest", img: `${FLATICON}/2111378/2111378.png` },
    { name: "Vercel",    img: `${FLATICON}/5967269/5967269.png` },
    { name: "Kimi AI",   img: `${FLATICON}/9214907/9214907.png` },
    { name: "DeepSeek",  img: `${FLATICON}/2889626/2889626.png` },
    { name: "Notion",    img: `${FLATICON}/5968262/5968262.png` },
    { name: "Google Meet",    img: `${FLATICON}/732219/732219.png` },
    { name: "Google Analytics", img: `${FLATICON}/732204/732204.png` },
    { name: "Wix",       img: `${FLATICON}/732283/732283.png` },
    { name: "Zoom",      img: `${FLATICON}/732284/732284.png` },
    { name: "Google Calendar", img: `${FLATICON}/732213/732213.png` },
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
            className="text-foreground/70 hover:text-foreground transition-colors"
            title={t.name}
          >
            <Logo src={t.img} />
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
      tools: [
        { name: "Figma", logo: <Logo src={`${FLATICON}/732234/732234.png`} /> },
        { name: "Canva", logo: <Logo src={`${FLATICON}/732204/732204.png`} /> },
      ],
    },
    {
      category: "Development",
      tools: [
        { name: "GitHub", logo: <Github className="h-10 w-10" /> },
        { name: "VS Code", logo: <Logo src={`${FLATICON}/732244/732244.png`} /> },
      ],
    },
    {
      category: "No-Code",
      tools: [
        { name: "Lovable", logo: <Logo src={`${FLATICON}/732283/732283.png`} /> },
        { name: "Cursor AI", logo: <Logo src={`${FLATICON}/732244/732244.png`} /> },
      ],
    },
    {
      category: "AI & Productivity",
      tools: [
        { name: "ChatGPT", logo: <Logo src={`${FLATICON}/732230/732230.png`} /> },
        { name: "Gemini", logo: <Logo src={`${FLATICON}/732221/732221.png`} /> },
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

        <OtherTools />

        {/* -----  FLATICON ATTRIBUTION  ----- */}
        <div className="max-w-5xl mx-auto mt-12 text-center text-xs text-muted-foreground">
          Icons by{" "}
          <a href="https://www.flaticon.com/free-icons/figma" target="_blank" rel="noreferrer" className="underline">Freepik (Figma)</a>,{" "}
          <a href="https://www.flaticon.com/free-icons/discord" target="_blank" rel="noreferrer" className="underline">Pixel perfect (Discord, Pinterest, YouTube, GitHub)</a>,{" "}
          <a href="https://www.flaticon.com/free-icons/google" target="_blank" rel="noreferrer" className="underline">Freepik (Google)</a> from{" "}
          <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer" className="underline">www.flaticon.com</a>
        </div>
      </main>
    </div>
  );
};

export default Toolstack;
