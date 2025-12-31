import { ArrowRight, Truck, Star } from "lucide-react";
import { Button } from "./ui/button";
import coffeeHero from "@/assets/coffee-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-cream">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Free shipping on all plans</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-up text-foreground" style={{ animationDelay: "0.1s" }}>
              Fresh roasted
              <br />
              <span className="text-gradient">coffee,</span> delivered
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Premium artisan coffee beans from world-class roasters, delivered fresh to your door every month. No commitment, cancel anytime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                <a href="#pricing">Start Your Subscription</a>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <a href="#coffee">Gift a Box</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">4.9/5 from 2,400+ reviews</p>
                <p className="text-sm text-muted-foreground">Coffee lovers trust us</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={coffeeHero} 
                alt="Fresh artisan coffee with latte art and coffee beans" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-coffee flex items-center justify-center text-primary-foreground font-bold">
                  12
                </div>
                <div>
                  <p className="font-semibold text-foreground">12 oz bag monthly</p>
                  <p className="text-sm text-muted-foreground">Starting at ₹299/month</p>
                </div>
              </div>
            </div>

            {/* Floating beans decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-secondary/20 animate-float" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-2xl bg-primary/10 rotate-12 animate-float" style={{ animationDelay: "-3s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
