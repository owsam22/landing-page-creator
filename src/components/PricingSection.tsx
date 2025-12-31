import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for trying out WriteAI",
    features: [
      "5,000 words per month",
      "Basic AI models",
      "10 languages",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "Best for professionals",
    features: [
      "100,000 words per month",
      "GPT-4 & Claude access",
      "50+ languages",
      "Priority support",
      "SEO optimization",
      "Plagiarism checker",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For teams and agencies",
    features: [
      "Unlimited words",
      "All AI models",
      "Custom integrations",
      "Dedicated support",
      "Team collaboration",
      "API access",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Simple, Transparent
            <span className="text-gradient"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your writing needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "glass glow border-primary/50"
                  : "glass hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-display font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
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
