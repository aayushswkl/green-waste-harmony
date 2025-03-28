
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf, Bell, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary animate-leaf-sway" />
            <span className="font-bold text-xl text-primary">GreenWaste</span>
          </Link>

          {!isMobile && (
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/eco-guide" className="text-foreground hover:text-primary transition-colors">
                Eco Guide
              </Link>
              <Link to="/scheduling" className="text-foreground hover:text-primary transition-colors">
                Scheduling
              </Link>
              <Link to="/feedback" className="text-foreground hover:text-primary transition-colors">
                Feedback
              </Link>
            </div>
          )}

          <div className="flex items-center gap-2">
            {!isMobile && (
              <Button variant="outline" size="icon" className="rounded-full">
                <Bell className="h-4 w-4" />
              </Button>
            )}
            
            <Button className="eco-button">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Dashboard
              </Link>
              <Link to="/eco-guide" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Eco Guide
              </Link>
              <Link to="/scheduling" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Scheduling
              </Link>
              <Link to="/feedback" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>
                Feedback
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
