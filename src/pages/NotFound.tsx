import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-gradient particles">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        <div className="space-y-4">
          <div className="bg-primary-gradient p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-glow animate-float">
            <AlertTriangle className="h-12 w-12 text-primary-foreground" />
          </div>
          
          <h1 className="text-6xl font-display font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        <Button 
          variant="hero" 
          size="xl" 
          onClick={() => window.location.href = '/'}
          className="group"
        >
          <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
