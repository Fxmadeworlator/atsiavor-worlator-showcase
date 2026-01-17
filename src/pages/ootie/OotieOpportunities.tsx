import { ArrowLeft, Flag, TrendingUp, ArrowUp, Users, Heart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const opportunities = [
  {
    icon: Flag,
    title: "Unified Experience",
    description: "How might we merge pet care logging, social networking, and marketplace into one seamless product?",
  },
  {
    icon: TrendingUp,
    title: "Increase Retention",
    description: "How might we reduce friction at critical drop-off moments in the pet owner journey?",
  },
  {
    icon: ArrowUp,
    title: "Drive Adoption",
    description: "How might we make pet owners feel the immediate value of consistent care logging?",
  },
  {
    icon: Users,
    title: "Family Sharing",
    description: "How might we enable families to collaborate on pet care without confusion?",
  },
  {
    icon: Heart,
    title: "Emotional Connection",
    description: "How might we help owners celebrate and share their pet's milestones?",
  },
  {
    icon: MapPin,
    title: "Local Discovery",
    description: "How might we connect pet owners with nearby services, vets, and pet-friendly places?",
  },
];

export default function OotieOpportunities() {
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
              <Tabs defaultValue="opportunities" className="w-full">
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
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white text-black shadow-lg scale-105 font-medium"
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
        <section className="min-h-[calc(100vh-80px)] py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-900/50 rounded-xl border border-white/20 hover:border-white/40 transition-colors backdrop-blur-sm"
                >
                  <item.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
