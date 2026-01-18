import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ootieImage from "@/assets/project-ootie.jpg";

const tabs = [
  { label: "My Role", path: "/ootie-my-role" },
  { label: "Opportunities", path: "/ootie-opportunities" },
  { label: "Approach", path: "/ootie-approach" },
  { label: "Outcomes", path: "/ootie-outcomes" },
  { label: "Outputs", path: "/ootie-outputs" },
];

export default function OutputsSection() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black flex">
      {/* =====  SIDEBAR  ===== */}
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

      {/* =====  LOCAL TRANSPARENT HEADER  ===== */}
      <main className="flex-1 ml-12">
        <div className="sticky top-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className={`px-6 py-3 text-sm backdrop-blur-md transition-all duration-300 font-medium border-b-2 ${
                    tab.path === "/ootie-outputs"
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

        {/* =====  PAGE CONTENT  ===== */}
        <section className="min-h-[calc(100vh-80px)] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Glimpse of Outputs</h2>

            {/* phone stack */}
            <div
              className="rounded-3xl p-8 md:p-12 mb-12 border border-white/10"
              style={{ backgroundColor: "#181818" }}
            >
              <div className="flex justify-center items-end gap-4 md:gap-8">
                <img
                  src={ootieImage}
                  alt="Ootie App Screen 1"
                  className="w-32 md:w-48 lg:w-56 rounded-2xl shadow-xl transform -rotate-6"
                />
                <img
                  src={ootieImage}
                  alt="Ootie App Screen 2"
                  className="w-40 md:w-56 lg:w-64 rounded-2xl shadow-2xl z-10"
                />
                <img
                  src={ootieImage}
                  alt="Ootie App Screen 3"
                  className="w-32 md:w-48 lg:w-56 rounded-2xl shadow-xl transform rotate-6"
                />
              </div>
            </div>

            {/* cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { emoji: "📦", title: "MIT-Licensed Codebase", desc: "Complete React-Native repo with documentation" },
                { emoji: "📚", title: "40-Page Product Wiki", desc: "Comprehensive hand-off documentation" },
                { emoji: "🗺️", title: "Public Roadmap", desc: "Feature-request board for community input" },
              ].map((c) => (
                <div
                  key={c.title}
                  className="p-6 rounded-xl border border-white/20 text-center backdrop-blur-sm"
                  style={{ backgroundColor: "#181818" }}
                >
                  <p className="text-4xl mb-3">{c.emoji}</p>
                  <h4 className="font-semibold mb-2 text-white">{c.title}</h4>
                  <p className="text-sm text-gray-400">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button size="lg" className="gap-2 bg-white text-black hover:bg-white/90" asChild>
                <a href="https://ootie-web.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Landing Page
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
