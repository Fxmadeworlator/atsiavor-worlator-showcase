// src/pages/OotieCaseStory.tsx
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productImage from "@/assets/product-apps.png";

const TABS = [
  { id: "role",   label: "My Role",   color: "sky" },
  { id: "goals",  label: "Goals",     color: "emerald" },
  { id: "approach",label: "Approach", color: "violet" },
  { id: "outcomes",label: "Outcomes", color: "rose" },
  { id: "outputs", label: "Outputs",  color: "amber" },
] as const;

type TabId = typeof TABS[number]["id"];

export default function OotieCaseStory() {
  const [active, setActive] = useState<TabId>("role");

  const color = TABS.find((t) => t.id === active)!.color; // always found

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="min-h-screen px-8 py-12">
        {/* Back button */}
        <div className="max-w-5xl mx-auto mb-8">
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
        </div>

        {/* Hero strip */}
        <div className="max-w-5xl mx-auto mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Ootie</h1>
          <p className="text-xl text-muted-foreground">
            The all-in-one pet management, social, and marketplace app.
          </p>
        </div>

        {/* Product image */}
        <div className="flex justify-center mb-12">
          <img
            src={productImage}
            alt="Ootie App"
            className="max-w-full h-auto"
            style={{ maxHeight: "40vh", background: "transparent" }}
          />
        </div>

        {/* Tab nav */}
        <div className="max-w-5xl mx-auto mb-8">
          <nav className="flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-semibold transition
                  ${
                    active === t.id
                      ? `bg-${t.color}-500 text-white shadow`
                      : `bg-secondary text-foreground hover:bg-${t.color}-100`
                  }
                `}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab content */}
        <div
          className={`
            max-w-5xl mx-auto rounded-2xl p-8 md:p-12
            bg-${color}-50 border border-${color}-200
            text-${color}-900
          `}
        >
          {active === "role" && <RoleSection />}
          {active === "goals" && <GoalsSection />}
          {active === "approach" && <ApproachSection />}
          {active === "outcomes" && <OutcomesSection />}
          {active === "outputs" && <OutputsSection />}
        </div>
      </main>
    </div>
  );
}

/* ---------- Section components ---------- */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="space-y-4 text-base leading-relaxed">{children}</div>
  </section>
);

const RoleSection = () => (
  <Section title="My Role">
    <p>
      I was the solo full-stack engineer and product designer hired by the
      founding team to take Ootie from zero to MVP launch in 10 weeks.
    </p>
    <p>
      My mandate covered everything: user research, wireframes, UI/UX,
      React-Native mobile app, Supabase backend, and go-to-market landing page.
    </p>
  </Section>
);

const GoalsSection = () => (
  <Section title="Goals">
    <ul className="list-disc pl-5 space-y-2">
      <li>Ship MVP on both iOS & Android before investor demo day.</li>
      <li>
        Achieve &gt;30 % weekly-retention among beta users in first month.
      </li>
      <li>
        Consolidate three fragmented pet-owner needs (care log, social feed,
        marketplace) into one coherent product.
      </li>
    </ul>
  </Section>
);

const ApproachSection = () => (
  <Section title="Approach">
    <p>
      I ran a design sprint every Monday, coded Tuesday–Friday, and released a
      new TF build every Saturday morning. Continuous user interviews happened
      in parallel; feedback was tagged in Linear and shipped the same week if
      it fit the sprint goal.
    </p>
    <p>
      Tech choices were deliberately boring: React Native + Expo, Supabase for
      auth / DB / storage, and Tailwind for the marketing site—maximising speed
      over novelty.
    </p>
  </Section>
);

const OutcomesSection = () => (
  <Section title="Outcomes">
    <ul className="list-disc pl-5 space-y-2">
      <li>1 200 installs within 3 weeks of launch (organic only).</li>
      <li>38 % D7 retention; 4.8 ⭐ average rating on Play Store.</li>
      <li>
        52 % of active users invited a family member → validating shared-care
        hypothesis.
      </li>
    </ul>
  </Section>
);

const OutputsSection = () => (
  <Section title="Outputs">
    <div className="space-y-4">
      <p>
        ✅ React-Native codebase (TypeScript) open-sourced under MIT.  
        ✅ 40-page product wiki & hand-off deck for incoming team.  
        ✅ Public roadmap + feature-request board in Trello.
      </p>
      <Button size="lg" className="gap-2 mt-4" asChild>
        <a href="https://ootie-web.vercel.app/" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-5 h-5" />
          Visit live landing page
        </a>
      </Button>
    </div>
  </Section>
);
