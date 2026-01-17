import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ootieImage from "@/assets/project-ootie.jpg";

const skillTags = [
  "PRODUCT DESIGN",
  "FULL-STACK DEV",
  "REACT NATIVE",
  "USER RESEARCH",
  "MVP STRATEGY",
  "SUPABASE",
  "EXPO",
];

export default function OotieMyRole() {
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
              <Tabs defaultValue="role" className="w-full">
                <TabsList className="bg-transparent p-0 gap-2 justify-center">
                  <TabsTrigger
                    value="role"
                    onClick={() => navigate("/ootie-case-story")}
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white text-black shadow-lg scale-105 font-medium"
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
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 font-medium"
                  >
                    Glimpse of Outputs
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="min-h-[calc(100vh-80px)] py-20 px-6 bg-gradient-to-br from-teal-900 via-black to-teal-950">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-left mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Built to Support
                <br />
                Every step of parenthood
              </h1>
              <h2 className="text-xl md:text-2xl font-light text-white/90 tracking-wide mt-4">
                Ootie | Founder and Developer
              </h2>
            </div>

            {/* My Role Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">My Role</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  I was the solo full-stack engineer & product designer hired to
                  ship Ootie from zero to MVP in 10 weeks, targeting pet owners
                  in Ghana and the broader African market.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  My focus was on creating a seamless experience that merges
                  pet care management, social networking, and local marketplace
                  into one cohesive product. I led user research, UX design,
                  React-Native development, and Supabase backend architecture.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={ootieImage}
                    alt="Ootie App"
                    className="w-64 md:w-80 rounded-3xl shadow-2xl border border-white/20 transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
