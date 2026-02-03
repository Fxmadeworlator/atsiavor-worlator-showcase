import { NavLink } from "./NavLink";
import { ArrowLeft, Briefcase, Smartphone, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectsSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { label: "Experience", path: "/experience", icon: Briefcase },
    { label: "Apps", path: "/apps", icon: Smartphone },
    { label: "Pet Projects", path: "/pet-projects", icon: Sparkles },
  ];

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-0 h-screen items-center z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav
        className={`flex flex-col gap-3 p-4 bg-nav-bg/80 backdrop-blur-sm rounded-3xl border border-border shadow-lg ml-6 transition-all duration-200 ${
          isHovered ? "py-5" : ""
        }`}
      >
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden ${
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

        {/* Category links */}
        {categories.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden ${
              isHovered ? "w-auto pr-4" : "w-12"
            }`}
            activeClassName="!text-nav-item-active !bg-secondary font-medium"
          >
            <item.icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isHovered ? "scale-110" : ""}`} />
            <span
              className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0 w-0"
              }`}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default ProjectsSidebar;
