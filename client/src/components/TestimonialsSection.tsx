import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  initials: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-24 px-4" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-section-description">
            What clients and colleagues say about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="container-testimonials">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-6 border-card-border hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic" data-testid="text-testimonial-content">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <Avatar data-testid="avatar-testimonial">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold" data-testid="text-testimonial-name">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-testimonial-role">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary" data-testid="text-testimonial-company">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
