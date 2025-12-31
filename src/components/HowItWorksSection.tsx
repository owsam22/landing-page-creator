import { Package, Truck, Coffee, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Coffee,
    step: "1",
    title: "Choose Your Roast",
    description: "Light, medium, or dark? Single origin or blend? Pick your perfect match.",
  },
  {
    icon: Package,
    step: "2",
    title: "We Roast & Pack",
    description: "Your beans are roasted fresh within 24 hours of shipping.",
  },
  {
    icon: Truck,
    step: "3",
    title: "Delivered Fresh",
    description: "Free shipping, right to your doorstep. Track every package.",
  },
  {
    icon: RefreshCw,
    step: "4",
    title: "Enjoy & Repeat",
    description: "New coffee every month. Skip or cancel anytime.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Fresh coffee in
            <span className="text-gradient"> 4 simple steps</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From roaster to your cup in just days, not weeks. That's the Brew Box difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-coffee flex items-center justify-center shadow-warm">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                  {step.step}
                </span>
              </div>
              
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
