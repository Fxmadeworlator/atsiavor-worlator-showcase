import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import SideProjectsSection from "@/components/SideProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <SideProjectsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
    </div>
  );
};

export default Index;
