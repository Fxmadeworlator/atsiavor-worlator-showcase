import { ArrowLeft, Flag, Users, Target, ListChecks } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const outcomes = [
  {
    icon: Flag,
    title: "Rapid Launch",
    description: "Shipped iOS & Android MVP in 10 weeks from zero. Achieved 1,200 installs in first 3 weeks through organic growth alone.",
  },
  {
    icon: Users,
    title: "Strong Retention",
    description: "38% D7 retention rate exceeded industry benchmarks. 52% of active users added a family member to share pet care duties.",
  },
  {
    icon: Target,
    title: "User Satisfaction",
    description: "4.8 ⭐ Play Store rating. Users praised the intuitive care logging and family sharing features as standout capabilities.",
  },
  {
    icon: ListChecks,
    title: "Complete Handoff",
    description: "Delivered MIT-licensed codebase, 40-page product wiki, hand-off deck, and public roadmap for continued development.",
  },
];

export default function OotieOutcomes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-950 flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen flex items-center z-50">
        <nav className="flex flex-col gap-3 p-4 bg-nav-bg/80 backdrop-blur-sm rounded-3xl border border-border shadow-lg ml-6">
          <button
            onClick={() => navigate("/apps")}
            className="flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 w-12"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 flex-shrink-0" />
          </button>
        </nav>
      </aside>

      <main className="flex-1 ml-12">
        {/* Header & Tabs */}
        <div className="sticky top-0 z-50 backdrop-blur-2xl bg-transparent border-b border-white/10 shadow-2xl">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex justify-center">
              <Tabs defaultValue="outcomes" className="w-full">
                <TabsList className="bg-transparent p-0 gap-2 justify-center">
                  <TabsTrigger
                    value="role"
                    onClick={() => navigate("/ootie-case-story")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    My Role
                  </TabsTrigger>
                  <TabsTrigger
                    value="opportunities"
                    onClick={() => navigate("/ootie-opportunities")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    Opportunities
                  </TabsTrigger>
                  <TabsTrigger
                    value="approach"
                    onClick={() => navigate("/ootie-approach")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    Approach
                  </TabsTrigger>
                  <TabsTrigger
                    value="outcomes"
                    onClick={() => navigate("/ootie-outcomes")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white text-black shadow-lg scale-105 font-medium"
                  >
                    Impact & Outcomes
                  </TabsTrigger>
                  <TabsTrigger
                    value="outputs"
                    onClick={() => navigate("/ootie-outputs")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    Glimpse of Outputs
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="min-h-[calc(100vh-80px)] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Impact & Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-900/50 rounded-xl border border-white/20 backdrop-blur-sm"
                >
                  <item.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-white">10</p>
                <p className="text-sm text-gray-300 mt-1">Weeks to MVP</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-white">1,200</p>
                <p className="text-sm text-gray-300 mt-1">Installs in 3 weeks</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-white">38%</p>
                <p className="text-sm text-gray-300 mt-1">D7 Retention</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="text-3xl md:text-4xl font-bold text-white">4.8⭐</p>
                <p className="text-sm text-gray-300 mt-1">Play Store Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
