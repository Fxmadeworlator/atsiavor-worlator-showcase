// src/pages/OotieCaseStory.tsx
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PANES = [
  { id: "role",    label: "My Role",    color: "sky"     },
  { id: "goals",   label: "Goals",      color: "emerald" },
  { id: "approach",label: "Approach",   color: "violet"  },
  { id: "outcomes",label: "Outcomes",   color: "rose"    },
  { id: "outputs", label: "Outputs",    color: "amber"   },
] as const;

type PaneId = typeof PANES[number]["id"];

export default function OotieCaseStory() {
  const [pane, setPane] = useState<PaneId>("role");
  const active = PANES.find((p) => p.id === pane)!;

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      {/* full-page main area */}
      <main
        key={pane}
        className={`flex-1 bg-${active.color}-50 text-${active.color}-900
                   flex flex-col items-center justify-center p-8 md:p-16`}
      >
        {/* top nav */}
        <nav className="absolute top-0 left-0 right-0 p-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <Link to="/projects?category=apps">
                <ArrowLeft className="w-4 h-4" />
                Back to Apps
              </Link>
            </Button>

            <div className="flex gap-2">
              {PANES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPane(p.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-semibold transition
                    ${
                      pane === p.id
                        ? `bg-${p.color}-500 text-white shadow`
                        : `bg-secondary text-foreground hover:bg-${p.color}-100`
                    }
                  `}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* content */}
        <div className="max-w-3xl w-full space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">{active.label}</h1>

          {pane === "role" && (
            <>
              <p className="text-lg">
                I was the solo full-stack engineer & product designer hired to
                ship Ootie from zero to MVP in 10 weeks.
              </p>
              <p className="text-lg">
                Scope: user research, UX, React-Native mobile app, Supabase
                backend, go-to-market site.
              </p>
            </>
          )}

          {pane === "goals" && (
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Launch iOS & Android MVP before investor demo day.</li>
              <li>Hit &gt;30 % weekly retention in first month.</li>
              <li>
                Merge three pet-owner jobs (care log, social, marketplace) into
                one coherent product.
              </li>
            </ul>
          )}

          {pane === "approach" && (
            <>
              <p className="text-lg">
                Weekly design sprint Monday; build Tue–Fri; TestFlight drop
                Saturday. Continuous user interviews; feedback tagged in Linear
                and shipped same week if in scope.
              </p>
              <p className="text-lg">
                Tech: React-Native + Expo, Supabase, Tailwind—optimised for
                speed, not novelty.
              </p>
            </>
          )}

          {pane === "outcomes" && (
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>1 200 installs in 3 weeks (organic).</li>
              <li>38 % D7 retention; 4.8 ⭐ Play Store rating.</li>
              <li>52 % of active users added a family member.</li>
            </ul>
          )}

          {pane === "outputs" && (
            <div className="space-y-4">
              <p className="text-lg">✅ MIT-licensed React-Native repo</p>
              <p className="text-lg">✅ 40-page product wiki + hand-off deck</p>
              <p className="text-lg">✅ Public roadmap & feature-request board</p>
              <Button size="lg" className="gap-2 mt-4" asChild>
                <a
                  href="https://ootie-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live landing page
                </a>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
