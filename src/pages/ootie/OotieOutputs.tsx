import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ootieImage from "@/assets/project-ootie.jpg";

export default function OotieOutputs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-950 flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen flex items-center z-50">
        <nav className="flex flex-col gap-3 p-4 bg-nav-bg/80 backdrop-blur-sm rounded-3xl border border-border shadow-lg ml-6">
          <button
            onClick={() => navigate("/apps")}
            className="flex items-center gap-0 px-3 py-3 rounded-2xl text-nav-item hover:text-nav-item-hover bg-background hover:bg-secondary transition-all duration-200 ease-out hover:translate-x-1 w-12"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 flex-shrink-0" />
          </button>
        </nav>
      </aside>

      <main className="flex-1 ml-12">
        {/* Header & Tabs */}
        <div className="sticky top-0 z-50 backdrop-blur-2xl bg-transparent border-b border-white/10 shadow-2xl">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex justify-center">
              <Tabs defaultValue="outputs" className="w-full">
                <TabsList className="bg-transparent p-0 gap-2 justify-center">
                  <TabsTrigger
                    value="role"
                    onClick={() => navigate("/ootie-case-story")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    My Role
                  </TabsTrigger>
                  <TabsTrigger
                    value="opportunities"
                    onClick={() => navigate("/ootie-opportunities")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    Opportunities
                  </TabsTrigger>
                  <TabsTrigger
                    value="approach"
                    onClick={() => navigate("/ootie-approach")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    Approach
                  </TabsTrigger>
                  <TabsTrigger
                    value="outcomes"
                    onClick={() => navigate("/ootie-outcomes")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    Impact & Outcomes
                  </TabsTrigger>
                  <TabsTrigger
                    value="outputs"
                    onClick={() => navigate("/ootie-outputs")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white text-black shadow-lg scale-105 font-medium"
                  >
                    Glimpse of Outputs
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="min-h-[calc(100vh-80px)] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Glimpse of Outputs</h2>

            <div className="bg-gradient-to-br from-primary/20 via-secondary to-primary/10 rounded-3xl p-8 md:p-12 mb-12">
              <div className="flex justify-center items-end gap-4 md:gap-8">
                <img
                  src={ootieImage}
                  alt="Ootie App Screen 1"
                  className="w-32 md:w-48 lg:w-56 rounded-2xl shadow-xl transform -rotate-6"
                />
                <img
                  src={ootieImage}
                  alt="Ootie App Screen 2"
                  className="w-40 md:w-56 lg:w-64 rounded-2xl shadow-2xl z-10"
                />
                <img
                  src={ootieImage}
                  alt="Ootie App Screen 3"
                  className="w-32 md:w-48 lg:w-56 rounded-2xl shadow-xl transform rotate-6"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-gray-900/50 rounded-xl border border-white/20 text-center backdrop-blur-sm">
                <p className="text-4xl mb-3">📦</p>
                <h4 className="font-semibold mb-2 text-white">MIT-Licensed Codebase</h4>
                <p className="text-sm text-gray-400">Complete React-Native repo with documentation</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl border border-white/20 text-center backdrop-blur-sm">
                <p className="text-4xl mb-3">📚</p>
                <h4 className="font-semibold mb-2 text-white">40-Page Product Wiki</h4>
                <p className="text-sm text-gray-400">Comprehensive hand-off documentation</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl border border-white/20 text-center backdrop-blur-sm">
                <p className="text-4xl mb-3">🗺️</p>
                <h4 className="font-semibold mb-2 text-white">Public Roadmap</h4>
                <p className="text-sm text-gray-400">Feature-request board for community input</p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://ootie-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Landing Page
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
