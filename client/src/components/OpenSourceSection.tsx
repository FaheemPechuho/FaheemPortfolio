import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, GitPullRequest, Star } from "lucide-react";

interface OpenSourceContribution {
  id: string;
  project: string;
  description: string;
  prUrl: string;
  impact: string;
  technologies: string[];
  stars?: number;
}

interface OpenSourceSectionProps {
  contributions: OpenSourceContribution[];
}

export default function OpenSourceSection({ contributions }: OpenSourceSectionProps) {
  return (
    <section className="py-24 px-4 bg-muted/20" data-testid="section-opensource">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Open Source Contributions
          </h2>
          <p className="text-muted-foreground max-w-2xl" data-testid="text-section-description">
            Contributing to the developer community through meaningful pull requests and collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="container-contributions">
          {contributions.map((contribution, index) => (
            <Card 
              key={contribution.id}
              className="p-6 border-card-border hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-contribution-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold" data-testid="text-project-name">
                    {contribution.project}
                  </h3>
                </div>
                {contribution.stars && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span data-testid="text-stars">{contribution.stars}k</span>
                  </div>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid="text-contribution-description">
                {contribution.description}
              </p>
              
              <div className="mb-4 p-3 bg-muted/30 rounded-md border border-border">
                <p className="text-xs font-mono text-foreground" data-testid="text-contribution-impact">
                  <span className="text-primary">Impact:</span> {contribution.impact}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4" data-testid="container-technologies">
                {contribution.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="font-mono text-xs"
                    data-testid={`badge-tech-${techIndex}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  console.log(`Opening PR: ${contribution.prUrl}`);
                  window.open(contribution.prUrl, '_blank');
                }}
                data-testid="button-view-pr"
              >
                <GitPullRequest className="w-4 h-4 mr-2" />
                View Pull Request
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
