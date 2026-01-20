import ProjectsSidebar from "@/components/ProjectsSidebar";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import productImage from "@/assets/product-apps.png";
import productHeroImage from "@/assets/product-appsP.png";

export default function Apps() {
  const navigate = useNavigate();
  const phoneRef = useRef<HTMLDivElement>(null);

  const scrollToPhone = () => {
    phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-background">
      <ProjectsSidebar />

      <main className="min-h-screen flex flex-col px-8 ml-12">
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
              <img
                src={productHeroImage}
                alt="App Preview"
                className="max-w-full h-auto mix-blend-multiply dark:mix-blend-screen dark:opacity-90"
                style={{ maxHeight: "45vh", background: "transparent" }}
              />
            </div>

            {/* View Case Story Button */}
            <button
              onClick={() => navigate("/ootie-case")}
              className="px-8 py-4 text-lg font-medium rounded-full border-2 border-muted-foreground/50 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View Case Story
            </button>

            {/* Down Arrow */}
            <button
              onClick={scrollToPhone}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
              aria-label="Scroll to phone image"
            >
              <ChevronDown className="w-8 h-8" />
            </button>

            {/* Phone Image */}
            <div ref={phoneRef} className="relative">
              <img
                src={productImage}
                alt="Ootie App"
                className="max-w-full h-auto"
                style={{ maxHeight: "55vh", background: "transparent" }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}