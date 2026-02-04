import { useState } from "react";
import ProjectsSidebar from "@/components/ProjectsSidebar";
import MobileNav from "@/components/MobileNav";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProjectExpansion = (title: string) =>
    setExpandedProject((prev) => (prev === title ? null : title));

  const ProjectCard = ({
    title,
    subtitle,
    live = "#",
    children,
  }: {
    title: string;
    subtitle: string;
    live?: string;
    children?: React.ReactNode;
  }) => {
    const isOpen = expandedProject === title;

    return (
      <div
        className="bg-gray-100 rounded-lg border border-gray-200 p-8 shadow-sm"
        style={{ fontFamily: "Arimo, sans-serif", fontWeight: 400 }}
      >
        <div className="text-left space-y-3 mb-6">
          <h3
            className="text-2xl font-bold"
            style={{ fontFamily: "Arimo, sans-serif", fontWeight: 700, color: "#2a2a2a" }}
          >
            {title}
          </h3>
          <p
            className="text-xl text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-500 hover:text-blue-600 transition-transform rounded-full p-3 bg-white shadow-sm"
            onClick={() => toggleProjectExpansion(title)}
            aria-label={isOpen ? "collapse" : "expand"}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Plus className="w-7 h-7" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="rounded-full px-6 py-3 bg-white shadow-sm"
            style={{ color: "#2a2a2a", fontWeight: 500, fontSize: "1.1rem" }}
            asChild
          >
            <a href={live} target="_blank" rel="noopener noreferrer">
              view work
            </a>
          </Button>
        </div>

        {isOpen && children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <ProjectsSidebar />
      <MobileNav />

      <main className="min-h-screen flex flex-col px-8 lg:ml-12">
        <div className="pt-8 pb-4">
          <h1 className="text-4xl font-bold">/experience</h1>
          <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
        </div>

        <div className="flex-1 py-8">
          <div className="max-w-6xl mx-auto mb-8">
            <p className="text-4xl font-bold leading-tight">
              <span className="text-muted-foreground">I've worked as a hands-on </span>
              <span className="text-foreground">web developer, </span>
              <br />
              <span className="text-muted-foreground">delivering </span>
              <span className="text-foreground">production-ready</span>
              <span className="text-muted-foreground"> websites for:</span>
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCard
              title="AGTV"
              subtitle="web design and developer<br />2026 - Present"
              live="https://agtv.vercel.app/"
            >
              {expandedProject === "AGTV" && (
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                  <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
                    I designed and developed the official website for Assemblies of God TV Ghana, creating a responsive platform that centralizes all content for viewers. The site features live streaming, scheduled programming, and on-demand content, ensuring users can easily access broadcasts and updates from any device. I handled the overall design, ensuring a clean and accessible interface that aligns with the brand and audience expectations.
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
                    On the technical side, I implemented the front-end and back-end functionality, building a robust system to manage streaming, schedules, and content updates efficiently. This included setting up a content management workflow so the team could upload and organize broadcasts without technical support. The result is a seamless, user-friendly platform that connects the church with its audience while supporting future growth and content expansion.
                  </p>
                </div>
              )}
            </ProjectCard>

            <ProjectCard
              title="Maxwell's Portfolio"
              subtitle="photography portfolio<br />2025"
              live="https://maxwellandoh.vercel.app/"
            >
              {expandedProject === "Maxwell's Portfolio" && (
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                  <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
                    A clean, minimal portfolio built to showcase Maxwell's photography work. The site emphasizes visual storytelling with a focus on responsive design and fast load times.
                  </p>
                </div>
              )}
            </ProjectCard>

            <div className="lg:col-span-2">
              <ProjectCard
                title="Elibon Events & Deco"
                subtitle="event décor brand<br />2024"
                live="#"
              >
                {expandedProject === "Elibon Events & Deco" && (
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                    <p className="text-muted-foreground" style={{ fontSize: "1.1rem" }}>
                      A contemporary event and décor brand transforming every space into a beautifully curated experience. The site highlights services, past work, and booking info.
                    </p>
                  </div>
                )}
              </ProjectCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
