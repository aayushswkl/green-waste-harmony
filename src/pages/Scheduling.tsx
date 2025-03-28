
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Calendar as CalendarIcon, CheckCircle, ClipboardList, Plus, RecycleIcon, LeafyGreen, Trash2, Package, CalendarDays, AlertTriangle } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

// Sample data for scheduled collections
const regularCollections = [
  {
    id: 1,
    type: 'Recyclables',
    icon: RecycleIcon,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    frequency: 'Weekly',
    day: 'Monday',
    nextDate: '2023-11-20',
  },
  {
    id: 2,
    type: 'Organic Waste',
    icon: LeafyGreen,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    frequency: 'Weekly',
    day: 'Wednesday',
    nextDate: '2023-11-15',
  },
  {
    id: 3,
    type: 'General Waste',
    icon: Trash2,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    frequency: 'Weekly',
    day: 'Friday',
    nextDate: '2023-11-17',
  }
];

const specialCollections = [
  {
    id: 4,
    type: 'Bulk Items',
    icon: Package,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
    date: '2023-11-25',
    status: 'Confirmed',
    notes: 'Old furniture and large appliances',
  },
  {
    id: 5,
    type: 'Hazardous Waste',
    icon: AlertTriangle,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
    date: '2023-12-10',
    status: 'Pending',
    notes: 'Batteries, paint cans, and electronics',
  }
];

// Calendar event markers
const calendarEvents = [
  { date: new Date(2023, 10, 13), type: 'Organic Waste' },
  { date: new Date(2023, 10, 15), type: 'Recyclables' },
  { date: new Date(2023, 10, 17), type: 'General Waste' },
  { date: new Date(2023, 10, 20), type: 'Recyclables' },
  { date: new Date(2023, 10, 22), type: 'Organic Waste' },
  { date: new Date(2023, 10, 24), type: 'General Waste' },
  { date: new Date(2023, 10, 25), type: 'Bulk Items' },
  { date: new Date(2023, 10, 27), type: 'Recyclables' },
  { date: new Date(2023, 10, 29), type: 'Organic Waste' },
  { date: new Date(2023, 11, 1), type: 'General Waste' },
  { date: new Date(2023, 11, 4), type: 'Recyclables' },
  { date: new Date(2023, 11, 6), type: 'Organic Waste' },
  { date: new Date(2023, 11, 8), type: 'General Waste' },
  { date: new Date(2023, 11, 10), type: 'Hazardous Waste' },
];

const Scheduling = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);
  
  // Handle date selection in calendar
  const handleDateSelect = (selectedDate: Date) => {
    setDate(selectedDate);
    
    // Find events for the selected date
    const events = calendarEvents.filter(event => 
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear()
    );
    
    setSelectedEvents(events);
  };

  // Schedule new collection
  const handleScheduleCollection = () => {
    toast.success('Collection scheduled successfully!', {
      description: 'You will receive a confirmation notification.',
    });
    setOpenDialog(false);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800">Waste Collection Schedule</h1>
            <p className="text-muted-foreground">Manage your regular and special waste collection appointments</p>
          </div>
          
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button className="mt-4 md:mt-0 eco-button">
                <Plus className="mr-2 h-4 w-4" />
                Schedule Collection
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule New Collection</DialogTitle>
                <DialogDescription>
                  Request a new waste collection appointment.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="collection-type">Waste Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select waste type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recyclables">Recyclables</SelectItem>
                      <SelectItem value="organic">Organic Waste</SelectItem>
                      <SelectItem value="general">General Waste</SelectItem>
                      <SelectItem value="bulk">Bulk Items</SelectItem>
                      <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <div className="flex items-center border rounded-md p-2">
                    <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{format(date, 'PPP')}</span>
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                      <SelectItem value="evening">Evening (4pm - 8pm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="recurring" />
                  <Label htmlFor="recurring">Make this a recurring collection</Label>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button className="eco-button" onClick={handleScheduleCollection}>Schedule</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                Collection Calendar
              </CardTitle>
              <CardDescription>View and manage your waste collection schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar 
                mode="single" 
                selected={date} 
                onSelect={(date) => date && handleDateSelect(date)} 
                className="rounded-md border"
                modifiers={{
                  recyclables: calendarEvents
                    .filter(event => event.type === 'Recyclables')
                    .map(event => event.date),
                  organic: calendarEvents
                    .filter(event => event.type === 'Organic Waste')
                    .map(event => event.date),
                  general: calendarEvents
                    .filter(event => event.type === 'General Waste')
                    .map(event => event.date),
                  special: calendarEvents
                    .filter(event => ['Bulk Items', 'Hazardous Waste'].includes(event.type))
                    .map(event => event.date),
                }}
                modifiersStyles={{
                  recyclables: {
                    fontWeight: 'bold',
                    borderBottom: '2px solid #3b82f6',
                  },
                  organic: {
                    fontWeight: 'bold',
                    borderBottom: '2px solid #22c55e',
                  },
                  general: {
                    fontWeight: 'bold', 
                    borderBottom: '2px solid #ef4444',
                  },
                  special: {
                    fontWeight: 'bold',
                    borderBottom: '2px solid #8b5cf6',
                  },
                }}
              />
              
              {selectedEvents.length > 0 && (
                <div className="mt-6 p-4 border rounded-md bg-muted/30">
                  <h3 className="font-medium mb-3">Collections on {format(date, 'MMMM d, yyyy')}</h3>
                  <div className="space-y-2">
                    {selectedEvents.map((event, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-background rounded-md">
                        <div className={`w-3 h-3 rounded-full ${
                          event.type === 'Recyclables' ? 'bg-blue-500' :
                          event.type === 'Organic Waste' ? 'bg-green-500' :
                          event.type === 'General Waste' ? 'bg-red-500' :
                          'bg-purple-500'
                        }`}></div>
                        <span>{event.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  Collection Legend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Recyclables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Organic Waste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span>General Waste</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Special Collections</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Collection Reminders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-md">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Next Collection</h4>
                      <p className="text-sm text-muted-foreground">Organic Waste - Tomorrow</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-md">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <div>
                      <h4 className="font-medium">Holiday Notice</h4>
                      <p className="text-sm text-muted-foreground">No collection on November 23 (Thanksgiving)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="regular">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="regular">Regular Collections</TabsTrigger>
              <TabsTrigger value="special">Special Collections</TabsTrigger>
            </TabsList>
            
            <TabsContent value="regular">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {regularCollections.map((collection) => (
                  <Card key={collection.id}>
                    <CardHeader className={`${collection.bgColor}`}>
                      <div className="flex items-center gap-2">
                        <collection.icon className={`h-5 w-5 ${collection.color}`} />
                        <CardTitle className="text-lg">{collection.type}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Frequency:</span>
                          <span className="font-medium">{collection.frequency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Collection Day:</span>
                          <span className="font-medium">{collection.day}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Next Collection:</span>
                          <span className="font-medium">{format(new Date(collection.nextDate), 'MMM d, yyyy')}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">Modify</Button>
                      <Button variant="outline" size="sm" className="text-destructive">Pause</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="special">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialCollections.map((collection) => (
                  <Card key={collection.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <collection.icon className={`h-5 w-5 ${collection.color}`} />
                          <CardTitle className="text-lg">{collection.type}</CardTitle>
                        </div>
                        <Badge variant={collection.status === 'Confirmed' ? 'default' : 'outline'}>
                          {collection.status === 'Confirmed' ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <AlertCircle className="h-3 w-3 mr-1" />
                          )}
                          {collection.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Collection Date:</span>
                          <span className="font-medium">{format(new Date(collection.date), 'MMM d, yyyy')}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground block mb-1">Notes:</span>
                          <p className="text-sm">{collection.notes}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">Modify</Button>
                      <Button variant="outline" size="sm" className="text-destructive">Cancel</Button>
                    </CardFooter>
                  </Card>
                ))}
                
                <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-full">
                  <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground mb-4">Schedule a new special collection</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="eco-button">
                        Request Special Pickup
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Request Special Collection</DialogTitle>
                        <DialogDescription>
                          For bulk items, hazardous waste, and other special needs.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="special-type">Collection Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select collection type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bulk">Bulk Items</SelectItem>
                              <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                              <SelectItem value="electronics">Electronics</SelectItem>
                              <SelectItem value="construction">Construction Debris</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="special-date">Preferred Date</Label>
                          <div className="flex items-center border rounded-md p-2">
                            <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{format(date, 'PPP')}</span>
                          </div>
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="description">Description of Items</Label>
                          <textarea 
                            className="min-h-[100px] rounded-md border bg-transparent px-3 py-2 text-sm"
                            placeholder="Please describe the items for collection..."
                          />
                        </div>
                      </div>
                      
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button className="eco-button" onClick={() => toast.success('Special collection requested!')}>Submit Request</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Scheduling;
