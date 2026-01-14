// src/pages/Verified.tsx
import Sidebar from "@/components/Sidebar";
import { useEffect, useRef, useState } from "react";
import { Award, CheckCircle, TrendingUp, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ----------  Trading achievements data  ---------- */
const achievements = [
  {
    title: "FTMO Challenge Passed",
    issuer: "FTMO",
    date: "2024",
    credential: "#",
    icon: <Award className="w-6 h-6" />,
    image: "/images/certs/ftmo.jpg",
  },
  {
    title: "Funded Trader",
    issuer: "MyForexFunds",
    date: "2023",
    credential: "#",
    icon: <CheckCircle className="w-6 h-6" />,
    image: "/images/certs/mff.jpg",
  },
  {
    title: "Prop Firm Payout",
    issuer: "The5ers",
    date: "2023",
    credential: "#",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "/images/certs/payout.jpg",
  },
];

/* ----------  Page  ---------- */
export default function Verified() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        setShowContent(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate hero opacity based on scroll
  const heroOpacity = Math.max(0, 1 - scrollY / 400);
  const heroScale = Math.max(0.8, 1 - scrollY / 2000);
  const contentOpacity = Math.min(1, (scrollY - 200) / 300);

  return (
    <div className="min-h-[300vh] bg-background">
      <Sidebar />

      {/* 1️⃣  STICKY HERO - stays in place and fades */}
      <section
        className="fixed inset-0 h-screen w-full flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none"
        style={{
          opacity: heroOpacity,
          transform: `scale(${heroScale})`,
        }}
      >
        <div
          className="px-8 py-4 rounded-2xl bg-card border border-border shadow-lg"
          style={{
            transition: "transform 0.3s ease-out",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Verified
          </h1>
        </div>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg">
          When I'm not coding or fixing engines, I'm trading. Here are my verified achievements.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Spacer for scroll */}
      <div className="h-screen" />

      {/* 2️⃣  CONTENT that scrolls over the hero */}
      <section
        ref={contentRef}
        className="relative z-30 bg-background min-h-screen py-20 px-8"
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.5s ease-out",
        }}
      >
        {/* Floating header that appears */}
        <div
          className="sticky top-4 z-40 flex justify-center mb-12"
          style={{
            opacity: contentOpacity,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <div className="px-6 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-sm">
            <h2 className="text-lg font-semibold">Verified</h2>
          </div>
        </div>

        {/* Achievements grid - 2x2 layout */}
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {/* First row */}
          {achievements.slice(0, 2).map((a, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-muted flex items-center justify-center text-6xl">
                📈
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <div className="text-primary">{a.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {a.issuer} • {a.date}
                    </p>
                  </div>
                </div>

                {a.credential && a.credential !== "#" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 gap-2"
                    asChild
                  >
                    <a href={a.credential} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}

          {/* "Soon..." placeholder - side by side with first row visually in second row */}
          <div className="group rounded-2xl border border-border bg-card/50 overflow-hidden shadow-sm">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <span className="text-4xl text-muted-foreground/50">🔒</span>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <div className="text-muted-foreground/50">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-muted-foreground/70">Soon...</h3>
                  <p className="text-sm text-muted-foreground/50">More achievements coming</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second "Soon..." placeholder */}
          <div className="group rounded-2xl border border-border bg-card/50 overflow-hidden shadow-sm">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <span className="text-4xl text-muted-foreground/50">🔒</span>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <div className="text-muted-foreground/50">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-muted-foreground/70">Soon...</h3>
                  <p className="text-sm text-muted-foreground/50">Stay tuned</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-xs text-muted-foreground mt-20">
          Trading achievements verified via official prop firm platforms.
        </div>
      </section>
    </div>
  );
}
