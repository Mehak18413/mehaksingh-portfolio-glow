import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, Award, Briefcase, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { id: 'about', label: 'About', icon: <User className="h-4 w-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-card-gradient backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-card">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`relative rounded-full px-4 py-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'hover:bg-primary/10 text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="flex items-center space-x-2">
                  {item.icon}
                  <span className="hidden lg:inline">{item.label}</span>
                </span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <Button
          variant="glass"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 z-50 shadow-glow"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed top-20 right-6 bg-card-gradient border border-border/50 rounded-2xl p-6 shadow-card z-50 min-w-[200px]">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-primary/10'
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Brand/Logo - Fixed position */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="glass"
          onClick={() => scrollToSection('home')}
          className="font-display font-bold text-lg shadow-glow"
        >
          MS
        </Button>
      </div>
    </>
  );
};

export default Navigation;