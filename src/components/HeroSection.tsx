import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute top-48 right-20 w-16 h-16 rounded-2xl bg-secondary/10 rotate-12 animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-accent/15 animate-float" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-48 right-1/3 w-24 h-24 rounded-3xl bg-primary/5 rotate-[-15deg] animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Your ideas deserve to be heard</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-up text-foreground" style={{ animationDelay: "0.1s" }}>
            Write with heart,
            <br />
            <span className="text-gradient">powered by craft</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Pencraft helps you express your unique voice. We handle the polish, you bring the passion. Together, we create content that connects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Your Story
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              See Examples
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex -space-x-3">
                {["bg-primary", "bg-secondary", "bg-accent", "bg-primary/70", "bg-secondary/70"].map((bg, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full ${bg} border-2 border-background flex items-center justify-center text-primary-foreground text-sm font-bold`}>
                    {["S", "M", "A", "J", "K"][i]}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Join 12,000+ writers</p>
                <p className="text-sm text-muted-foreground">who found their voice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
