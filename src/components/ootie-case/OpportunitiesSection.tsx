import { Flag, TrendingUp, ArrowUp, Users, Heart, MapPin } from "lucide-react";

const opportunities = [
  { icon: Flag, title: "Unified Experience", description: "How might we merge pet care logging, social networking, and marketplace into one seamless product?" },
  { icon: TrendingUp, title: "Increase Retention", description: "How might we reduce friction at critical drop-off moments in the pet owner journey?" },
  { icon: ArrowUp, title: "Drive Adoption", description: "How might we make pet owners feel the immediate value of consistent care logging?" },
  { icon: Users, title: "Family Sharing", description: "How might we enable families to collaborate on pet care without confusion?" },
  { icon: Heart, title: "Emotional Connection", description: "How might we help owners celebrate and share their pet's milestones?" },
  { icon: MapPin, title: "Local Discovery", description: "How might we connect pet owners with nearby services, vets, and pet-friendly places?" },
];

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Opportunities</h2>

        {/* CSS masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          {/* Row 1 */}
          <div className="md:col-span-7 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
            <Flag className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[0].title}</h3>
            <p className="text-gray-300">{opportunities[0].description}</p>
          </div>

          <div className="md:col-span-3 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
            <TrendingUp className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[1].title}</h3>
            <p className="text-gray-300 text-sm">{opportunities[1].description}</p>
          </div>

          <div className="md:col-span-2 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
            <ArrowUp className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[2].title}</h3>
            <p className="text-gray-300 text-sm">{opportunities[2].description}</p>
          </div>

          {/* Row 2 */}
          <div className="md:col-span-3 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
            <Users className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[3].title}</h3>
            <p className="text-gray-300 text-sm">{opportunities[3].description}</p>
          </div>

          <div className="md:col-span-5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
            <Heart className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[4].title}</h3>
            <p className="text-gray-300">{opportunities[4].description}</p>
          </div>

          <div className="md:col-span-4 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors" style={{ backgroundColor: "#181818" }}>
            <MapPin className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">{opportunities[5].title}</h3>
            <p className="text-gray-300">{opportunities[5].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
