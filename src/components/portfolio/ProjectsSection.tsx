import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Music, Briefcase, Gamepad2 } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Spotify Data Analysis",
      description: "Comprehensive analysis of Spotify streaming data using Python and data visualization libraries. Insights into user behavior, popular genres, and listening patterns.",
      icon: <Music className="h-8 w-8" />,
      tags: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Job Portal Platform",
      description: "Full-stack web application built with Python Django. Features job posting, candidate profiles, application tracking, and employer dashboard.",
      icon: <Briefcase className="h-8 w-8" />,
      tags: ["Python", "Django", "HTML/CSS", "Database"],
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Mini Games Collection",
      description: "Interactive gaming suite featuring Snake, Rock Paper Scissors, and Tic Tac Toe. Built with clean UI/UX and engaging gameplay mechanics.",
      icon: <Gamepad2 className="h-8 w-8" />,
      tags: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
      gradient: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow">
            Featured <span className="text-glow">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-shadow">
            Showcasing practical applications of my technical skills through innovative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card-gradient border-0 shadow-card hover-lift overflow-hidden">
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="glass" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="glass" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-bright animate-float">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-shadow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="pt-4">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Project Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button variant="hero" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;