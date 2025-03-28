
import React from 'react';
import { CalendarDays, FileBarChart, Recycle, LeafyGreen, Truck, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Smart Scheduling',
    description: 'Set up and manage waste collection schedules with notifications and reminders.',
    icon: CalendarDays,
    color: 'bg-green-100 text-green-700'
  },
  {
    title: 'Waste Analytics',
    description: 'Track your waste generation patterns and see your contribution to environmental conservation.',
    icon: FileBarChart,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    title: 'Recycling Guidelines',
    description: 'Learn about proper waste segregation and recycling practices for different materials.',
    icon: Recycle,
    color: 'bg-amber-100 text-amber-700'
  },
  {
    title: 'Eco Tips',
    description: 'Discover useful tips and ideas to reduce waste generation and live more sustainably.',
    icon: LeafyGreen,
    color: 'bg-lime-100 text-lime-700'
  },
  {
    title: 'Collection Tracking',
    description: 'Real-time updates on waste collection status and schedule changes.',
    icon: Truck,
    color: 'bg-teal-100 text-teal-700'
  },
  {
    title: 'Community Feedback',
    description: 'Report issues, suggest improvements, and engage with the waste management community.',
    icon: MessageSquare,
    color: 'bg-purple-100 text-purple-700'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Comprehensive Waste Management Solutions</h2>
          <p className="text-muted-foreground">
            Our platform offers a range of features designed to streamline waste management and promote 
            sustainable practices in your community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className={`w-14 h-14 rounded-full ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
