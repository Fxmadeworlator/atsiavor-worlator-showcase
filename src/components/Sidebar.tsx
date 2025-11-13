import { NavLink } from "./NavLink";
import { Home, User, Briefcase, Mail } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: Briefcase, label: "Projects", path: "/projects" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen flex items-center justify-center z-50">
      <nav className="flex flex-col gap-3 p-4 bg-nav-bg/80 backdrop-blur-sm rounded-3xl border border-border shadow-lg ml-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="group relative flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 overflow-hidden w-12 hover:w-auto hover:pr-4"
              activeClassName="!text-nav-item-active !bg-secondary font-medium"
            >
              <Icon className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 max-w-0 group-hover:max-w-xs">
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
