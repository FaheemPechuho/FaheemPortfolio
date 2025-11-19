import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, useReducedMotion } from "framer-motion";

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

interface SkillsMatrixProps {
  skillCategories: SkillCategory[];
}

export default function SkillsMatrix({ skillCategories }: SkillsMatrixProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-4 bg-muted/20" data-testid="section-skills">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl" data-testid="text-section-description">
            Comprehensive expertise across modern development stacks, AI/ML frameworks, and DevOps tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="container-skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card 
                className="p-6 border-card-border hover:shadow-xl transition-shadow duration-300"
                data-testid={`card-skill-category-${categoryIndex}`}
              >
                <motion.div
                  whileHover={{
                    rotateX: shouldReduceMotion ? 0 : 6,
                    rotateY: shouldReduceMotion ? 0 : -6,
                    translateZ: shouldReduceMotion ? 0 : 8,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl" data-testid="icon-category">
                      {category.icon}
                    </span>
                    <h3 className="text-lg font-semibold" data-testid="text-category-name">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} data-testid={`container-skill-${categoryIndex}-${skillIndex}`}>
                        <div className="mb-2">
                          <span className="text-sm font-medium" data-testid="text-skill-name">
                            {skill.name}
                          </span>
                        </div>
                        <Progress 
                          value={skill.proficiency} 
                          className="h-2"
                          data-testid="progress-proficiency"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
