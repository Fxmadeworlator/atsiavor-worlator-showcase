import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function GlobalHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const mainTabs = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Apps", path: "/apps" },
    { label: "Contact", path: "/contact" },
  ];

  const insideOotie = location.pathname.startsWith("/ootie-case");

  const ootieTabs = [
    { label: "My Role", path: "/ootie-case" },
    { label: "Opportunities", path: "/ootie-case#opportunities" },
    { label: "Approach", path: "/ootie-case#approach" },
    { label: "Outcomes", path: "/ootie-case#outcomes" },
    { label: "Outputs", path: "/ootie-case#outputs" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex items-center gap-2 px-3 py-2 rounded-2xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out ${
            isHovered ? "pr-4" : "w-10"
          } overflow-hidden`}
        >
          <ArrowLeft className={`w-5 h-5 flex-shrink-0 ${isHovered ? "scale-110" : ""}`} />
          <span className={`whitespace-nowrap ${isHovered ? "opacity-100" : "opacity-0 w-0"}`}>
            Back
          </span>
        </button>

        <nav className="flex gap-2 flex-wrap">
          {(insideOotie ? ootieTabs : mainTabs).map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 font-medium border-b-2 ${
                (insideOotie
                  ? location.hash === tab.path.split("#")[1] || (!location.hash && tab.path.endsWith("my-role"))
                  : location.pathname === tab.path)
                  ? "text-white border-white rounded-full"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        <div className="w-10" />
      </div>
    </div>
  );
}
