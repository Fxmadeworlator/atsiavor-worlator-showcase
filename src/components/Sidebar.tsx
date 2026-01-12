// src/components/Sidebar.tsx
import { NavLink } from "./NavLink";
import { Home, User, Briefcase, Mail, Wrench, TrendingUp } from "lucide-react";

const Sidebar = () => {
  const core = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: Briefcase, label: "Projects", path: "/projects" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  const extra = [
    { icon: Wrench, label: "Tool Stack", path: "/toolstack" },
    { icon: TrendingUp, label: "Trading", path: "/trading" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen flex items-center z-50 group">
      <nav className="flex flex-col gap-3 p-4 bg-nav-bg/80 backdrop-blur-sm rounded-3xl border border-border shadow-lg ml-6 transition-all duration-300 group-hover:py-5">
        {/* CORE – always visible icons */}
        {core.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden w-12 group-hover:w-auto group-hover:pr-4"
              activeClassName="!text-nav-item-active !bg-secondary font-medium"
            >
              <Icon className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.label}
              </span>
            </NavLink>
          );
        })}

        {/* COLLAPSIBLE SECTION */}
        <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-[max-height] duration-300 ease-in-out">
          {extra.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="relative flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden w-12 group-hover:w-auto group-hover:pr-4 mt-3"
                activeClassName="!text-nav-item-active !bg-secondary font-medium"
              >
                <Icon className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
