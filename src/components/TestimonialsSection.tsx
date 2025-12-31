import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Michael Torres",
    location: "Austin, TX",
    content: "Best coffee I've ever had at home. The Ethiopian blend is absolutely incredible. My mornings have never been better!",
    rating: 5,
    avatar: "M",
  },
  {
    name: "Sarah Kim",
    location: "Seattle, WA", 
    content: "As a former barista, I'm picky about my coffee. Brew Box consistently delivers quality that rivals my favorite cafes.",
    rating: 5,
    avatar: "S",
  },
  {
    name: "David Chen",
    location: "New York, NY",
    content: "The convenience is unmatched. Fresh beans show up right when I need them, and the variety keeps things exciting.",
    rating: 5,
    avatar: "D",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Customer Reviews</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Loved by coffee
            <span className="text-gradient"> enthusiasts</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join thousands of happy subscribers who start their day with Brew Box.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-coffee flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
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
