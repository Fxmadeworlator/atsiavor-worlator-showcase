import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProjectExpansion = (title: string) =>
    setExpandedProject((prev) => (prev === title ? null : title));

  const projects = [
    {
      title: "Presec-Legon Robotics & AI Club",
      role: "President (2021–2023)",
      summary:
        "Founded and led a robotics club in my high school. Led workshops, organized competitions, mentored juniors, and represented the school at national tech events.",
      details: [
        "Organized weekly coding and robotics workshops for 50+ students.",
        "Led the team in designing and building competition robots.",
        "Represented PRESEC at the National Science & Math Quiz Tech Fair.",
        "Mentored junior members, many of whom pursued STEM in university.",
      ],
    },
    {
      title: "Shell LiveWIRE Bootcamp",
      role: "Participant (2022)",
      summary:
        "Selected for Shell's entrepreneurship bootcamp focused on clean energy and sustainable innovation. Developed a prototype for a solar-powered community hub.",
      details: [
        "Pitched a solar community hub concept to a panel of industry professionals.",
        "Collaborated with multidisciplinary teams on sustainable energy solutions.",
        "Learned business model development and pitch presentation skills.",
        "Networked with entrepreneurs and Shell innovation leads.",
      ],
    },
    {
      title: "STEM Outreach & Teaching",
      role: "Volunteer Educator (2020–Present)",
      summary:
        "Passionate about tech education, I've volunteered in underserved communities teaching kids basic coding, robotics, and digital skills.",
      details: [
        "Taught Scratch and block-based coding to 200+ students.",
        "Led hands-on electronics sessions using Arduino kits.",
        "Collaborated with NGOs to expand access to STEM materials.",
        "Created beginner-friendly tutorials for students with no prior exposure.",
      ],
    },
    {
      title: "EV Research Project",
      role: "Lead Researcher (2023)",
      summary:
        "Researched the feasibility of EV adoption in Ghana, including infrastructure needs, user perception, and government incentives.",
      details: [
        "Conducted user surveys with 100+ drivers and fleet operators.",
        "Analyzed charging infrastructure gaps in urban and rural Ghana.",
        "Presented findings to academic advisors and local policy advocates.",
        "Published summary insights in a university research journal.",
      ],
    },
    {
      title: "Civic Engineering Projects",
      role: "Team Member (2021–2022)",
      summary:
        "Worked with university engineering students on civic-focused projects including traffic flow modeling and waste management simulations.",
      details: [
        "Assisted in building traffic simulations for Accra intersections.",
        "Contributed to data collection for municipal waste pattern analysis.",
        "Collaborated with faculty advisors on proposal writing.",
        "Presented initial results at a local engineering showcase.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="ml-24 px-6 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">/experience</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A timeline of leadership, research, and community work that has shaped my approach to building products.
        </p>

        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.title;
            return (
              <div
                key={project.title}
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleProjectExpansion(project.title)}
                  className="w-full flex items-start justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{project.role}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 ml-4"
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                  >
                    {isExpanded ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </Button>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-foreground mb-4">{project.summary}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
