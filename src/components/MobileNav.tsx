import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Briefcase, Smartphone, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/experience" },
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
  const location = useLocation();

  const isProjectPage = ["/experience", "/apps", "/pet-projects"].includes(location.pathname);

  return (
    <div className="lg:hidden fixed top-6 right-6 z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
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
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navigation Panel */}
      <nav
        className={`absolute top-16 right-0 min-w-[200px] p-4 rounded-2xl bg-background/20 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${
          open 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path === "/experience" && isProjectPage);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
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

        {/* Project Sub-menu */}
        {isProjectPage && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="px-4 py-1 text-xs font-medium text-foreground/50 uppercase tracking-wider">
              Categories
            </p>
            <div className="flex flex-col gap-1 mt-1">
              {projectLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
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
          </div>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
