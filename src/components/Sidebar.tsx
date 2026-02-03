import { NavLink } from "./NavLink";
import { Home, User, Briefcase, Mail, Wrench } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isProjectsRoute = ["/projects", "/experience", "/apps", "/pet-projects"].includes(location.pathname);

  const topItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: Briefcase, label: "Projects", path: "/experience", isProjects: true },
  ];

  const expandedItems = [
    { icon: Wrench, label: "Tool Stack", path: "/toolstack" },
  ];

  const bottomItems = [
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  const handleProjectsClick = () => {
    navigate("/experience");
  };

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
        {/* TOP ITEMS – always visible */}
        {topItems.map((item) => {
          const Icon = item.icon;
          
          if (item.isProjects) {
            return (
              <button
                key={item.path}
                onClick={handleProjectsClick}
                className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden ${
                  isHovered ? "w-auto pr-4" : "w-12"
                } ${isProjectsRoute ? "!text-nav-item-active !bg-secondary font-medium" : ""}`}
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

        {/* EXPANDED ITEMS – only visible when hovered */}
        <div
          className={`overflow-hidden transition-[max-height] duration-200 ease-out ${
            isHovered ? "max-h-96" : "max-h-0"
          }`}
        >
          {expandedItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden mt-3 ${
                  isHovered ? "w-auto pr-4" : "w-12"
                }`}
                activeClassName="!text-nav-item-active !bg-secondary font-medium"
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

        {/* BOTTOM ITEMS – always visible (Contact) */}
        {bottomItems.map((item) => {
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

export default Sidebar;
