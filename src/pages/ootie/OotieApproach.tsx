import { ArrowLeft, Flag, Users, DollarSign, PawPrint, Heart, MapPin, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const approaches = [
  {
    icon: Flag,
    title: "Sprint-Based Delivery",
    description: "Weekly design sprint Monday; build Tue–Fri; TestFlight drop Saturday. Continuous iteration with real user feedback shipped same week.",
  },
  {
    icon: Users,
    title: "User-Centered Research",
    description: "Continuous user interviews with pet owners in Ghana. Feedback tagged in Linear and prioritized based on impact and feasibility.",
  },
  {
    icon: DollarSign,
    title: "Lean Tech Stack",
    description: "React-Native + Expo, Supabase, Tailwind—optimised for speed, not novelty. Every tool chosen for rapid iteration capability.",
  },
];

const features = [
  { icon: PawPrint, title: "Pet Care Logs", description: "Track vaccinations, medications, and health records" },
  { icon: Users, title: "Family Sharing", description: "Collaborate on pet care with household members" },
  { icon: Heart, title: "Social Feed", description: "Share moments and connect with pet community" },
  { icon: MapPin, title: "Discovery Map", description: "Find pet services, vets, and pet-friendly spots" },
  { icon: ShoppingBag, title: "Marketplace", description: "Buy and sell pet products locally" },
];

export default function OotieApproach() {
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
              <Tabs defaultValue="approach" className="w-full">
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
                    className="rounded-full px-6 py-3 text-sm backdrop-blur-md bg-white text-black shadow-lg scale-105 font-medium"
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
        <section className="min-h-[calc(100vh-80px)] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Approach</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {approaches.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-900/50 rounded-xl border border-white/20 backdrop-blur-sm"
                >
                  <item.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-8 text-white">Core Features Built</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-900/50 rounded-xl text-center backdrop-blur-sm border border-white/20"
                >
                  <feature.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-medium text-sm mb-1 text-white">{feature.title}</h4>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
