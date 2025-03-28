
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-green-50/50">
        <div className="max-w-md text-center">
          <div className="mb-6 relative">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="h-10 w-10 text-red-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-green-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, 
            renamed, or is temporarily unavailable.
          </p>
          <Button className="eco-button">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
