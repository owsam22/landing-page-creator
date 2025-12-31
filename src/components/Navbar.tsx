import { Feather, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-warm flex items-center justify-center rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
              <Feather className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-serif font-bold text-foreground">Pencraft</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">How it Works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Pricing</a>
            <a href="#stories" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Stories</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors font-medium">
              Sign In
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-warm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Start Writing
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <a href="#features" className="block text-muted-foreground hover:text-foreground py-2">Features</a>
            <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground py-2">How it Works</a>
            <a href="#pricing" className="block text-muted-foreground hover:text-foreground py-2">Pricing</a>
            <a href="#stories" className="block text-muted-foreground hover:text-foreground py-2">Stories</a>
            <button className="w-full px-6 py-3 rounded-full bg-gradient-warm text-primary-foreground font-semibold mt-4">
              Start Writing
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
