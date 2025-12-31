import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-coffee flex items-center justify-center">
              <Coffee className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-serif font-bold text-foreground">Brew Box</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">How It Works</a>
            <a href="#coffee" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Our Coffee</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Plans</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Reviews</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors font-medium">
              Login
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gradient-coffee text-primary-foreground font-semibold shadow-warm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Subscribe Now
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground py-2">How It Works</a>
            <a href="#coffee" className="block text-muted-foreground hover:text-foreground py-2">Our Coffee</a>
            <a href="#pricing" className="block text-muted-foreground hover:text-foreground py-2">Plans</a>
            <a href="#reviews" className="block text-muted-foreground hover:text-foreground py-2">Reviews</a>
            <button className="w-full px-6 py-3 rounded-full bg-gradient-coffee text-primary-foreground font-semibold mt-4">
              Subscribe Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
