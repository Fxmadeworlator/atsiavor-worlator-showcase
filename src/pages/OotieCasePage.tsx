import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  const [showTopNav, setShowTopNav] = useState(true);
  const lastScrollY = useRef(0);

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
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
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
