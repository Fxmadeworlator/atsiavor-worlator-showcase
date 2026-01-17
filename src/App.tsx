import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import OotieMyRole from "./pages/ootie/OotieMyRole";
import OotieOpportunities from "./pages/ootie/OotieOpportunities";
import OotieApproach from "./pages/ootie/OotieApproach";
import OotieOutcomes from "./pages/ootie/OotieOutcomes";
import OotieOutputs from "./pages/ootie/OotieOutputs";

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
          {/* Ootie Case Study Pages */}
          <Route path="/ootie-case-story" element={<OotieMyRole />} />
          <Route path="/ootie-opportunities" element={<OotieOpportunities />} />
          <Route path="/ootie-approach" element={<OotieApproach />} />
          <Route path="/ootie-outcomes" element={<OotieOutcomes />} />
          <Route path="/ootie-outputs" element={<OotieOutputs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
