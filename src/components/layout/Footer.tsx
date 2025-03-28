
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-50 border-t border-green-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-primary">GreenWaste</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Helping communities manage waste sustainably and efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/eco-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Eco Guide
                </Link>
              </li>
              <li>
                <Link to="/scheduling" className="text-muted-foreground hover:text-primary transition-colors">
                  Scheduling
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-muted-foreground hover:text-primary transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Recycling Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Waste Reduction Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Environmental Impact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>123 Green Street</p>
              <p>Eco City, EC 12345</p>
              <p>contact@greenwaste.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-green-100 mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GreenWaste Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
