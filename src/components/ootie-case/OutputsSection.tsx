import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ootieImage from "@/assets/project-ootie.jpg";

export default function OutputsSection() {
  return (
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
  );
}
