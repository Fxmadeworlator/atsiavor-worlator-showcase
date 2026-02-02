import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
