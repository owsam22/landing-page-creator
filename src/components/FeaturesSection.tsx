import { Zap, Brain, Globe, Shield, Wand2, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Writing",
    description: "Advanced language models understand context and generate human-quality content instantly.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate blog posts, emails, and marketing copy in seconds, not hours.",
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description: "Write and translate content in over 50 languages with native-level fluency.",
  },
  {
    icon: Shield,
    title: "Plagiarism Free",
    description: "Every piece of content is original and passes all plagiarism checks.",
  },
  {
    icon: Wand2,
    title: "Tone Adjustment",
    description: "Switch between professional, casual, or creative tones with one click.",
  },
  {
    icon: BarChart3,
    title: "SEO Optimized",
    description: "Built-in SEO suggestions to help your content rank higher on search engines.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30 rotate-180" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Everything You Need to
            <span className="text-gradient"> Write Better</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to supercharge your writing workflow and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl glass hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
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
