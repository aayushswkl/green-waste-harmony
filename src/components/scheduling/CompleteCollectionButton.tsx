
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import CollectionFeedback from '@/components/feedback/CollectionFeedback';

interface CompleteCollectionButtonProps {
  collectionId: number;
  collectionType: string;
  onComplete: (id: number) => void;
}

const CompleteCollectionButton: React.FC<CompleteCollectionButtonProps> = ({ 
  collectionId, 
  collectionType,
  onComplete
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMarking, setIsMarking] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleMarkComplete = async () => {
    setIsMarking(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would update collection status in the backend
      onComplete(collectionId);
      
      toast.success('Collection marked as complete!', {
        description: 'You can now provide feedback on this collection.'
      });
      
      setIsCompleted(true);
    } catch (error) {
      toast.error('Failed to update collection. Please try again.');
    } finally {
      setIsMarking(false);
      setIsOpen(false);
    }
  };

  return (
    <div className="space-y-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button disabled={isCompleted} className="eco-button w-full">
            <CheckCircle className="h-4 w-4 mr-2" />
            Mark as Complete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Collection Completion</DialogTitle>
            <DialogDescription>
              Are you sure this {collectionType.toLowerCase()} collection has been completed?
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-md">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Please Confirm</h4>
                <p className="text-sm text-muted-foreground">
                  This action will mark the collection as complete. You cannot undo this action.
                </p>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isMarking}>
              Cancel
            </Button>
            <Button 
              className="eco-button" 
              onClick={handleMarkComplete} 
              disabled={isMarking}
            >
              {isMarking ? (
                <>
                  <div className="h-4 w-4 border-2 border-current border-t-transparent animate-spin rounded-full mr-2"></div>
                  Processing...
                </>
              ) : (
                'Confirm Completion'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {isCompleted && (
        <CollectionFeedback collectionId={collectionId} collectionType={collectionType} />
      )}
    </div>
  );
};

export default CompleteCollectionButton;
