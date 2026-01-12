// src/pages/Verified.tsx  (drop-in for /verified route)
import Sidebar from "@/components/Sidebar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Cert {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  icon: React.ReactNode;
}

const certs: Cert[] = [
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

export default function Verified() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="min-h-screen px-8 pb-20">
        {/* Hero */}
        <div
          ref={headerRef}
          className={`pt-[25vh] mb-16 max-w-3xl mx-auto text-center transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">/ Verified</h1>
          <p className="text-lg text-muted-foreground">
            My verified milestones, certificates & achievements beyond the code.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {certs.map((c, i) => {
            const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
            return (
              <div
                key={i}
                ref={ref}
                className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary">{c.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">Issued by {c.issuer} • {c.date}</p>
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

        {/* Footer */}
        <div className="max-w-3xl mx-auto text-center text-xs text-muted-foreground mt-16">
          Credentials are verified via official issuer platforms.
        </div>
      </main>
    </div>
  );
}
