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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-nav-bg flex items-center justify-center">
      <nav className="flex flex-col gap-2 w-full px-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-nav-item hover:text-nav-item-hover hover:bg-secondary transition-all duration-200"
              activeClassName="!text-nav-item-active bg-secondary font-medium"
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
