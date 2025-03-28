
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line } from 'recharts';
import { Users, Truck, CalendarDays, CheckCircle, AlertTriangle, LineChart as LineChartIcon, BarChart2, Settings, PieChart as PieChartIcon, UserCog, ClipboardList, Filter } from 'lucide-react';
import { DataTable } from '@/components/ui/data-table';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Sample data for the admin dashboard
const monthlyData = [
  { name: 'Jan', organicWaste: 320, recyclables: 240, generalWaste: 180 },
  { name: 'Feb', organicWaste: 300, recyclables: 260, generalWaste: 160 },
  { name: 'Mar', organicWaste: 280, recyclables: 280, generalWaste: 140 },
  { name: 'Apr', organicWaste: 260, recyclables: 320, generalWaste: 120 },
  { name: 'May', organicWaste: 240, recyclables: 350, generalWaste: 100 },
  { name: 'Jun', organicWaste: 220, recyclables: 380, generalWaste: 80 },
];

const performanceData = [
  { name: 'Week 1', completionRate: 85 },
  { name: 'Week 2', completionRate: 88 },
  { name: 'Week 3', completionRate: 92 },
  { name: 'Week 4', completionRate: 90 },
  { name: 'Week 5', completionRate: 95 },
  { name: 'Week 6', completionRate: 98 },
];

const customerData = [
  { name: 'Satisfied', value: 68, color: '#22c55e' },
  { name: 'Neutral', value: 22, color: '#3b82f6' },
  { name: 'Unsatisfied', value: 10, color: '#ef4444' },
];

const scheduledCollections = [
  { id: 1, userId: 'USR123', userName: 'John Smith', type: 'Recyclables', date: '2023-11-15', status: 'Scheduled', address: '123 Main St' },
  { id: 2, userId: 'USR456', userName: 'Emma Johnson', type: 'Organic Waste', date: '2023-11-16', status: 'Scheduled', address: '456 Oak Ave' },
  { id: 3, userId: 'USR789', userName: 'Michael Brown', type: 'General Waste', date: '2023-11-17', status: 'Scheduled', address: '789 Pine Blvd' },
  { id: 4, userId: 'USR101', userName: 'Sophia Williams', type: 'Bulk Items', date: '2023-11-18', status: 'Pending', address: '101 Elm St' },
  { id: 5, userId: 'USR202', userName: 'Robert Davis', type: 'Hazardous Waste', date: '2023-11-20', status: 'Pending', address: '202 Cedar Ln' },
];

const AdminDashboard = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Filter collections based on search term and status filter
  const filteredCollections = scheduledCollections.filter(collection => {
    const matchesSearch = collection.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || collection.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleApproveCollection = (id: number) => {
    console.log(`Approved collection with ID: ${id}`);
    // In a real app, this would update the backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-green-800">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Manage waste collection services and monitor system performance</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`https://ui-avatars.com/api/?name=${user?.name || 'Admin'}&background=22c55e&color=fff`} />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{user?.name || 'Admin User'}</p>
            <p className="text-xs text-muted-foreground">{user?.email || 'admin@example.com'}</p>
          </div>
        </div>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">1,248</div>
            <Progress value={78} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+24 new users this week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Collections</CardTitle>
            <Truck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">354</div>
            <Progress value={85} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">85% completion rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Schedule</CardTitle>
            <CalendarDays className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">42</div>
            <Progress value={65} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">65% completed</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">System Health</CardTitle>
            <Settings className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">Optimal</div>
            <Progress value={98} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">All systems operational</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Main content */}
      <Tabs defaultValue="collections">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="collections">
            <ClipboardList className="h-4 w-4 mr-2" />
            Collections
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <BarChart2 className="h-4 w-4 mr-2" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="users">
            <UserCog className="h-4 w-4 mr-2" />
            User Management
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="collections">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Collections</CardTitle>
              <CardDescription>Manage upcoming waste collection requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="relative w-full md:w-64">
                  <Input
                    placeholder="Search by name or address..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                  <Filter className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-3 text-xs font-medium text-muted-foreground">USER</th>
                      <th className="text-left p-3 text-xs font-medium text-muted-foreground">TYPE</th>
                      <th className="text-left p-3 text-xs font-medium text-muted-foreground">DATE</th>
                      <th className="text-left p-3 text-xs font-medium text-muted-foreground">ADDRESS</th>
                      <th className="text-left p-3 text-xs font-medium text-muted-foreground">STATUS</th>
                      <th className="text-left p-3 text-xs font-medium text-muted-foreground">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCollections.map((collection) => (
                      <tr key={collection.id} className="border-b hover:bg-muted/50">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`https://ui-avatars.com/api/?name=${collection.userName}&background=random&color=fff`} />
                              <AvatarFallback>{collection.userName.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{collection.userName}</p>
                              <p className="text-xs text-muted-foreground">{collection.userId}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="text-sm">{collection.type}</span>
                        </td>
                        <td className="p-3">
                          <span className="text-sm">{new Date(collection.date).toLocaleDateString()}</span>
                        </td>
                        <td className="p-3">
                          <span className="text-sm">{collection.address}</span>
                        </td>
                        <td className="p-3">
                          <Badge variant={collection.status === 'Scheduled' ? 'default' : 'outline'}>
                            {collection.status === 'Scheduled' ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <AlertTriangle className="h-3 w-3 mr-1" />
                            )}
                            {collection.status}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleApproveCollection(collection.id)}
                              disabled={collection.status === 'Scheduled'}
                            >
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="text-destructive">
                              Cancel
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Waste Collection Trends</CardTitle>
                  <CardDescription>Monthly breakdown by waste category</CardDescription>
                </div>
                <BarChart2 className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Customer Satisfaction</CardTitle>
                  <CardDescription>Based on feedback data</CardDescription>
                </div>
                <PieChartIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={customerData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        label
                      >
                        {customerData.map((entry, index) => (
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
            
            <Card className="lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Collection Completion Rate</CardTitle>
                  <CardDescription>Weekly performance metrics</CardDescription>
                </div>
                <LineChartIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[60, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="completionRate" name="Completion Rate (%)" stroke="#22c55e" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-20 text-muted-foreground">
                User management interface would be implemented here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
