import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface USPItem {
  icon: any;
  title: string;
  description: string;
}

interface Achievement {
  title: string;
  icon: any;
}

interface USPSectionProps {
  elevatorPitch: string;
  usps: USPItem[];
  achievements?: Achievement[];
}

export default function USPSection({ elevatorPitch, usps, achievements }: USPSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-4" data-testid="section-usp" ref={ref}>
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-section-title">
            Why Work With Me?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-elevator-pitch">
            {elevatorPitch}
          </p>
          
          {achievements && achievements.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center" data-testid="container-achievements">
              {achievements.map((achievement, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-sm px-4 py-2 bg-primary/5 border-primary/20"
                  data-testid={`badge-achievement-${index}`}
                >
                  <achievement.icon className="w-4 h-4 mr-2 text-primary" />
                  {achievement.title}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="container-usp-grid">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card 
                  className="p-6 border-card-border hover-elevate active-elevate-2 transition-all duration-300 h-full"
                  data-testid={`card-usp-${index}`}
                >
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10">
                      <usp.icon className="w-6 h-6 text-primary" data-testid="icon-usp" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid="text-usp-title">
                    {usp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-usp-description">
                    {usp.description}
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
