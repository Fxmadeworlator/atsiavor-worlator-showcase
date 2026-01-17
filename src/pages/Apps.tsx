import Sidebar from "@/components/Sidebar";
import { useNavigate } from "react-router-dom";
import productImage from "@/assets/product-apps.png";

export default function Apps() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="ml-24 px-6 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">/apps</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Mobile and web applications I've designed and developed from scratch.
        </p>

        {/* Ootie App Card */}
        <div 
          className="group relative cursor-pointer"
          onClick={() => navigate("/ootie-case-story")}
        >
          <div className="flex justify-center items-center py-12">
            <img
              src={productImage}
              alt="Ootie App"
              className="w-64 md:w-80 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          {/* URL Preview on Hover */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
              ootie-web.vercel.app
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
