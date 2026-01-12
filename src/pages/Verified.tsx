// src/pages/Verified.tsx
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";
import { Award, CheckCircle, TrendingUp, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ----------  Change these to your cert images  ---------- */
const CERT_IMAGES = [
  "/images/certs/openlabs.jpg",
  "/images/certs/phase1.jpg",
  "/images/certs/payout.jpg",
];

/* ----------  Certificate data  ---------- */
const certs = [
  {
    title: "OpenLabs Software Development",
    issuer: "OpenLabs Ghana",
    date: "Jun 2024",
    credential: "https://verify.openlabs.com.gh/certificate/abc123",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Phase-1 Passing Certificate",
    issuer: "OpenLabs Ghana",
    date: "Dec 2023",
    credential: "https://verify.openlabs.com.gh/certificate/xyz789",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Payout & Stipend Certificate",
    issuer: "OpenLabs Ghana",
    date: "Oct 2023",
    credential: "https://verify.openlabs.com.gh/certificate/pay456",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

/* ----------  Page  ---------- */
export default function Verified() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  // smooth auto-scroll to certificates
  useEffect(() => {
    const timer = setTimeout(() => {
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Sidebar />

      {/* 1️⃣  FULL-SCREEN HERO */}
      <section
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${CERT_IMAGES[0]})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg">
            Verified
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
            Beyond code & engines — my verified milestones, certificates & achievements.
          </p>
          <ChevronDown className="mx-auto mt-8 w-8 h-8 text-white/70 animate-bounce" />
        </div>
      </section>

      {/* 2️⃣  STICKY / POP HEADER */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-30 flex items-center justify-center py-4 bg-background/70 backdrop-blur-lg border-b border-border transition-all duration-500 ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-bold">/ Verified</h2>
      </header>

      {/* 3️⃣  CERTIFICATES over blurred background carousel */}
      <section ref={heroRef} className="relative min-h-screen py-20 px-8">
        {/* blurred background carousel */}
        <div className="fixed inset-0 grid grid-cols-3 opacity-30 pointer-events-none">
          {CERT_IMAGES.map((src, i) => (
            <div
              key={i}
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})`, filter: "blur(8px)" }}
            />
          ))}
        </div>

        {/* content */}
        <div className="relative z-10 max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {certs.map((c, i) => {
            const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
            return (
              <div
                key={i}
                ref={ref}
                className={`rounded-2xl border border-border bg-card/80 backdrop-blur p-6 shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary">{c.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Issued by {c.issuer} • {c.date}
                    </p>
                  </div>
                </div>

                {c.credential && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 gap-2"
                    asChild
                  >
                    <a href={c.credential} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        {/* footer note */}
        <div className="relative z-10 text-center text-xs text-muted-foreground mt-20">
          Credentials are verified via official issuer platforms.
        </div>
      </section>
    </>
  );
}
