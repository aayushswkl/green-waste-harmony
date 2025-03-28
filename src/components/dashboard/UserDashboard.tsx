
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { CalendarDays, Truck, AlertTriangle, CheckCircle, Recycle, Trash2, Package, LeafyGreen } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

// Sample data (same as from original Dashboard.tsx)
const monthlyData = [
  { name: 'Jan', organicWaste: 65, recyclables: 45, generalWaste: 35 },
  { name: 'Feb', organicWaste: 60, recyclables: 50, generalWaste: 30 },
  { name: 'Mar', organicWaste: 55, recyclables: 55, generalWaste: 25 },
  { name: 'Apr', organicWaste: 50, recyclables: 65, generalWaste: 20 },
  { name: 'May', organicWaste: 45, recyclables: 70, generalWaste: 15 },
  { name: 'Jun', organicWaste: 40, recyclables: 75, generalWaste: 10 },
];

const wasteComposition = [
  { name: 'Organic', value: 45, color: '#22c55e' },
  { name: 'Recyclables', value: 30, color: '#3b82f6' },
  { name: 'General', value: 15, color: '#ef4444' },
  { name: 'Hazardous', value: 10, color: '#f59e0b' },
];

const upcomingCollections = [
  { 
    id: 1, 
    type: 'Recyclables', 
    date: '2023-11-15', 
    status: 'Scheduled',
    icon: Recycle,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100'
  },
  { 
    id: 2, 
    type: 'Organic Waste', 
    date: '2023-11-17', 
    status: 'Scheduled',
    icon: LeafyGreen,
    color: 'text-green-500',
    bgColor: 'bg-green-100'
  },
  { 
    id: 3, 
    type: 'General Waste', 
    date: '2023-11-19', 
    status: 'Scheduled',
    icon: Trash2,
    color: 'text-red-500',
    bgColor: 'bg-red-100'
  },
  { 
    id: 4, 
    type: 'Bulk Items', 
    date: '2023-11-25', 
    status: 'Pending Confirmation',
    icon: Package,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100'
  },
];

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-green-800">
            Welcome, {user?.name || 'User'}
          </h1>
          <p className="text-muted-foreground">Monitor your waste management activities and impact</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium text-green-800">Active Collection Status</span>
        </div>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Recycling Rate</CardTitle>
            <Recycle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">75%</div>
            <Progress value={75} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Waste Reduction</CardTitle>
            <Trash2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">35kg</div>
            <Progress value={65} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">-8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Next Collection</CardTitle>
            <CalendarDays className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">Nov 15</div>
            <p className="text-xs text-muted-foreground mt-2">Recyclables - 3 days away</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Collection Status</CardTitle>
            <Truck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">On Track</div>
            <p className="text-xs text-muted-foreground mt-2">All collections completed on time</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Waste Tracking</CardTitle>
            <CardDescription>Monthly breakdown of waste categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="organicWaste" name="Organic Waste" fill="#22c55e" />
                  <Bar dataKey="recyclables" name="Recyclables" fill="#3b82f6" />
                  <Bar dataKey="generalWaste" name="General Waste" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Waste Composition</CardTitle>
            <CardDescription>Current waste breakdown by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={wasteComposition}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {wasteComposition.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Upcoming Collections */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Collections</CardTitle>
          <CardDescription>Schedule for the next 2 weeks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingCollections.map((collection) => (
              <div key={collection.id} className="flex items-center p-3 rounded-lg border bg-card hover:bg-accent/30 transition-colors">
                <div className={`w-10 h-10 rounded-full ${collection.bgColor} flex items-center justify-center mr-4`}>
                  <collection.icon className={`h-5 w-5 ${collection.color}`} />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium">{collection.type}</h4>
                  <p className="text-sm text-muted-foreground">
                    {new Date(collection.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${collection.status === 'Scheduled' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                  `}>
                    {collection.status === 'Scheduled' ? (
                      <CheckCircle className="mr-1 h-3 w-3" />
                    ) : (
                      <AlertTriangle className="mr-1 h-3 w-3" />
                    )}
                    {collection.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
