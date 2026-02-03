import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const testimonials = [
    {
      name: "Ernest",
      text: "Etor approaches tasks with clarity and focus, and his solutions are clean and well-structured. I was impressed by how fast he executed the features without compromising quality.",
      avatar: "👤",
    },
    {
      name: "Emmanuel",
      text: "Worked with Worlator on the AGTV site and other projects. Dedicated, efficient, and a real computer nerd. Wishing him the best ahead.",
      avatar: "👤",
    },
    {
      name: "Maxwell",
      text: "Reliable, organized, and efficient. He communicates clearly, works independently, and consistently delivers on time. I’d gladly work with him again on future projects.",
      avatar: "👤",
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section 
      ref={ref}
      className={`w-full max-w-6xl py-16 px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Reviews</h2>
        
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-infinite-scroll-fast hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 min-w-[300px] max-w-[300px] flex-shrink-0 flex flex-col"
              >
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
