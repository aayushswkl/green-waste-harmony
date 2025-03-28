
import React from 'react';
import { ArrowRight, Leaf, RecycleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-green-50 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6 animate-slide-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <RecycleIcon className="h-4 w-4 mr-2 animate-spin-slow" />
              Sustainable Waste Management
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight">
              Smart Waste Management <br />
              <span className="text-primary">for a Greener Tomorrow</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Join our community-driven platform to manage waste effectively,
              schedule collections, learn eco-friendly practices, and make a positive
              environmental impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="eco-button">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Link to="/eco-guide">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-green-200/30 animate-pulse" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/0b986b39-8a8a-490d-b1da-f77cc25b5b2e.png" 
                  alt="Waste Management Flow" 
                  className="object-contain max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
