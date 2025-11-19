import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";

interface ContactLink {
  icon: any;
  label: string;
  value: string;
  href: string;
}

interface ContactSectionProps {
  email?: string;
  github?: string;
  linkedin?: string;
}

export default function ContactSection({ 
  email = "abdul.faheem@example.com",
  github = "github.com/abdulfaheem",
  linkedin = "linkedin.com/in/abdulfaheem"
}: ContactSectionProps) {
  const contacts: ContactLink[] = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`
    },
    {
      icon: Github,
      label: "GitHub",
      value: github,
      href: `https://${github}`
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: linkedin,
      href: `https://${linkedin}`
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-muted/20" data-testid="section-contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Let's Build Something Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-section-description">
            Open to collaborations, opportunities, and interesting projects. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-testid="container-contact-cards">
          {contacts.map((contact, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate active-elevate-2 border-card-border hover:border-primary transition-all duration-300"
              data-testid={`card-contact-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-lg bg-primary/10">
                  <contact.icon className="w-6 h-6 text-primary" data-testid="icon-contact" />
                </div>
                <h3 className="font-semibold mb-2" data-testid="text-contact-label">
                  {contact.label}
                </h3>
                <a 
                  href={contact.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Opening ${contact.label}: ${contact.href}`);
                  }}
                  data-testid={`link-contact-${index}`}
                >
                  {contact.value}
                </a>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-mono" data-testid="text-footer">
            © 2024 Abdul Faheem. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
