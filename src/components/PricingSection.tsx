import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "299",
    description: "Perfect for casual drinkers",
    frequency: "12 oz bag / month",
    features: [
      "1 bag per month",
      "Choose your roast level",
      "Free shipping",
      "Skip or cancel anytime",
    ],
    popular: false,
  },
  {
    name: "Coffee Lover",
    price: "599",
    description: "Most popular choice",
    frequency: "2 bags / month",
    features: [
      "2 bags per month",
      "Choose different roasts",
      "Free shipping",
      "Priority processing",
      "Tasting notes card",
      "10% off gift orders",
    ],
    popular: true,
  },
  {
    name: "Enthusiast",
    price: "999",
    description: "For true coffee lovers",
    frequency: "4 bags / month",
    features: [
      "4 bags per month",
      "Mix any roasts",
      "Free express shipping",
      "Exclusive rare roasts",
      "Brewing guide included",
      "20% off all extras",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Subscription Plans</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Choose your
            <span className="text-gradient"> coffee ritual</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Flexible plans that fit your lifestyle. No contracts, no commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ₹{
                plan.popular
                  ? "bg-card border-2 border-primary shadow-warm"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-coffee text-primary-foreground text-sm font-semibold flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Best Value
                </div>
              )}
              
              <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              
              <div className="mb-2">
                <span className="text-4xl font-serif font-bold text-foreground">₹{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-primary font-medium mb-6">{plan.frequency}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "hero-outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
