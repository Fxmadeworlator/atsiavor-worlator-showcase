import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Briefcase, Smartphone, Sparkles } from "lucide-react";

const categories = [
  { 
    label: "Experience", 
    path: "/experience", 
    icon: Briefcase,
    description: "Production websites for clients"
  },
  { 
    label: "Apps", 
    path: "/apps", 
    icon: Smartphone,
    description: "Mobile and web applications"
  },
  { 
    label: "Pet Projects", 
    path: "/pet-projects", 
    icon: Sparkles,
    description: "Personal and experimental work"
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="min-h-screen flex flex-col px-8 ml-12">
        <div className="pt-8 pb-4">
          <h1 className="text-4xl font-bold">/projects</h1>
          <div className="h-[2px] bg-border mt-4 w-full max-w-md" />
        </div>

        <div className="flex-1 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-4xl font-bold leading-tight mb-12">
              <span className="text-muted-foreground">Browse my work by </span>
              <span className="text-foreground">category</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.path}
                    onClick={() => navigate(cat.path)}
                    className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-left"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-semibold mb-2">{cat.label}</h3>
                    <p className="text-muted-foreground">{cat.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
