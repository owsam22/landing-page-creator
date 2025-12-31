import { ArrowRight, Heart } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float" />
      <div className="absolute bottom-10 right-20 w-24 h-24 rounded-2xl bg-secondary/10 rotate-12 animate-float" style={{ animationDelay: "-3s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-soft rounded-[2.5rem] p-12 md:p-16 border border-border">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-foreground">Join our community of writers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Your story is
            <span className="text-gradient"> waiting to be told</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether it's a novel, a newsletter, or just a heartfelt message — we're here to help you write it beautifully.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Start Writing Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 5,000 words free every month
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
