import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
}

export default function PetProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my work, skills, and experience. Built with React, TypeScript, and Tailwind CSS.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that provides real-time weather data and forecasts using the OpenWeather API.",
      techStack: ["React", "OpenWeather API", "Chart.js"],
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "A productivity app for managing tasks with drag-and-drop functionality and local storage persistence.",
      techStack: ["React", "DnD Kit", "Local Storage"],
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="ml-24 px-6 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">/pet-projects</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Side projects and experiments I've built to learn new technologies and explore ideas.
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Project Card */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="aspect-video bg-secondary/20 flex items-center justify-center">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {currentProject.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {currentProject.link && (
                <Button variant="secondary" className="gap-2" asChild>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <Button variant="ghost" size="icon" onClick={goToPrevious}>
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-foreground"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={goToNext}>
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
