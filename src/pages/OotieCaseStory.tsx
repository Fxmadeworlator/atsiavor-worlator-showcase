// src/pages/OotieCaseStory.tsx
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PANES = [
  { id: "role",   label: "My Role",   color: "sky" },
  { id: "goals",  label: "Goals",     color: "emerald" },
  { id: "approach",label: "Approach", color: "violet" },
  { id: "outcomes",label: "Outcomes", color: "rose" },
  { id: "outputs", label: "Outputs",  color: "amber" },
] as const;

type PaneId = typeof PANES[number]["id"];

export default function OotieCaseStory() {
  const [pane, setPane] = useState<PaneId>("role");
  const active = PANES.find((p) => p.id === pane)!;

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        {/* Header bar: tab labels act as nav */}

        {/* Content area: full pane swap */}
        <div
          key={pane} // remount on change for simple enter animation
          className={`flex-1 bg-${active.color}-50 text-${active.color}-900
                     flex items-center justify-center p-8 md:p-16`}
        >
          <div className="max-w-3xl w-full space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {active.label}
            </h1>

            {pane === "role" && (
              <>
                <p>
                  I was the solo full-stack engineer & product designer hired to
                  ship Ootie from zero to MVP in 10 weeks.
                </p>
                <p>
                  Scope: user research, UX, React-Native mobile app, Supabase
                  backend, go-to-market site.
                </p>
              </>
            )}

            {pane === "goals" && (
              <ul className="list-disc pl-5 space-y-2">
                <li>Launch iOS & Android MVP before investor demo day.</li>
                <li>Hit &gt;30 % weekly retention in first month.</li>
                <li>
                  Merge three pet-owner jobs (care log, social, marketplace)
                  into one coherent product.
                </li>
              </ul>
            )}

            {pane === "approach" && (
              <>
                <p>
                  Weekly design sprint Monday; build Tue–Fri; TestFlight drop
                  Saturday. Continuous user interviews; feedback tagged in
                  Linear and shipped same week if in scope.
                </p>
                <p>
                  Tech: React-Native + Expo, Supabase, Tailwind—optimised for
                  speed, not novelty.
                </p>
              </>
            )}

            {pane === "outcomes" && (
              <ul className="list-disc pl-5 space-y-2">
                <li>1 200 installs in 3 weeks (organic).</li>
                <li>38 % D7 retention; 4.8 ⭐ Play Store rating.</li>
                <li>52 % of active users added a family member.</li>
              </ul>
            )}

            {pane === "outputs" && (
              <div className="space-y-4">
                <p>✅ MIT-licensed React-Native repo</p>
                <p>✅ 40-page product wiki + hand-off deck</p>
                <p>✅ Public roadmap & feature-request board</p>
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
        </div>
      </main>
    </div>
  );
}
