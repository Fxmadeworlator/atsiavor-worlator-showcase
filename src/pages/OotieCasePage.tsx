import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
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

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Tool Stack", path: "/toolstack" },
  { label: "Contact", path: "/contact" },
];

const projectLinks = [
  { label: "Experience", path: "/experience" },
  { label: "Apps", path: "/apps" },
  { label: "Pet Projects", path: "/pet-projects" },
];

export default function OotieCasePage() {
  const [activeSection, setActiveSection] = useState("#my-role");
  const [showTopNav, setShowTopNav] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hide top nav on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when at top or scrolling up
      if (currentScrollY < 100) {
        setShowTopNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowTopNav(false);
        setProjectsOpen(false);
      } else {
        setShowTopNav(true);
      }
      
      lastScrollY.current = currentScrollY;

      // Scroll spy for tabs
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        {/* Main Site Navigation - hides on scroll */}
        <nav 
          className={`max-w-6xl mx-auto px-6 overflow-hidden transition-all duration-300 ${
            showTopNav ? "py-4 max-h-20 opacity-100" : "py-0 max-h-0 opacity-0"
          }`}
        >
          <div className="flex justify-center items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                Projects
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`} />
              </button>

              {projectsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl min-w-[160px] z-50">
                  {projectLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setProjectsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Case Study Section Navigation */}
        <div className={`border-t border-white/10 ${!showTopNav ? "border-t-0" : ""}`}>
          <div className="max-w-6xl mx-auto px-6 py-3">
            <div className="flex justify-center gap-2 flex-wrap">
              {tabs.map((tab) => {
                const active = activeSection === tab.anchor;
                return (
                  <button
                    key={tab.anchor}
                    onClick={() => scrollToSection(tab.anchor)}
                    className={`px-6 py-2.5 text-sm rounded-full transition-all duration-300 font-medium border-b-2 ${
                      active
                        ? "text-white border-white bg-white/10 backdrop-blur-md"
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
      </header>

      {/* All sections scroll vertically */}
      <main className="divide-y divide-white/10">
        <MyRoleSection />
        <OpportunitiesSection />
        <ApproachSection />
        <OutcomesSection />
        <OutputsSection />
      </main>
    </div>
  );
}
