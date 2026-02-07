import ProjectsSidebar from "@/components/ProjectsSidebar";
import MobileNav from "@/components/MobileNav";
import { ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ootiePhones from "@/assets/ootie-phones.png";
import productHeroImage from "@/assets/product-appsP.png";
import ootieLogo from "@/assets/ootie-logo.png";

export default function Apps() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [heroImageError, setHeroImageError] = useState(false);
  const [phoneImageError, setPhoneImageError] = useState(false);
  const [phonesAnimated, setPhonesAnimated] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  // Auto-hide arrow after 2 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(false);
    }, 2000);

    const handleActivity = () => {
      setShowArrow(true);
      clearTimeout(timer);
    };

    window.addEventListener("scroll", handleActivity);
    window.addEventListener("mousemove", handleActivity);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("mousemove", handleActivity);
    };
  }, [showArrow]);

  const scrollToPhone = () => {
    phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    // Trigger the animation when scrolling to phones
    setTimeout(() => setPhonesAnimated(true), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <ProjectsSidebar />
      <MobileNav />

      <main className="min-h-screen flex flex-col px-8 lg:ml-12">
        <div className="pt-8 pb-4">
          <h1 className="text-4xl font-bold">/apps</h1>
          <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
        </div>

        <div className="flex-1 flex flex-col py-8">
          <div className="max-w-6xl mx-auto w-full mb-8">
            <p className="text-4xl font-bold leading-tight">
              <span className="text-muted-foreground">From utility to play: </span>
              <span className="text-foreground">apps that matter </span>
              <span className="text-muted-foreground">to users.</span>
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {/* Hero Product Image */}
            <div className="relative">
              {!heroImageError ? (
                <img
                  src={productHeroImage}
                  alt="App Preview"
                  className="max-w-full h-auto mix-blend-multiply dark:mix-blend-screen dark:opacity-90"
                  style={{ maxHeight: "75vh", background: "transparent" }}
                  onError={() => setHeroImageError(true)}
                />
              ) : (
                <div 
                  className="flex items-center justify-center text-muted-foreground"
                  style={{ height: "75vh", width: "100%" }}
                >
                  <span className="text-lg">App Preview</span>
                </div>
              )}
            </div>



            {/* Down Arrow */}
            <button
              onClick={scrollToPhone}
              className={`p-2 text-muted-foreground hover:text-foreground hover:scale-125 transition-all duration-500 ${
                showArrow ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll to phone image"
            >
              <ChevronDown className="w-8 h-8" />
            </button>

            {/* Phone Image */}
            <div ref={phoneRef} className="relative overflow-visible">
              {!phoneImageError ? (
                <div className="relative">
                  <img
                    src={ootiePhones}
                    alt="Ootie App Screenshots"
                    className={`max-w-full h-auto transition-all duration-1000 ease-out ${
                      phonesAnimated 
                        ? "opacity-100 translate-y-0 rotate-0 scale-100" 
                        : "opacity-0 translate-y-8 rotate-2 scale-95"
                    }`}
                    style={{ maxHeight: "70vh", background: "transparent" }}
                    onError={() => setPhoneImageError(true)}
                    onLoad={() => {
                      // Trigger animation shortly after image loads
                      setTimeout(() => setPhonesAnimated(true), 100);
                    }}
                  />
                </div>
              ) : (
                <div 
                  className="flex items-center justify-center text-muted-foreground"
                  style={{ height: "70vh", width: "100%" }}
                >
                  <span className="text-lg">Ootie App</span>
                </div>
              )}
            </div>

            {/* Ootie Logo - overlapping with phones */}
            <div className="flex justify-center -mt-16 md:-mt-24 lg:-mt-32 relative z-10">
              {!logoError ? (
                <img
                  src={ootieLogo}
                  alt="Ootie Logo"
                  className="h-32 md:h-40 lg:h-48 w-auto object-contain drop-shadow-2xl"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-5xl md:text-6xl font-bold text-primary">Ootie</span>
              )}
            </div>

            {/* Role Summary Section */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mt-2 mb-16 px-4">
              <h3 className="text-xl md:text-2xl font-light text-muted-foreground mb-4">
                Founder & Full-Stack Developer
              </h3>
              <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-6">
                I designed and built Ootie from zero to MVP in 10 weeks, creating an all-in-one pet management, social, and marketplace platform for pet owners worldwide.
              </p>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["PRODUCT DESIGN", "REACT NATIVE", "SUPABASE", "USER RESEARCH", "MVP STRATEGY"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs font-medium rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Site Button */}
              <a
                href="https://ootie.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-medium rounded-full bg-background/30 backdrop-blur-xl border border-foreground/10 text-foreground hover:bg-background/50 hover:border-foreground/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}