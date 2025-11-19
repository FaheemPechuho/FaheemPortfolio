import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  impact?: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  onViewDetails?: () => void;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  impact,
  category,
  githubUrl,
  demoUrl,
  onViewDetails
}: ProjectCardProps) {
  return (
    <motion.div
      className="h-full"
      whileHover={{ 
        scale: 1.03,
        rotateY: 3,
        rotateX: 3,
        transition: { duration: 0.3 }
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card
        className="group p-6 hover-elevate active-elevate-2 transition-all duration-300 border-card-border hover:border-primary h-full min-h-[420px] flex flex-col"
        data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <Badge variant="secondary" className="font-mono text-xs mb-3" data-testid="badge-category">
              {category}
            </Badge>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors" data-testid="text-project-title">
              {title}
            </h3>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-sm" data-testid="text-project-description">
            {description}
          </p>
          
          {impact && (
            <div className="p-3 bg-muted/30 rounded-md border border-border">
              <p className="text-xs font-mono text-foreground" data-testid="text-project-impact">
                <span className="text-primary">→</span> {impact}
              </p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2" data-testid="container-technologies">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="font-mono text-xs bg-background"
                data-testid={`badge-tech-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      
      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/60">
        {githubUrl && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              console.log(`Opening GitHub: ${githubUrl}`);
              window.open(githubUrl, '_blank');
            }}
            data-testid="button-github"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        )}
        {demoUrl && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              console.log(`Opening demo: ${demoUrl}`);
              window.open(demoUrl, '_blank');
            }}
            data-testid="button-demo"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        )}
        {onViewDetails && (
          <Button
            size="sm"
            variant="ghost"
            onClick={onViewDetails}
            data-testid="button-view-details"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </Card>
    </motion.div>
  );
}
