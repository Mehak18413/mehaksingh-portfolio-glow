import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart3, FileSpreadsheet, Monitor, Briefcase } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "Java",
      level: 85,
      icon: <Code className="h-6 w-6" />,
      color: "hsl(var(--primary))",
    },
    {
      name: "Python", 
      level: 80,
      icon: <Code className="h-6 w-6" />,
      color: "hsl(var(--accent))",
    },
    {
      name: "HTML & CSS",
      level: 90,
      icon: <Monitor className="h-6 w-6" />,
      color: "hsl(var(--primary-glow))",
    },
    {
      name: "Excel (Advanced)",
      level: 95,
      icon: <FileSpreadsheet className="h-6 w-6" />,
      color: "hsl(var(--secondary))",
    },
    {
      name: "Power BI",
      level: 75,
      icon: <BarChart3 className="h-6 w-6" />,
      color: "hsl(var(--accent))",
    },
    {
      name: "MS Office Suite",
      level: 90,
      icon: <Briefcase className="h-6 w-6" />,
      color: "hsl(var(--primary))",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow">
            Technical <span className="text-glow">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-shadow">
            A comprehensive toolkit spanning programming, data analysis, and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 bg-card-gradient border-0 shadow-card hover-lift group animate-pulse-glow">
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110 animate-glow"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <div style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-bright">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                  </p>
                </div>
                <span className="text-sm font-medium text-bright" style={{ color: skill.color }}>
                  {skill.level}%
                </span>
              </div>
              
              <Progress 
                value={skill.level} 
                className="h-2"
              />
            </Card>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover-lift animate-float">
            <div className="bg-primary-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-glow">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-bright">Programming</h3>
            <p className="text-muted-foreground">Java, Python, HTML, CSS</p>
          </Card>

          <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover-lift animate-float" style={{animationDelay: '1s'}}>
            <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-glow">
              <BarChart3 className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-bright">Data Analytics</h3>
            <p className="text-muted-foreground">Excel, Power BI, Data Visualization</p>
          </Card>

          <Card className="p-6 text-center bg-card-gradient border-0 shadow-card hover-lift animate-float" style={{animationDelay: '2s'}}>
            <div className="bg-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center animate-glow">
              <Monitor className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-bright">Web Development</h3>
            <p className="text-muted-foreground">Frontend, Responsive Design</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;