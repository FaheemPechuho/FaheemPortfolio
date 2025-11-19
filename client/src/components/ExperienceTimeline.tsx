import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  impact: string;
  technologies: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="py-24 px-4" data-testid="section-experience">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl" data-testid="text-section-description">
            Real-world impact through commercial projects and innovative solutions.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-8" data-testid="container-timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative" data-testid={`timeline-item-${index}`}>
                <div className="hidden md:block absolute left-8 top-6 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background" />
                
                <Card className="md:ml-20 p-6 border-card-border hover-elevate">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1" data-testid="text-exp-title">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium" data-testid="text-exp-company">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span data-testid="text-exp-duration">{exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-exp-description">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4 p-3 bg-muted/30 rounded-md border border-border">
                    <p className="text-sm font-medium" data-testid="text-exp-impact">
                      <span className="text-primary font-mono">Impact:</span> {exp.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2" data-testid="container-exp-tech">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="font-mono text-xs"
                        data-testid={`badge-tech-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
