import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ootieImage from "@/assets/project-ootie.jpg";

const skillTags = [
  "PRODUCT DESIGN",
  "FULL-STACK DEV",
  "REACT NATIVE",
  "USER RESEARCH",
  "MVP STRATEGY",
  "SUPABASE",
  "EXPO",
];

const tabs = [
  { label: "My Role", path: "/ootie-my-role" },
  { label: "Opportunities", path: "/ootie-opportunities" },
  { label: "Approach", path: "/ootie-approach" },
  { label: "Outcomes", path: "/ootie-outcomes" },
  { label: "Outputs", path: "/ootie-outputs" },
];

export default function MyRoleSection() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-black to-black flex">
      {/* Standalone Sidebar */}
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
        {/* Standalone Tab Navigation */}
        <div className="sticky top-0 z-40 backdrop-blur-2xl bg-transparent border-b border-white/10 shadow-2xl">
          <div className="max-w-6xl mx-auto px-6 py-6 border-l-0 border-r-0">
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className={`rounded-full px-6 py-3 text-sm backdrop-blur-md transition-all duration-300 font-medium ${
                    tab.path === "/ootie-my-role"
                      ? "bg-white text-black shadow-lg scale-105"
                      : "bg-white/10 text-white/80 hover:text-white hover:bg-white/20"
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
            {/* Main Heading Section */}
            <div className="mb-16 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                Built to Support
                <br />
                Every Step of
                <br />
                Pet Parenthood.
              </h1>
              <div className="w-24 h-1 bg-white/50 mb-4"></div>
              <h2 className="text-xl md:text-2xl font-light text-white/90 tracking-wide">
                Ootie | Founder and Developer
              </h2>
            </div>

            {/* My Role Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white">My Role</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  I was the solo full-stack engineer & product designer hired to
                  ship Ootie from zero to MVP in 10 weeks, targeting pet owners
                  in Ghana and the broader African market.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  My focus was on creating a seamless experience that merges
                  pet care management, social networking, and local marketplace
                  into one cohesive product. I led user research, UX design,
                  React-Native development, and Supabase backend architecture.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={ootieImage}
                    alt="Ootie App"
                    className="w-64 md:w-80 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
