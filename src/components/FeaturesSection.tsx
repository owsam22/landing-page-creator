import { Heart, Lightbulb, MessageCircle, Palette, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Write Authentically",
    description: "Your voice, your style. We enhance your words without losing what makes them uniquely yours.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Spark New Ideas",
    description: "Stuck staring at a blank page? We help you brainstorm and discover fresh angles for any topic.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageCircle,
    title: "Connect with Readers",
    description: "Craft messages that resonate. Write emails, stories, and posts people actually want to read.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Palette,
    title: "Express Your Style",
    description: "Whether playful or professional, we adapt to match your personality and brand voice.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Clock,
    title: "More Time to Create",
    description: "Spend less time editing and more time doing what you love. We handle the tedious stuff.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Built for Everyone",
    description: "Bloggers, students, entrepreneurs, dreamers. Anyone with something to say is welcome here.",
    color: "bg-accent/10 text-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Pencraft?</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Writing should feel like
            <span className="text-gradient"> magic, not work</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe everyone has stories worth telling. Our tools help you tell them beautifully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
