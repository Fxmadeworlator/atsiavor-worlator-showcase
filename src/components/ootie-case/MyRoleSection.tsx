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

export default function MyRoleSection() {
  return (
    <section id="my-role" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading Section */}
        <div className="mb-16 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Built to Support
            <br />
            Every Step of
            <br />
            Pet Parenthood.
          </h1>
          <div className="w-24 h-1 bg-white/50 mb-4"></div>
          <h2 className="text-xl md:text-2xl font-light text-white/90 tracking-wide">
            Ootie | Founder and Developer
          </h2>
        </div>

        {/* My Role Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-white">My Role</h3>
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
