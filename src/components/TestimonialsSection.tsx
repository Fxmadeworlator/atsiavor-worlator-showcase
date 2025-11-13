const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Vishnumaya Unni",
      text: "Atsiavor is a great person to work with. He is madly obsessed over cars and he is very passionate about the things he love.",
      avatar: "👤",
    },
    {
      name: "Saliq Shah",
      text: "Worked with Atsiavor on our Major Project, the Dynamometer, and other projects. Dedicated, passionate, and a true petrol head. Wishing him the best ahead.",
      avatar: "👤",
    },
    {
      name: "Subodh Dangi",
      text: "There are very few people in this world who are driven by just the looks of some cars, atsiavor is one of them. I can recommend him to entrust with any job as I know I will get much more than just the required results.",
      avatar: "👤",
    },
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <span className="font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
