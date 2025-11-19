import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements?: string[];
}

interface EducationTimelineProps {
  educations: Education[];
}

export default function EducationTimeline({ educations }: EducationTimelineProps) {
  return (
    <section className="py-24 px-4 bg-muted/20" data-testid="section-education">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl" data-testid="text-section-description">
            Academic foundation in software engineering and computer science.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-8" data-testid="container-education-timeline">
            {educations.map((edu, index) => (
              <div key={edu.id} className="relative" data-testid={`education-item-${index}`}>
                <div className="hidden md:block absolute left-8 top-6 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background" />
                
                <Card className="md:ml-20 p-6 border-card-border hover-elevate">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1" data-testid="text-edu-degree">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium" data-testid="text-edu-institution">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span data-testid="text-edu-duration">{edu.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-edu-description">
                    {edu.description}
                  </p>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2" data-testid="container-achievements">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <p className="text-sm text-muted-foreground" data-testid={`text-achievement-${achIndex}`}>
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
