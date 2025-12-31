import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maya Chen",
    role: "Blogger & Author",
    content: "I used to dread the editing process. Now it feels like having a thoughtful friend who helps me say exactly what I mean.",
    avatar: "M",
  },
  {
    name: "James Wright",
    role: "Small Business Owner",
    content: "My newsletters went from ignored to eagerly anticipated. Pencraft helped me find a voice that actually sounds like me.",
    avatar: "J",
  },
  {
    name: "Sofia Rodriguez",
    role: "Graduate Student",
    content: "Writing my thesis felt impossible until I found Pencraft. It helped me organize my thoughts without changing my ideas.",
    avatar: "S",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="stories" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Writer Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Real people,
            <span className="text-gradient"> real transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how Pencraft has helped writers like you find their voice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
