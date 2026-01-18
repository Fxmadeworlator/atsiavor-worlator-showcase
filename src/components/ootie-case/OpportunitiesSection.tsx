import { useState } from "react";
import { ArrowLeft, Flag, TrendingUp, ArrowUp, Users, Heart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tabs = [
  { label: "My Role", path: "/ootie-my-role" },
  { label: "Opportunities", path: "/ootie-opportunities" },
  { label: "Approach", path: "/ootie-approach" },
  { label: "Outcomes", path: "/ootie-outcomes" },
  { label: "Outputs", path: "/ootie-outputs" },
];

// 6 items → 2 rows, 3 cols
const opportunities = [
  { icon: Flag,  title: "Unified Experience",   description: "How might we merge pet care logging, social networking, and marketplace into one seamless product?" },
  { icon: TrendingUp, title: "Increase Retention", description: "How might we reduce friction at critical drop-off moments in the pet owner journey?" },
  { icon: ArrowUp, title: "Drive Adoption", description: "How might we make pet owners feel the immediate value of consistent care logging?" },
  { icon: Users, title: "Family Sharing", description: "How might we enable families to collaborate on pet care without confusion?" },
  { icon: Heart, title: "Emotional Connection", description: "How might we help owners celebrate and share their pet's milestones?" },
  { icon: MapPin, title: "Local Discovery", description: "How might we connect pet owners with nearby services, vets, and pet-friendly places?" },
];

export default function OpportunitiesSection() {
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
          className={`flex flex-col gap-3 p-4 bg-black/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg ml-6 transition-all duration-200 ${
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
        {/* Header */}
        <div className="sticky top-0 z-40 backdrop-blur-2xl bg-transparent border-b border-white/10 shadow-2xl">
          <div className="max-w-6xl mx-auto px-6 py-6 border-l-0 border-r-0">
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className={`px-6 py-3 text-sm backdrop-blur-md transition-all duration-300 font-medium border-b-2 ${
                    tab.path === "/ootie-opportunities"
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

        {/* Opportunities */}
        <section className="min-h-[calc(100vh-80px)] py-20 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Opportunities</h2>

            {/* CSS masonry-style grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
              {/* Row 1 */}
              <div className="md:col-span-7 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
                <Flag className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[0].title}</h3>
                <p className="text-gray-300">{opportunities[0].description}</p>
              </div>

              <div className="md:col-span-3 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
                <TrendingUp className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[1].title}</h3>
                <p className="text-gray-300 text-sm">{opportunities[1].description}</p>
              </div>

              <div className="md:col-span-2 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
                <ArrowUp className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[2].title}</h3>
                <p className="text-gray-300 text-sm">{opportunities[2].description}</p>
              </div>

              {/* Row 2 */}
              <div className="md:col-span-3 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
                <Users className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[3].title}</h3>
                <p className="text-gray-300 text-sm">{opportunities[3].description}</p>
              </div>

              <div className="md:col-span-5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
                <Heart className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[4].title}</h3>
                <p className="text-gray-300">{opportunities[4].description}</p>
              </div>

              <div className="md:col-span-4 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
                <MapPin className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[5].title}</h3>
                <p className="text-gray-300">{opportunities[5].description}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
