
import React from 'react';
import { Scroll, UserCircle, Calendar, Bell, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: UserCircle,
    title: 'Create an Account',
    description: 'Sign up and set up your profile with your location and preferences.'
  },
  {
    icon: Calendar,
    title: 'Schedule Collections',
    description: 'Choose your preferred collection dates and frequency for different waste types.'
  },
  {
    icon: Bell,
    title: 'Get Reminders',
    description: 'Receive notifications before scheduled pickups so you never miss a collection.'
  },
  {
    icon: Truck,
    title: 'Track Collection',
    description: 'Monitor the status of your waste collection in real-time.'
  },
  {
    icon: CheckCircle,
    title: 'Provide Feedback',
    description: 'Rate the service and report any issues to help improve the system.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Our streamlined process makes waste management simple and efficient for everyone.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-green-200 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 gap-8 items-center">
                <div className={`md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`md:hidden absolute left-0 top-0 w-10 h-10 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-primary'} flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div className="pl-16 md:pl-0 pb-8 md:pb-0">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className={`hidden md:flex ${index % 2 === 0 ? 'md:order-2 md:justify-start' : 'md:order-1 md:justify-end'}`}>
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-green-100 animate-pulse"></div>
                    <div className="relative w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
