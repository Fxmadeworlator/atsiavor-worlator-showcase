import { NavLink } from "./NavLink";
import { Home, User, Briefcase, Wrench, BookOpen, ShoppingBag, Music, Gamepad2, Mail } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: Briefcase, label: "Projects", path: "/projects" },
    { icon: Wrench, label: "Toolstack", path: "/toolstack" },
    { icon: BookOpen, label: "Blogs", path: "/blogs" },
    { icon: ShoppingBag, label: "Shop", path: "/shop" },
    { icon: Music, label: "Songs", path: "/songs" },
    { icon: Gamepad2, label: "Playground", path: "/playground" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-nav-bg border-r border-border p-8 flex flex-col gap-2">
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
    </aside>
  );
};

export default Sidebar;
