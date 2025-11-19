import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  readTime: string;
  technologies: string[];
  url: string;
  featured?: boolean;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="py-24 px-4" data-testid="section-blog">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Technical Deep-Dives
          </h2>
          <p className="text-muted-foreground max-w-2xl" data-testid="text-section-description">
            In-depth articles on building production-ready AI/ML systems and full-stack applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="container-blog-posts">
          {posts.map((post, index) => (
            <Card 
              key={post.id}
              className={`p-6 border-card-border hover-elevate active-elevate-2 transition-all duration-300 ${
                post.featured ? 'border-primary' : ''
              }`}
              data-testid={`card-post-${index}`}
            >
              {post.featured && (
                <Badge variant="default" className="mb-3" data-testid="badge-featured">
                  Featured
                </Badge>
              )}
              
              <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span data-testid="text-read-time">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3" data-testid="text-post-title">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-post-description">
                {post.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4" data-testid="container-technologies">
                {post.technologies.map((tech, techIndex) => (
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
              
              <Button
                variant="ghost"
                className="group/btn"
                onClick={() => {
                  console.log(`Opening article: ${post.url}`);
                  window.open(post.url, '_blank');
                }}
                data-testid="button-read-article"
              >
                Read Article
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
