import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>© 2025 Mehak Singh. All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-current animate-pulse" />
            <span>for amazing opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;