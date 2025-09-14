import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "mehaksingh8009@gmail.com",
      href: "mailto:mehaksingh8009@gmail.com",
      color: "hsl(var(--primary))",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "7571006026",
      href: "tel:7571006026",
      color: "hsl(var(--accent))",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "mehak-singh-a122452b5",
      href: "https://linkedin.com/in/mehak-singh-a122452b5",
      color: "hsl(217, 100%, 50%)",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "Mehak18413",
      href: "https://github.com/Mehak18413",
      color: "hsl(220, 14%, 20%)",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-shadow">
            Get In <span className="text-glow">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-shadow">
            Ready to discuss opportunities, collaborate on projects, or just have a conversation about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-card-gradient border-0 shadow-card">
              <h3 className="text-2xl font-display font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, interesting projects, 
                or potential collaborations. Feel free to reach out through any of the 
                channels below, and I'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-all duration-300 hover-lift group"
                  >
                    <div 
                      className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${contact.color}20` }}
                    >
                      <div style={{ color: contact.color }}>
                        {contact.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-card-gradient border-0 shadow-card">
              <h4 className="font-semibold mb-4">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open('mailto:mehaksingh8009@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                <Button 
                  variant="outline_hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open('tel:7571006026', '_self')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card-gradient border-0 shadow-card">
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission - for now just show success message
              alert('Thank you for your message! I\'ll get back to you soon.');
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;