
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { CheckCircle, MessageSquare, Star } from 'lucide-react';

interface CollectionFeedbackProps {
  collectionId: number;
  collectionType: string;
}

const CollectionFeedback: React.FC<CollectionFeedbackProps> = ({ collectionId, collectionType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would send data to a backend API
      console.log({
        collectionId,
        rating,
        feedback,
        submittedAt: new Date().toISOString()
      });
      
      toast.success('Thank you for your feedback!', {
        description: 'Your feedback helps us improve our service.'
      });
      
      // Close dialog and reset form
      setIsOpen(false);
      setRating(0);
      setFeedback('');
    } catch (error) {
      toast.error('Failed to submit feedback. Please try again.');
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <MessageSquare className="h-4 w-4" />
          Leave Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Collection Feedback
          </DialogTitle>
          <DialogDescription>
            How was your {collectionType.toLowerCase()} collection experience?
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Your Rating</Label>
            <div className="flex justify-center py-2">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={`w-8 h-8 focus:outline-none`}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <Star
                      className={`h-7 w-7 ${
                        ratingValue <= (hover || rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="feedback">Additional Comments</Label>
            <Textarea
              id="feedback"
              placeholder="Share your experience with this collection..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button 
            className="eco-button" 
            onClick={handleSubmit} 
            disabled={isSubmitting || rating === 0}
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 border-2 border-current border-t-transparent animate-spin rounded-full mr-2"></div>
                Submitting...
              </>
            ) : (
              'Submit Feedback'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CollectionFeedback;
