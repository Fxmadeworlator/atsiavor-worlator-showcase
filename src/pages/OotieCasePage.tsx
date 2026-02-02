import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Home, User, Briefcase, Mail, Wrench, TrendingUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import MyRoleSection from "@/components/ootie-case/MyRoleSection";
import OpportunitiesSection from "@/components/ootie-case/OpportunitiesSection";
import ApproachSection from "@/components/ootie-case/ApproachSection";
import OutcomesSection from "@/components/ootie-case/OutcomesSection";
import OutputsSection from "@/components/ootie-case/OutputsSection";

const tabs = [
  { label: "My Role", anchor: "#my-role" },
  { label: "Opportunities", anchor: "#opportunities" },
  { label: "Approach", anchor: "#approach" },
  { label: "Outcomes", anchor: "#outcomes" },
  { label: "Outputs", anchor: "#outputs" },
];

const core = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "About", path: "/about" },
  { icon: Briefcase, label: "Projects", path: "/experience", isProjects: true },
  { icon: Mail, label: "Contact", path: "/contact" },
];

const extra = [
  { icon: Wrench, label: "Tool Stack", path: "/toolstack" },
];

export default function OotieCasePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("#my-role");
  const navigate = useNavigate();
  const location = useLocation();

  const isProjectsRoute = ["/projects", "/experience", "/apps", "/pet-projects", "/ootie-case"].includes(location.pathname);

  const handleProjectsClick = () => {
    navigate("/experience");
  };

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll spy to highlight active tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => ({
        anchor: tab.anchor,
        element: document.querySelector(tab.anchor)
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.anchor);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Main Sidebar */}
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
          {/* CORE – always visible icons */}
          {core.map((item) => {
            const Icon = item.icon;
            
            if (item.isProjects) {
              return (
                <button
                  key={item.path}
                  onClick={handleProjectsClick}
                  className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden ${
                    isHovered ? "w-auto pr-4" : "w-12"
                  } ${isProjectsRoute ? "!text-white !bg-white/20 font-medium" : ""}`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isHovered ? "scale-110" : ""}`} />
                  <span
                    className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${
                      isHovered ? "opacity-100" : "opacity-0 w-0"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden ${
                  isHovered ? "w-auto pr-4" : "w-12"
                }`}
                activeClassName="!text-white !bg-white/20 font-medium"
              >
                <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isHovered ? "scale-110" : ""}`} />
                <span
                  className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${
                    isHovered ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            );
          })}

          {/* COLLAPSIBLE SECTION */}
          <div
            className={`overflow-hidden transition-[max-height] duration-200 ease-out ${
              isHovered ? "max-h-96" : "max-h-0"
            }`}
          >
            {extra.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden mt-3 ${
                    isHovered ? "w-auto pr-4" : "w-12"
                  }`}
                  activeClassName="!text-white !bg-white/20 font-medium"
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isHovered ? "scale-110" : ""}`} />
                  <span
                    className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </nav>
      </aside>

      <main className="flex-1 ml-12">
        {/* Liquid-Glass Header with Rounded Buttons */}
        <div className="sticky top-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => {
                const active = activeSection === tab.anchor;
                return (
                  <button
                    key={tab.anchor}
                    onClick={() => scrollToSection(tab.anchor)}
                    className={`px-6 py-3 text-sm rounded-full transition-all duration-300 font-medium border-b-2 ${
                      active
                        ? "text-white border-white bg-black/20 backdrop-blur-md"
                        : "text-gray-400 border-transparent hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* All sections scroll vertically */}
        <div className="divide-y divide-white/10">
          <MyRoleSection />
          <OpportunitiesSection />
          <ApproachSection />
          <OutcomesSection />
          <OutputsSection />
        </div>
      </main>
    </div>
  );
}
