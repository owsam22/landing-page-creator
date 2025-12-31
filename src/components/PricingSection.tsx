import { Check, Heart } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Dreamer",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "5,000 words per month",
      "Basic writing suggestions",
      "Email support",
      "Community access",
    ],
    popular: false,
  },
  {
    name: "Creator",
    price: "19",
    description: "For passionate writers",
    features: [
      "50,000 words per month",
      "Advanced style matching",
      "Tone adjustments",
      "Priority support",
      "Writing analytics",
      "Export to anywhere",
    ],
    popular: true,
  },
  {
    name: "Professional",
    price: "49",
    description: "For teams & businesses",
    features: [
      "Unlimited words",
      "Brand voice training",
      "Team collaboration",
      "API access",
      "Dedicated support",
      "Custom integrations",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Pricing</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Choose your
            <span className="text-gradient"> creative path</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Start free, grow when ready. Cancel anytime, no questions asked.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-warm"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-warm text-primary-foreground text-sm font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  Most Loved
                </div>
              )}
              
              <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-serif font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
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
