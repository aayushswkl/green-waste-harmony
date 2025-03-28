
import React from 'react';
import { 
  Recycle, 
  Leaf, 
  Clock, 
  Users 
} from 'lucide-react';

const stats = [
  {
    icon: Recycle,
    value: '85%',
    label: 'Waste Recycled',
    description: 'Through proper segregation and processing'
  },
  {
    icon: Leaf,
    value: '12K',
    label: 'Trees Saved',
    description: 'By reducing paper waste and recycling'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Service Availability',
    description: 'Continuous monitoring and support'
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Active Users',
    description: 'Growing community of eco-conscious people'
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-green-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-green-100">
            Together, we're making a significant difference in waste management and environmental conservation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-green-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-green-800/80 transition-colors duration-300 border border-green-700/50">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-medium text-green-100 mb-2">{stat.label}</div>
              <p className="text-green-200 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
