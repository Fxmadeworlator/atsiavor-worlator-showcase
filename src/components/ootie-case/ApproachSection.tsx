import { useState } from "react";
import { ArrowLeft, Flag, Users, DollarSign, PawPrint, Heart, MapPin, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const approaches = [
  {
    icon: Flag,
    title: "Sprint-Based Delivery",
    description: "Weekly design sprint Monday; build Tue–Fri; TestFlight drop Saturday. Continuous iteration with real user feedback shipped same week.",
  },
  {
    icon: Users,
    title: "User-Centered Research",
    description: "Continuous user interviews with pet owners in Ghana. Feedback tagged in Linear and prioritized based on impact and feasibility.",
  },
  {
    icon: DollarSign,
    title: "Lean Tech Stack",
    description: "React-Native + Expo, Supabase, Tailwind—optimised for speed, not novelty. Every tool chosen for rapid iteration capability.",
  },
];

const features = [
  { icon: PawPrint, title: "Pet Care Logs", description: "Track vaccinations, medications, and health records" },
  { icon: Users, title: "Family Sharing", description: "Collaborate on pet care with household members" },
  { icon: Heart, title: "Social Feed", description: "Share moments and connect with pet community" },
  { icon: MapPin, title: "Discovery Map", description: "Find pet services, vets, and pet-friendly spots" },
  { icon: ShoppingBag, title: "Marketplace", description: "Buy and sell pet products locally" },
];

const tabs = [
  { label: "My Role", path: "/ootie-my-role" },
  { label: "Opportunities", path: "/ootie-opportunities" },
  { label: "Approach", path: "/ootie-approach" },
  { label: "Outcomes", path: "/ootie-outcomes" },
  { label: "Outputs", path: "/ootie-outputs" },
];

export default function ApproachSection() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex">
      {/* Standalone Sidebar */}
      <aside
        className="fixed left-0 top-0 h-screen flex items-center z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav
          className={`flex flex-col gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-3xl border border-black/20 shadow-lg ml-6 transition-all duration-200 ${
            isHovered ? "py-5" : ""
          }`}
        >
          <button
            onClick={() => navigate("/apps")}
            className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-black/70 hover:text-black bg-black/10 hover:bg-black/20 transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden ${
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
        {/* Header identical to Opportunities page */}
        <div className="sticky top-0 z-40 backdrop-blur-2xl bg-transparent border-b border-black/10 shadow-2xl">
          <div className="max-w-6xl mx-auto px-6 py-6 border-l-0 border-r-0">
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className={`px-6 py-3 text-sm backdrop-blur-md transition-all duration-300 font-medium border-b-2 ${
                    tab.path === "/ootie-approach"
                      ? "text-black border-black rounded-full"
                      : "text-gray-400 border-transparent hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="min-h-[calc(100vh-80px)] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">Approach</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {approaches.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-black/20 backdrop-blur-sm"
                >
                  <item.icon className="w-8 h-8 text-black mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-black">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-8 text-black">Core Features Built</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl text-center backdrop-blur-sm border border-black/20"
                >
                  <feature.icon className="w-8 h-8 text-black mx-auto mb-3" />
                  <h4 className="font-medium text-sm mb-1 text-black">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
