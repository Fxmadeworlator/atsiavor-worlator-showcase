import Sidebar from "@/components/Sidebar";
import { useNavigate } from "react-router-dom";
import productImage from "@/assets/product-apps.png";

export default function Apps() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

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
          <div className="flex-1 flex items-center justify-center">
            <div
              className="relative cursor-pointer group"
              onClick={() => navigate("/ootie-case-story")}
            >
              <img
                src={productImage}
                alt="Ootie App"
                className="max-w-full h-auto group-hover:opacity-80 transition-opacity"
                style={{ maxHeight: "60vh", background: "transparent" }}
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-4 text-xs text-foreground/70 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                /ootie-case-story
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
