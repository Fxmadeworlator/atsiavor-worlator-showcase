import { Flag, TrendingUp, ArrowUp, Users, Heart, MapPin } from "lucide-react";

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

export default function OpportunitiesSection() {
  return (
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
  );
}
