import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackSidebarProps {
  to?: string;
}

const BackSidebar = ({ to = "/projects" }: BackSidebarProps) => {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen items-center z-50">
      <nav className="flex flex-col gap-3 p-4 bg-nav-bg/80 backdrop-blur-sm rounded-3xl border border-border shadow-lg ml-6">
        <button
          onClick={() => navigate(to)}
          className="flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 w-12"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 flex-shrink-0" />
        </button>
      </nav>
    </aside>
  );
};

export default BackSidebar;
