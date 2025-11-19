import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2 } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section className="py-24 px-4 bg-muted/20" data-testid="section-certifications">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Certifications & Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl" data-testid="text-section-description">
            Continuous learning through industry-recognized certifications and specialized courses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="container-certifications">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id}
              className="p-6 border-card-border hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-certification-${index}`}
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-3">
                  <Award className="w-6 h-6 text-primary" data-testid="icon-award" />
                </div>
                <h3 className="text-lg font-semibold mb-1" data-testid="text-cert-title">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-1" data-testid="text-cert-issuer">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground" data-testid="text-cert-date">
                  {cert.date}
                </p>
              </div>
              
              <div className="space-y-2 mb-4" data-testid="container-skills">
                {cert.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground" data-testid={`text-skill-${skillIndex}`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              {cert.credentialUrl && (
                <button
                  className="text-sm text-primary font-medium hover:underline"
                  onClick={() => {
                    console.log(`Opening credential: ${cert.credentialUrl}`);
                    window.open(cert.credentialUrl, '_blank');
                  }}
                  data-testid="link-credential"
                >
                  View Credential →
                </button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
