import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Content Marketing Manager",
    company: "TechFlow",
    content: "WriteAI has completely transformed our content workflow. We're producing 5x more blog posts with the same team.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Freelance Writer",
    company: "Self-employed",
    content: "I was skeptical at first, but the quality of AI-generated content is incredible. It's like having a brilliant co-writer.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Marketing",
    company: "StartupXYZ",
    content: "The SEO optimization features alone are worth the subscription. Our organic traffic has increased by 300%.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Loved by
            <span className="text-gradient"> Writers Everywhere</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied users who have transformed their writing process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl glass hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
