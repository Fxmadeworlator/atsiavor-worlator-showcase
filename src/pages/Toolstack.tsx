// src/pages/Toolstack.tsx
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ----------  SVG LOGOS (brand colors)  ---------- */
const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" className="h-5 w-5">
    <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
    <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
    <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
    <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
    <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
  </svg>
);

const CanvaLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path fill="#00C4CC" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.787c-.265.265-.645.442-1.103.442-1.323 0-2.323-1.383-3.565-1.383-.795 0-1.456.543-2.116 1.148-.398.366-.795.707-1.236.707-.663 0-1.103-.574-1.103-1.323 0-1.766 2.426-3.831 5.053-3.831 1.722 0 2.825.795 2.825 1.854 0 .707-.442 1.236-1.059 1.236-.442 0-.707-.221-.707-.574 0-.265.177-.486.177-.707 0-.309-.353-.53-.883-.53-1.457 0-2.869 1.28-2.869 2.558 0 .442.221.707.574.707.486 0 .927-.398 1.545-.795.707-.456 1.545-.971 2.647-.971 1.059 0 1.898.53 1.898 1.413 0 .353-.132.707-.398.927l.32.122z"/>
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path fill="#007ACC" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
  </svg>
);

const LovableLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path fill="#FF6B6B" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const CursorLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <rect fill="#000" rx="4" width="24" height="24"/>
    <path fill="#fff" d="M7 6l10 6-10 6V6z"/>
  </svg>
);

const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path fill="#10A37F" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const GeminiLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <defs>
      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4"/>
        <stop offset="50%" stopColor="#9B72CB"/>
        <stop offset="100%" stopColor="#D96570"/>
      </linearGradient>
    </defs>
    <path fill="url(#gemini-grad)" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 3.6c4.6 0 8.4 3.8 8.4 8.4s-3.8 8.4-8.4 8.4S3.6 16.6 3.6 12 7.4 3.6 12 3.6z"/>
  </svg>
);

/* ----------  Other tools logos  ---------- */
const ExcelLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#217346" d="M23 1.5H7.5a.5.5 0 0 0-.5.5v5H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6v5a.5.5 0 0 0 .5.5H23a1 1 0 0 0 1-1V2.5a1 1 0 0 0-1-1zM6.5 12l-2 3H3l1.5-2.5L3 10h1.5l2 3zm8.5 6H8V6h7v12z"/>
  </svg>
);

const WordLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#2B579A" d="M23 1.5H7.5a.5.5 0 0 0-.5.5v5H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6v5a.5.5 0 0 0 .5.5H23a1 1 0 0 0 1-1V2.5a1 1 0 0 0-1-1zM5.5 14L4 10h1l.75 2.5L6.5 10h1L6 14H5.5zM15 18H8V6h7v12z"/>
  </svg>
);

const DiscordLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#5865F2" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const TelegramLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#0088CC" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const YouTubeLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="currentColor" d="M24 22.525H0l12-21.05 12 21.05z"/>
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.09c-.42-.326-.98-.7-2.055-.607L3.01 2.63c-.467.047-.56.28-.374.466l1.823 1.112zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933l3.222-.187zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
  </svg>
);

const MeetLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#00832D" d="M12 12.75c1.63 0 3.07.39 4.24.97l2.77-2.77A9.96 9.96 0 0 0 12 9c-2.79 0-5.33 1.08-7.24 2.84l2.77 2.78A6.47 6.47 0 0 1 12 12.75z"/>
    <path fill="#0066DA" d="M12 15.5c-.81 0-1.55.31-2.12.81l2.12 2.12 2.12-2.12c-.57-.5-1.31-.81-2.12-.81z"/>
    <path fill="#E94235" d="M7.53 14.62l-2.77-2.78C3.33 13.25 2.5 15.04 2.5 17h4c0-1.04.4-1.98 1.03-2.38z"/>
    <path fill="#F9AB00" d="M17.5 17h4c0-1.96-.83-3.75-2.26-5.16l-2.77 2.78c.63.5 1.03 1.34 1.03 2.38z"/>
    <rect fill="#00832D" x="3" y="17" width="18" height="4" rx="1"/>
  </svg>
);

const PinterestLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#E60023" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const ZoomLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#2D8CFF" d="M4.585 9.588h8.59v4.823H4.584V9.588zm15.267-4.79c-.304-.15-.66-.15-.964.002l-3.455 1.705v11.002l3.455 1.7c.61.302 1.327-.103 1.327-.75V5.547c0-.324-.163-.608-.363-.75zM2.117 5.996a.995.995 0 0 0-.995.996v9.012c0 .55.444.996.995.996h12.056c.55 0 .995-.445.995-.996V6.992a.996.996 0 0 0-.995-.996H2.117z"/>
  </svg>
);

const CalendarLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6">
    <path fill="#4285F4" d="M17 2h-2V1h-2v1H7V1H5v1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-2zm0 16H3V8h14v10z"/>
    <path fill="#EA4335" d="M12 9.5l-5.5 5.5 1.41 1.41L12 12.33l4.09 4.08 1.41-1.41z"/>
    <rect fill="#FBBC04" x="6" y="10" width="3" height="2"/>
    <rect fill="#34A853" x="11" y="10" width="3" height="2"/>
    <rect fill="#4285F4" x="6" y="14" width="3" height="2"/>
  </svg>
);

interface ToolItemProps {
  name: string;
  logo: React.ReactNode;
}

interface ToolCategoryProps {
  category: string;
  tools: ToolItemProps[];
}

const ToolCategory = ({ category, tools }: ToolCategoryProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wide">
        {category}
      </h3>
      <div className="flex flex-wrap gap-6">
        {tools.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-3 text-foreground"
          >
            <span className="flex items-center justify-center">{t.logo}</span>
            <span className="text-sm font-medium">{t.name}</span>
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
    { name: "Excel", icon: <ExcelLogo /> },
    { name: "Word", icon: <WordLogo /> },
    { name: "Discord", icon: <DiscordLogo /> },
    { name: "Google", icon: <GoogleLogo /> },
    { name: "Telegram", icon: <TelegramLogo /> },
    { name: "YouTube", icon: <YouTubeLogo /> },
    { name: "Vercel", icon: <VercelLogo /> },
    { name: "Notion", icon: <NotionLogo /> },
    { name: "Google Meet", icon: <MeetLogo /> },
    { name: "Pinterest", icon: <PinterestLogo /> },
    { name: "Zoom", icon: <ZoomLogo /> },
    { name: "Calendar", icon: <CalendarLogo /> },
  ];

  return (
    <div
      ref={ref}
      className={`max-w-3xl mx-auto mt-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
        Other Tools
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
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

  const toolGroups: ToolCategoryProps[] = [
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
        { name: "GitHub", logo: <GitHubLogo /> },
        { name: "VS Code", logo: <VSCodeLogo /> },
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
      <MobileNav />
      <main className="min-h-screen px-8 pb-20">
        <div
          ref={headerRef}
          className={`pt-[20vh] mb-16 max-w-3xl mx-auto transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Tool Stack</h1>
          <p className="text-sm text-muted-foreground max-w-xl">
            The apps I actually open every day to design, build, and ship.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Row 1: Design & Prototyping | Development */}
          <ToolCategory category={toolGroups[0].category} tools={toolGroups[0].tools} />
          <ToolCategory category={toolGroups[1].category} tools={toolGroups[1].tools} />
          {/* Row 2: No-Code | AI & Productivity */}
          <ToolCategory category={toolGroups[2].category} tools={toolGroups[2].tools} />
          <ToolCategory category={toolGroups[3].category} tools={toolGroups[3].tools} />
        </div>

        <OtherTools />
      </main>
    </div>
  );
};

export default Toolstack;
