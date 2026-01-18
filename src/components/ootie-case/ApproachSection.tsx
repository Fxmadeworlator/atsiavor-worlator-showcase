import { Flag, Users, DollarSign, PawPrint, Heart, MapPin, ShoppingBag } from "lucide-react";

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

export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Approach</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {approaches.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/20 backdrop-blur-sm"
              style={{ backgroundColor: "#181818" }}
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
              className="p-4 rounded-xl text-center backdrop-blur-sm border border-white/20"
              style={{ backgroundColor: "#181818" }}
            >
              <feature.icon className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="font-medium text-sm mb-1 text-white">{feature.title}</h4>
              <p className="text-xs text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
