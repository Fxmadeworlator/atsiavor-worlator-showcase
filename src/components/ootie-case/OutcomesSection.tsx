import { Flag, Users, Target, ListChecks } from "lucide-react";

const outcomes = [
  {
    icon: Flag,
    title: "Rapid Launch",
    description: "Shipped iOS & Android MVP in 10 weeks from zero. Achieved 1,200 installs in first 3 weeks through organic growth alone.",
  },
  {
    icon: Users,
    title: "Strong Retention",
    description: "38% D7 retention rate exceeded industry benchmarks. 52% of active users added a family member to share pet care duties.",
  },
  {
    icon: Target,
    title: "User Satisfaction",
    description: "4.8 ⭐ Play Store rating. Users praised the intuitive care logging and family sharing features as standout capabilities.",
  },
  {
    icon: ListChecks,
    title: "Complete Handoff",
    description: "Delivered MIT-licensed codebase, 40-page product wiki, hand-off deck, and public roadmap for continued development.",
  },
];

export default function OutcomesSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Impact & Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900/50 rounded-xl border border-white/20 backdrop-blur-sm"
            >
              <item.icon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <p className="text-3xl md:text-4xl font-bold text-white">10</p>
            <p className="text-sm text-gray-300 mt-1">Weeks to MVP</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <p className="text-3xl md:text-4xl font-bold text-white">1,200</p>
            <p className="text-sm text-gray-300 mt-1">Installs in 3 weeks</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <p className="text-3xl md:text-4xl font-bold text-white">38%</p>
            <p className="text-sm text-gray-300 mt-1">D7 Retention</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <p className="text-3xl md:text-4xl font-bold text-white">4.8⭐</p>
            <p className="text-sm text-gray-300 mt-1">Play Store Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
