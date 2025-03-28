
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, CheckCircle, AlertTriangle, ThumbsUp, ThumbsDown, Send, HelpCircle, Ban } from 'lucide-react';
import { toast } from 'sonner';

const commonIssues = [
  {
    id: 1,
    title: 'Missed Collection',
    description: 'Report a waste collection service that didn\'t occur as scheduled',
    icon: Ban,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
  },
  {
    id: 2,
    title: 'Improper Handling',
    description: 'Report issues with how waste was collected or handled by the service',
    icon: AlertTriangle,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
  },
  {
    id: 3,
    title: 'Scheduling Issue',
    description: 'Problems with the waste collection scheduling system',
    icon: ThumbsDown,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
  }
];

const Feedback = () => {
  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Feedback submitted successfully!', {
      description: 'Thank you for helping us improve our services.',
    });
  };

  const handleReportIssue = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Issue reported successfully!', {
      description: 'Our team will look into it and get back to you soon.',
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Feedback & Support</h1>
          <p className="text-muted-foreground">
            Help us improve our waste management services by sharing your experience or reporting issues.
          </p>
        </div>
        
        <Tabs defaultValue="report-issue" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="report-issue">Report an Issue</TabsTrigger>
            <TabsTrigger value="give-feedback">Give Feedback</TabsTrigger>
          </TabsList>
          
          <TabsContent value="report-issue" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      Common Issues
                    </CardTitle>
                    <CardDescription>
                      Select a common issue type or report a custom issue
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {commonIssues.map((issue) => (
                        <div 
                          key={issue.id} 
                          className={`p-4 rounded-lg ${issue.bgColor} cursor-pointer hover:shadow-md transition-shadow`}
                        >
                          <div className="flex items-start">
                            <issue.icon className={`h-5 w-5 ${issue.color} mt-0.5 mr-3`} />
                            <div>
                              <h3 className="font-medium mb-1">{issue.title}</h3>
                              <p className="text-sm text-muted-foreground">{issue.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="p-4 rounded-lg bg-blue-100 cursor-pointer hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-3" />
                          <div>
                            <h3 className="font-medium mb-1">Other Issue</h3>
                            <p className="text-sm text-muted-foreground">Report an issue not listed above</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Report an Issue</CardTitle>
                    <CardDescription>
                      Provide details about the problem you're experiencing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleReportIssue} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="issue-name">Full Name</Label>
                          <Input id="issue-name" placeholder="Your full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="issue-email">Email</Label>
                          <Input id="issue-email" type="email" placeholder="Your email address" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="issue-type">Issue Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an issue type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="missed">Missed Collection</SelectItem>
                            <SelectItem value="improper">Improper Handling</SelectItem>
                            <SelectItem value="scheduling">Scheduling Issue</SelectItem>
                            <SelectItem value="billing">Billing Problem</SelectItem>
                            <SelectItem value="app">App/Website Issue</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="issue-description">Description</Label>
                        <Textarea 
                          id="issue-description" 
                          placeholder="Please describe the issue in detail..." 
                          className="min-h-[150px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="issue-location">Location</Label>
                        <Input id="issue-location" placeholder="Address where the issue occurred" />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit" className="eco-button">
                          <Send className="mr-2 h-4 w-4" />
                          Submit Report
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="give-feedback" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Share Your Feedback
                </CardTitle>
                <CardDescription>
                  Your feedback helps us improve our waste management services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitFeedback} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="feedback-name">Name (Optional)</Label>
                      <Input id="feedback-name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback-email">Email (Optional)</Label>
                      <Input id="feedback-email" type="email" placeholder="Your email address" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="feedback-type">Feedback Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select feedback type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Feedback</SelectItem>
                        <SelectItem value="service">Service Quality</SelectItem>
                        <SelectItem value="app">Website/App Experience</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="compliment">Compliment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Rate Your Experience</Label>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="w-8 h-8 text-yellow-400 hover:text-yellow-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="feedback-message">Your Feedback</Label>
                    <Textarea 
                      id="feedback-message" 
                      placeholder="Share your thoughts, suggestions, or experiences..." 
                      className="min-h-[200px]"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="eco-button">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Feedback
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8 p-6 bg-green-50 rounded-xl">
              <div className="max-w-3xl mx-auto text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Your Feedback Matters</h3>
                <p className="text-muted-foreground mb-4">
                  We're committed to continuously improving our waste management services.
                  Your insights help us create a cleaner, greener community for everyone.
                </p>
                <div className="flex justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">94% Positive Feedback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">89% Issue Resolution Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Feedback;
