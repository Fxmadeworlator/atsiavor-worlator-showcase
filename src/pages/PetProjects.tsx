import { useState } from "react";
import ProjectsSidebar from "@/components/ProjectsSidebar";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "This very website you're looking at! A clean, minimal portfolio showcasing my work and journey as a developer.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: "🌐",
    live: "/",
  },
];

export default function PetProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => setCurrentIndex((i) => (i + 1) % projects.length);
  const prevProject = () => setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <ProjectsSidebar />

      <main className="min-h-screen flex flex-col px-8 ml-12">
        <div className="pt-8 pb-4">
          <h1 className="text-4xl font-bold">/pet-projects</h1>
          <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
        </div>

        <div className="flex-1 py-8">
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-4xl font-bold leading-tight">
              <span className="text-muted-foreground">family, friends and mines: </span>
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <div className="relative rounded-2xl border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="relative w-full h-[450px] bg-secondary flex items-center justify-center">
                <span className="text-9xl">{currentProject.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">{currentProject.title}</h2>
                  <p className="text-sm leading-relaxed text-white/85 max-w-lg mb-4">{currentProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {currentProject.techStack.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-white/15 backdrop-blur-sm text-white/90 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  {currentProject.live !== "#" && (
                    <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm" asChild>
                      <a href={currentProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" /><span>View Live</span>
                      </a>
                    </Button>
                  )}
                </div>

                {projects.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevProject}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 hover:bg-black/40 text-white"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextProject}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 hover:bg-black/40 text-white"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}
              </div>
            </div>

            {projects.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentIndex === i ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
