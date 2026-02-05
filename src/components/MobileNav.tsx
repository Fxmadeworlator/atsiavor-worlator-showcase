import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Briefcase, Smartphone, Sparkles, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/experience", hasSubmenu: true },
  { label: "Tool Stack", path: "/toolstack" },
  { label: "Contact", path: "/contact" },
];

const projectLinks = [
  { label: "Experience", path: "/experience", icon: Briefcase },
  { label: "Apps", path: "/apps", icon: Smartphone },
  { label: "Pet Projects", path: "/pet-projects", icon: Sparkles },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [showProjectsSub, setShowProjectsSub] = useState(false);
  const location = useLocation();

  const isProjectPage = ["/experience", "/apps", "/pet-projects"].includes(location.pathname);

  // Auto-show submenu when on project pages
  const projectsSubVisible = showProjectsSub || (open && isProjectPage);

  return (
    <div className="lg:hidden fixed top-6 right-6 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => {
          setOpen(!open);
          if (open) setShowProjectsSub(false);
        }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-background/60 backdrop-blur-xl border border-border/50 shadow-lg hover:bg-background/80 transition-all duration-300"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 animate-fade-in"
          onClick={() => {
            setOpen(false);
            setShowProjectsSub(false);
          }}
        />
      )}

      {/* Navigation Panels Container */}
      <div
        className={`absolute top-16 right-0 flex flex-row-reverse items-center gap-2 transition-all duration-300 ${
          open 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Main Navigation Panel */}
        <nav className="min-w-[180px] p-3 rounded-2xl bg-background/20 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                (link.hasSubmenu && isProjectPage);
              
              if (link.hasSubmenu) {
                return (
                  <button
                    key={link.path}
                    onClick={() => setShowProjectsSub(!showProjectsSub)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/15 text-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${projectsSubVisible ? "rotate-180" : ""}`} />
                  </button>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setOpen(false);
                    setShowProjectsSub(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/15 text-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Project Sub-menu Panel */}
        <nav
          className={`p-2 rounded-xl bg-background/20 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${
            projectsSubVisible
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-0.5">
            {projectLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setOpen(false);
                    setShowProjectsSub(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white/15 text-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
