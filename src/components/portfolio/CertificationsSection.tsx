import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, Building2 } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Data Analytics Internship",
      organization: "Digipodium",
      duration: "July - August 2024",
      type: "Internship",
      description: "Hands-on experience in data analysis, visualization techniques, and real-world business intelligence applications.",
      skills: ["Data Analysis", "Python", "Data Visualization", "Business Intelligence"],
      icon: <Award className="h-6 w-6" />,
      color: "hsl(var(--primary))",
    },
    {
      title: "Technology Job Simulation", 
      organization: "Deloitte (via Forage)",
      duration: "2024",
      type: "Simulation",
      description: "Completed comprehensive technology consulting simulation covering client requirements analysis and solution development.",
      skills: ["Consulting", "Technology Solutions", "Client Management", "Problem Solving"],
      icon: <Building2 className="h-6 w-6" />,
      color: "hsl(var(--accent))",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow">
            Certifications & <span className="text-glow">Training</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-shadow">
            Continuous learning through professional certifications and hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-8 bg-card-gradient border-0 shadow-card hover-lift group overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="w-full h-full bg-primary rounded-full transform translate-x-8 -translate-y-8 scale-150"></div>
              </div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${cert.color}20` }}
                    >
                      <div style={{ color: cert.color }}>
                        {cert.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{cert.organization}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {cert.type}
                  </Badge>
                </div>

                {/* Duration */}
                <div className="flex items-center space-x-2 mb-4 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.duration}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors group-hover:underline">
                    <span>View Certificate</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <p className="text-muted-foreground">Professional Certifications</p>
          </Card>
          
          <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
            <div className="text-3xl font-bold text-accent mb-2">11</div>
            <p className="text-muted-foreground">Months Work Experience</p>
          </Card>
          
          <Card className="p-6 text-center bg-card-gradient border-0 shadow-card">
            <div className="text-3xl font-bold text-primary-glow mb-2">3+</div>
            <p className="text-muted-foreground">Technical Projects</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;