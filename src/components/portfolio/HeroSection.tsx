import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/mehak-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient particles overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
                Mehak <span className="text-glow bg-primary-gradient bg-clip-text text-transparent">Singh</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                BCA Student | Aspiring Software Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating innovative solutions through data analytics, software development, 
              and web technologies. Ready to make an impact in the tech industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline_hero" 
                size="xl"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                View Projects
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right content - Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-gradient rounded-full blur-3xl opacity-20 animate-glow"></div>
              <div className="relative bg-card-gradient rounded-3xl p-8 shadow-card hover-glow">
                <img 
                  src={heroImage}
                  alt="Mehak Singh - Professional Photo"
                  className="w-80 h-80 object-cover rounded-2xl shadow-soft animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

export default HeroSection;