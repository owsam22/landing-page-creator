import coffeeDark from "@/assets/coffee-bag-dark.jpg";
import coffeeLight from "@/assets/coffee-bag-light.jpg";
import coffeeMedium from "@/assets/coffee-bag-medium.jpg";

const coffees = [
  {
    name: "Ethiopian Yirgacheffe",
    roast: "Light Roast",
    flavor: "Fruity, floral, bright acidity",
    origin: "Ethiopia",
    image: coffeeLight,
  },
  {
    name: "Colombian Supremo",
    roast: "Medium Roast",
    flavor: "Balanced, nutty, caramel notes",
    origin: "Colombia",
    image: coffeeMedium,
  },
  {
    name: "Sumatra Mandheling",
    roast: "Dark Roast",
    flavor: "Earthy, bold, low acidity",
    origin: "Indonesia",
    image: coffeeDark,
  },
];

const CoffeeSection = () => {
  return (
    <section id="coffee" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Coffee</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Handpicked from the
            <span className="text-gradient"> world's best farms</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every bag tells a story. Ethically sourced, expertly roasted, and delivered at peak freshness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coffees.map((coffee) => (
            <div
              key={coffee.name}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={coffee.image} 
                  alt={`${coffee.name} coffee bag`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                  {coffee.roast}
                </span>
                <h3 className="text-xl font-serif font-bold mb-2 text-foreground">
                  {coffee.name}
                </h3>
                <p className="text-muted-foreground mb-2">{coffee.flavor}</p>
                <p className="text-sm text-muted-foreground">Origin: {coffee.origin}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            New roasts every month • Discover your next favorite
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
