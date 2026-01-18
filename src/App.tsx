// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Apps from "./pages/Apps";
import PetProjects from "./pages/PetProjects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Toolstack from "./pages/Toolstack";
import Verified from "./pages/Verified";
import OotieCasePage from "./pages/OotieCasePage";

const queryClient = new QueryClient();

/* ----------  LIQUID-GLASS HEADER  ---------- */
function GlobalHeader() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  /* main nav tabs */
  const mainTabs = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Apps", path: "/apps" },
    { label: "Contact", path: "/contact" },
  ];

  /* Ootie sub-tabs (only show when inside /ootie-case or its legacy redirects) */
  const ootieTabs = [
    { label: "My Role", path: "/ootie-case" },
    { label: "Opportunities", path: "/ootie-case#opportunities" },
    { label: "Approach", path: "/ootie-case#approach" },
    { label: "Outcomes", path: "/ootie-case#outcomes" },
    { label: "Outputs", path: "/ootie-case#outputs" },
  ];

  const insideOotie = location.pathname.startsWith("/ootie-case");

  return (
    <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Back button (works like the previous sidebar arrow) */}
        <button
          onClick={() => navigate(-1)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex items-center gap-2 px-3 py-2 rounded-2xl text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200 ease-out ${
            isHovered ? "pr-4" : "w-10"
          } overflow-hidden`}
        >
          <ArrowLeft className={`w-5 h-5 flex-shrink-0 ${isHovered ? "scale-110" : ""}`} />
          <span className={`whitespace-nowrap ${isHovered ? "opacity-100" : "opacity-0 w-0"}`}>
            Back
          </span>
        </button>

        {/* Tabs */}
        <nav className="flex gap-2 flex-wrap">
          {(insideOotie ? ootieTabs : mainTabs).map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 font-medium border-b-2 ${
                (insideOotie
                  ? location.hash === tab.path.split("#")[1] || (!location.hash && tab.path.endsWith("my-role"))
                  : location.pathname === tab.path)
                  ? "text-white border-white rounded-full"
                  : "text-gray-400 border-transparent hover:text-white"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {/* spacer to keep back button area balanced */}
        <div className="w-10" />
      </div>
    </div>
  );
}
/* ------------------------------------------- */

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GlobalHeader /> {/* <-- liquid-glass header */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/pet-projects" element={<PetProjects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/toolstack" element={<Toolstack />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/ootie-case" element={<OotieCasePage />} />
          <Route path="/ootie-case-story" element={<Navigate to="/ootie-case" replace />} />
          <Route path="/ootie-my-role" element={<Navigate to="/ootie-case" replace />} />
          <Route path="/ootie-opportunities" element={<Navigate to="/ootie-case#opportunities" replace />} />
          <Route path="/ootie-approach" element={<Navigate to="/ootie-case#approach" replace />} />
          <Route path="/ootie-outcomes" element={<Navigate to="/ootie-case#outcomes" replace />} />
          <Route path="/ootie-outputs" element={<Navigate to="/ootie-case#outputs" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
