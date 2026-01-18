import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ootieImage from "@/assets/project-ootie.jpg";

export default function OutputsSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Glimpse of Outputs</h2>

        {/* phone stack */}
        <div
          className="rounded-3xl p-8 md:p-12 mb-12 border border-white/10"
          style={{ backgroundColor: "#181818" }}
        >
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

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { emoji: "📦", title: "MIT-Licensed Codebase", desc: "Complete React-Native repo with documentation" },
            { emoji: "📚", title: "40-Page Product Wiki", desc: "Comprehensive hand-off documentation" },
            { emoji: "🗺️", title: "Public Roadmap", desc: "Feature-request board for community input" },
          ].map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-xl border border-white/20 text-center backdrop-blur-sm"
              style={{ backgroundColor: "#181818" }}
            >
              <p className="text-4xl mb-3">{c.emoji}</p>
              <h4 className="font-semibold mb-2 text-white">{c.title}</h4>
              <p className="text-sm text-gray-400">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gap-2 bg-white text-black hover:bg-white/90" asChild>
            <a href="https://ootie-web.vercel.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5" />
              Visit Live Landing Page
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
