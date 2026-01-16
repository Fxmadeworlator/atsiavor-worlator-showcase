import { NavLink } from "./NavLink";
import { Briefcase, Smartphone, Sparkles } from "lucide-react";
import { useState } from "react";

const ProjectsSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    { icon: Briefcase, label: "Experience", path: "/experience" },
    { icon: Smartphone, label: "Apps", path: "/apps" },
    { icon: Sparkles, label: "Pet Projects", path: "/pet-projects" },
  ];

  return (
    <aside
      className="fixed left-0 top-0 h-screen flex items-center z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav
        className={`flex flex-col gap-3 p-4 bg-nav-bg/80 backdrop-blur-sm rounded-3xl border border-border shadow-lg ml-6 transition-all duration-200 ${
          isHovered ? "py-5" : ""
        }`}
      >
        {categories.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden ${
                isHovered ? "w-auto pr-4" : "w-12"
              }`}
              activeClassName="!text-nav-item-active !bg-secondary font-medium"
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
      </nav>
    </aside>
  );
};

export default ProjectsSidebar;
