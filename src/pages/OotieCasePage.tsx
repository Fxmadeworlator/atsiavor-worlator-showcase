import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  { label: "Projects", path: "/experience" },
  { label: "Tool Stack", path: "/toolstack" },
  { label: "Contact", path: "/contact" },
];

export default function OotieCasePage() {
  const [activeSection, setActiveSection] = useState("#my-role");
  const location = useLocation();

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
    <div className="min-h-screen bg-black">
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        {/* Main Site Navigation */}
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center gap-8">
            {navLinks.map((link) => (
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
        <div className="border-t border-white/10">
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
