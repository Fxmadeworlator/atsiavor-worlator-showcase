import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import SideProjectsSection from "@/components/SideProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <WorkSection />
        <SideProjectsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default Index;
