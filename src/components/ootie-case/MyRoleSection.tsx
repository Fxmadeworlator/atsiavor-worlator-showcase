import ootieImage from "@/assets/project-ootie.jpg";
import CaseHeader from "./CaseHeader";

const skillTags = [
  "PRODUCT DESIGN",
  "FULL-STACK DEV",
  "REACT NATIVE",
  "USER RESEARCH",
  "MVP STRATEGY",
  "SUPABASE",
  "EXPO",
];

export default function MyRoleSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] py-20 px-6 bg-gradient-to-br from-teal-900 via-black to-teal-950">
      <div className="max-w-6xl mx-auto">
        <CaseHeader />

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
  );
}
