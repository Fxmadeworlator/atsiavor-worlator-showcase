import { useState } from "react";
import { ArrowLeft, Flag, Users, Target, ListChecks } from "lucide-react";
import { useNavigate } from "react-router-dom";

const outcomes = [
  {
    icon: Flag,
    title: "Rapid Launch",
    description:
      "Shipped iOS & Android MVP in 10 weeks from zero. Achieved 1,200 installs in first 3 weeks through organic growth alone.",
  },
  {
    icon: Users,
    title: "Strong Retention",
    description:
      "38% D7 retention rate exceeded industry benchmarks. 52% of active users added a family member to share pet care duties.",
  },
  {
    icon: Target,
    title: "User Satisfaction",
    description:
      "4.8 ⭐ Play Store rating. Users praised the intuitive care logging and family sharing features as standout capabilities.",
  },
  {
    icon: ListChecks,
    title: "Complete Handoff",
    description:
      "Delivered MIT-licensed codebase, 40-page product wiki, hand-off deck, and public roadmap for continued development.",
  },
];

const tabs = [
  { label: "My Role", path: "/ootie-my-role" },
  { label: "Opportunities", path: "/ootie-opportunities" },
  { label: "Approach", path: "/ootie-approach" },
  { label: "Outcomes", path: "/ootie-outcomes" },
  { label: "Outputs", path: "/ootie-outputs" },
];

export default function OutcomesSection() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside
        className="fixed left-0 top-0 h-screen flex items-center z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav
          className={`flex flex-col gap-3 p-4 bg-black/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-lg ml-6 transition-all duration-200 ${
            isHovered ? "py-5" : ""
          }`}
        >
          <button
            onClick={() => navigate("/apps")}
            className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden ${
              isHovered ? "w-auto pr-4" : "w-12"
            }`}
          >
            <ArrowLeft className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isHovered ? "scale-110" : ""}`} />
            <span
              className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0 w-0"
              }`}
            >
              Back
            </span>
          </button>
        </nav>
      </aside>

      <main className="flex-1 ml-12">
        {/* TRANSPARENT / LIQUID-GLASS HEADER */}
        <div className="sticky top-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className={`px-6 py-3 text-sm backdrop-blur-md transition-all duration-300 font-medium border-b-2 ${
                    tab.path === "/ootie-outcomes"
                      ? "text-white border-white rounded-full"
                      : "text-gray-400 border-transparent hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content – scrolls under glass header */}
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
