import ProjectsSidebar from "@/components/ProjectsSidebar";
import MobileNav from "@/components/MobileNav";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import ootiePhones from "@/assets/ootie-phones.png";
import productHeroImage from "@/assets/product-appsP.png";

export default function Apps() {
  const navigate = useNavigate();
  const phoneRef = useRef<HTMLDivElement>(null);
  const [heroImageError, setHeroImageError] = useState(false);
  const [phoneImageError, setPhoneImageError] = useState(false);
  const [phonesAnimated, setPhonesAnimated] = useState(false);

  const scrollToPhone = () => {
    phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
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

            {/* View Case Story Button */}
            <button
              onClick={() => navigate("/ootie-case")}
              className="px-8 py-4 text-lg font-medium rounded-full bg-background/30 backdrop-blur-xl border border-foreground/10 text-foreground hover:bg-background/50 hover:border-foreground/20 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
            >
              View Case Story
            </button>

            {/* Down Arrow */}
            <button
              onClick={scrollToPhone}
              className="p-2 text-muted-foreground hover:text-foreground hover:scale-125 transition-all duration-200"
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
                    style={{ maxHeight: "60vh", background: "transparent" }}
                    onError={() => setPhoneImageError(true)}
                    onLoad={() => {
                      // Trigger animation shortly after image loads
                      setTimeout(() => setPhonesAnimated(true), 100);
                    }}
                  />
                  {/* Subtle floating effect before settling */}
                  <style>{`
                    @keyframes phone-float {
                      0%, 100% { transform: translateY(0px) rotate(0deg); }
                      50% { transform: translateY(-8px) rotate(0.5deg); }
                    }
                  `}</style>
                </div>
              ) : (
                <div 
                  className="flex items-center justify-center text-muted-foreground"
                  style={{ height: "60vh", width: "100%" }}
                >
                  <span className="text-lg">Ootie App</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}