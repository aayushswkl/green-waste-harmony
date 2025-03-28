
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-eco-gradient relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Join the Green Revolution
          </h2>
          <p className="text-xl text-green-800 mb-8">
            Start managing your waste efficiently today and contribute to a cleaner, greener environment for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="eco-button">
              Sign Up Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/eco-guide">
              <Button variant="outline" size="lg" className="border-green-800 text-green-800 hover:bg-green-800/10">
                Explore Eco Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
