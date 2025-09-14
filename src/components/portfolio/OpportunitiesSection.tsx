import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Code, BarChart3, Monitor } from "lucide-react";

const OpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Data Analytics",
      icon: <BarChart3 className="h-8 w-8" />,
      description: "Leveraging data insights to drive business decisions",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Software Development", 
      icon: <Code className="h-8 w-8" />,
      description: "Building robust applications and solutions",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Web Development",
      icon: <Monitor className="h-8 w-8" />,
      description: "Creating modern, responsive web experiences",
      gradient: "from-green-500 to-teal-400",
    },
  ];

  return (
    <section id="opportunities" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 particles opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Banner */}
        <div className="text-center mb-16">
          <Card className="max-w-4xl mx-auto p-12 bg-card-gradient border-0 shadow-glow relative overflow-hidden">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-primary-gradient opacity-5 animate-glow"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-primary-gradient p-4 rounded-full animate-float">
                  <Sparkles className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-shadow">
                <span className="text-glow animate-pulse">Currently Seeking</span>
                <br />
                <span className="text-bright">
                  Opportunities
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-shadow">
                Ready to contribute fresh perspectives and technical expertise to innovative teams in{" "}
                <span className="text-accent font-semibold">Data Analytics</span> |{" "}
                <span className="text-primary font-semibold">Software Development</span> |{" "}
                <span className="text-secondary font-semibold">Web Development</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  <TrendingUp className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Let's Connect
                </Button>
                <Button variant="outline_hero" size="xl">
                  Download Resume
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Opportunity Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opp, index) => (
            <Card key={index} className="group bg-card-gradient border-0 shadow-card hover-lift overflow-hidden relative">
              {/* Gradient Header */}
              <div className={`h-24 bg-gradient-to-br ${opp.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4 text-white/80">
                  {opp.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {opp.title}
                </h3>
                <p className="text-muted-foreground">
                  {opp.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* What I Bring */}
        <div className="text-center">
          <h3 className="text-3xl font-display font-semibold mb-8">
            What I Bring to Your Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">Analytical mindset with creative solutions</p>
            </div>
            
            <div className="p-6 text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Quick Learning</h4>
              <p className="text-sm text-muted-foreground">Adaptable and eager to embrace new technologies</p>
            </div>
            
            <div className="p-6 text-center">
              <div className="text-2xl mb-2">🤝</div>
              <h4 className="font-semibold mb-2">Team Player</h4>
              <p className="text-sm text-muted-foreground">Collaborative approach with strong communication</p>
            </div>
            
            <div className="p-6 text-center">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="font-semibold mb-2">Fresh Ideas</h4>
              <p className="text-sm text-muted-foreground">Innovative thinking with modern perspectives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;