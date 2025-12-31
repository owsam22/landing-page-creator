import { PenLine, Wand2, Send } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    step: "01",
    title: "Share your thoughts",
    description: "Just start typing. Pour out your ideas, however messy. That's where the magic begins.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "We refine together",
    description: "Our tools suggest improvements while keeping your authentic voice front and center.",
  },
  {
    icon: Send,
    step: "03",
    title: "Share with the world",
    description: "Hit publish with confidence. Your words are polished, powerful, and perfectly you.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How it works</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Three steps to
            <span className="text-gradient"> better writing</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            No complicated setup. No learning curve. Just you and your words.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-warm flex items-center justify-center shadow-warm">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
