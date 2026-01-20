import ProjectsSidebar from "@/components/ProjectsSidebar";
import { useNavigate } from "react-router-dom";
import productImage from "@/assets/product-apps.png";

export default function Apps() {
  const navigate = useNavigate();

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
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {/* View Case Story Button */}
            <button
              onClick={() => navigate("/ootie-case")}
              className="px-8 py-4 text-lg font-medium rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View Case Story
            </button>

            {/* Phone Image */}
            <div className="relative">
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
