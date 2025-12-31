import { ArrowRight, Gift } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float" />
      <div className="absolute bottom-10 right-20 w-24 h-24 rounded-2xl bg-secondary/10 rotate-12 animate-float" style={{ animationDelay: "-3s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-cream rounded-[2.5rem] p-12 md:p-16 border border-border">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
            <Gift className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">First bag 50% off</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Ready for your
            <span className="text-gradient"> best cup yet?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the Brew Box family and discover why thousands of coffee lovers never went back to store-bought.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Start Your Subscription
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Give as Gift
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free shipping • Cancel anytime • Satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
