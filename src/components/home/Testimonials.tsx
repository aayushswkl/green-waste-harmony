
import React from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Johnson',
    role: 'Residential User',
    content: 'The scheduling system has made it so easy to manage my waste collection. I never miss a pickup now, and the eco tips have helped me reduce my household waste by 40%!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Community Organizer',
    content: 'We implemented this system across our neighborhood and have seen tremendous improvement in proper waste segregation. The analytics help us track our community\'s progress.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Small Business Owner',
    content: 'Managing commercial waste used to be a hassle until we started using this platform. The scheduling and tracking features have saved us time and reduced our environmental footprint.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">
            Hear from people who have transformed their waste management practices with our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
