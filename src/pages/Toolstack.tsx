// src/pages/Toolstack.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Code, Github } from "lucide-react";

/* --------------  SVG LOGOS  -------------- */
const FigmaLogo   = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M15.332 3.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM13.5 14a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM3.5 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM10.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM24 12a6 6 0 0 0-6-6h-3v6a6 6 0 0 0 6 6v-6z"/></svg>;
const CanvaLogo   = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.373 0 .001 5.373.001 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm4.35 17.42c-1.118.73-2.553 1.147-4.35 1.147-3.026 0-5.47-1.6-5.47-4.25 0-2.16 1.72-3.97 4.02-4.25.146-.02.29-.04.44-.055v2.16c-1.27.27-2.18 1.3-2.18 2.57 0 1.45 1.18 2.63 2.63 2.63.88 0 1.66-.43 2.13-1.09l1.81 1.81z"/></svg>;
const VscodeLogo  = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M4.3 2.15a1.2 1.2 0 0 0-1.2 1.2v17.3a1.2 1.2 0 0 0 1.2 1.2l1.8-1.8L6.9 3.35l-2.6-1.2zM18.9 3.35L17.3 2.15a1.2 1.2 0 0 0-1.7 0L8.1 8.55l4.2 4.2 7.6-7.6zM8.1 15.45l4.2 4.2-5.4 5.4a1.2 1.2 0 0 0 0 1.7l1.2 1.2 11.4-11.4-4.2-4.2z"/></svg>;
const LovableLogo = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>;
const CursorLogo  = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>;
const ChatgptLogo = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-11.23-2.26c.37-1.2.15-2.5-.6-3.45-.75-.95-1.94-1.37-3.13-1.1-.48-1.7-2.08-2.8-3.9-2.38-1.82.42-3.05 2.12-2.83 3.93.6.1 1.17.34 1.67.7.8.57 1.3 1.46 1.3 2.4 0 .35-.06.7-.18 1.02.37 1.2.15 2.5-.6 3.45-.75.95-1.94 1.37-3.13 1.1-.48 1.7-2.08 2.8-3.9 2.38-1.82-.42-3.05-2.12-2.83-3.93.6-.1 1.17-.34 1.67-.7.8-.57 1.3-1.46 1.3-2.4 0-.35-.06-.7-.18-1.02z"/></svg>;
const GeminiLogo  = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;

/* --------------  OTHER TOOLS LOGOS  -------------- */
const ExcelLogo   = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 4.5v15c0 1.38-1.12 2.5-2.5 2.5H5c-1.38 0-2.5-1.12-2.5-2.5v-15C2.5 3.12 3.62 2 5 2h14c1.38 0 2.5 1.12 2.5 2.5zM8 6v4l2-2 2 2V6h4v12h-2v-4l-2 2-2-2v4H8V6h8z"/></svg>;
const WordLogo    = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 4.5v15c0 1.38-1.12 2.5-2.5 2.5H5c-1.38 0-2.5-1.12-2.5-2.5v-15C2.5 3.12 3.62 2 5 2h14c1.38 0 2.5 1.12 2.5 2.5zM8 6v12h2v-5h4v5h2V6h-2v5h-4V6H8z"/></svg>;
const DiscordLogo = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128c.126-.093.252-.189.372-.287a.076.076 0 0 1 .078-.01c3.927 1.815 8.18 1.815 12.08 0a.077.077 0 0 1 .079.009c.12.098.246.194.372.288a.077.077 0 0 1-.006.127a12.75 12.75 0 0 1-1.873.892a.076.076 0 0 0-.041.107c.36.698.78 1.36 1.225 1.993a.078.078 0 0 0 .084.028a19.89 19.89 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.684-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.14-1.06-2.14-2.37s.957-2.37 2.14-2.37c1.182 0 2.14 1.06 2.14 2.37s-.958 2.37-2.14 2.37zm7.96 0c-1.183 0-2.14-1.06-2.14-2.37s.957-2.37 2.14-2.37c1.182 0 2.14 1.06 2.14 2.37s-.958 2.37-2.14 2.37z"/></svg>;
const GoogleLogo  = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.2 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.37-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.13 1 11.75s.43 3.2 1.18 4.68l3.66-3.34z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.04 14.9 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>;
const TelegramLogo= () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M9.78 18.65l.3-4.65L21.15 5.95c.44-.32.36-.85-.13-1.03l-16.2-6.25c-.53-.2-1.02.26-.84.78L5.2 12.7l4.3 1.33.3 4.65c.06.94 1.3 1.2 1.8.48l2.2-2.97 4.5 3.38c.6.45 1.5.1 1.62-.68zM11 12.46l-6.6-4.2 13.2 5.1-6.6 2.56z"/></svg>;
const VercelLogo  = () => <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>;
const KimiLogo    = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-2-9h4v2h-4v-2z"/></svg>;
const DeepseekLogo= () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>;
const NotionLogo  = () => <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.77 2.54a1.5 1.5 0 011.5 0l9.23 5.25a1.5 1.5 0 01.77 1.3v8.42a1.5 1.5 0 01-.77 1.3L8.27 21.5a1.5 1.5 0 01-1.5 0L2 17.25a1.5 1.5 0 010-2.6L12 9.4l9 5.25V8.08l-9.23-5.25L8.27 2.54zM12 11.88L6.77 8.08 12 4.29l5.23 3.79L12 11.88z"/></svg>;
const MeetLogo    = () => <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM10 15.5h-2v-2h2v2zm0-3.5h-2V7h2v5zm4 3.5h-2v-2h2v2zm0-3.5h-2V7h2v5zm4 3.5h-2v-2h2v2zm0-3.5h-2V7h2v5z"/></svg>;

/* --------------  TOOL CARD  -------------- */
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

/* --------------  OTHER TOOLS SECTION  -------------- */
const OtherTools = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const tools = [
    { name: "Excel",     logo: <ExcelLogo   /> },
    { name: "Word",      logo: <WordLogo    /> },
    { name: "Discord",   logo: <DiscordLogo /> },
    { name: "Google",    logo: <GoogleLogo  /> },
    { name: "Telegram",  logo: <TelegramLogo/> },
    { name: "Vercel",    logo: <VercelLogo  /> },
    { name: "Kimi AI",   logo: <KimiLogo    /> },
    { name: "DeepSeek",  logo: <DeepseekLogo/> },
    { name: "Notion",    logo: <NotionLogo  /> },
    { name: "Google Meet",logo:<MeetLogo    /> },
  ];

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <Code className="h-5 w-5 text-primary" />
        Other Tools I use
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

/* --------------  MAIN PAGE  -------------- */
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
        { name: "ChatGPT", logo: <ChatgptLogo /> },
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

        {/* -----  OTHER TOOLS  ----- */}
        <div className="max-w-3xl mx-auto mt-6">
          <OtherTools />
        </div>
      </main>
    </div>
  );
};

export default Toolstack;
