import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Clock, Award } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "Modern Girls College of Professional Studies",
      duration: "2022 - 2025",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "12th Grade (ISC Board)",
      institution: "Completed in 2022",
      duration: "2020 - 2022", 
      icon: <Award className="h-6 w-6" />,
    },
    {
      degree: "10th Grade (ICSE Board)",
      institution: "Completed in 2020",
      duration: "2018 - 2020",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="bg-primary-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate and adaptable learner committed to continuous growth and delivering impactful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Introduction */}
          <div className="space-y-6">
            <Card className="p-8 bg-card-gradient border-0 shadow-card hover-lift">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-gradient p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Career Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To contribute my skills in data analytics, software development, and web development 
                    while continuously learning and delivering impactful solutions that drive innovation 
                    and create value for organizations and communities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient border-0 shadow-card hover-lift">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Customer Support Specialist</strong> at Adda247 
                    <br />
                    <span className="text-sm text-primary">11 months of experience</span>
                    <br />
                    Enhanced problem-solving skills, customer relationship management, 
                    and developed strong communication abilities in fast-paced environments.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-semibold text-center mb-8">Education</h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card-gradient border-0 shadow-card hover-lift group">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-gradient p-3 rounded-lg group-hover:scale-110 transition-transform">
                    {edu.icon}
                    <span className="text-primary-foreground"></span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-primary font-medium">{edu.duration}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;