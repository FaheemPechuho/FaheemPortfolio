import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import ProjectSkeleton from "./ProjectSkeleton";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  impact?: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(projects);
  const [isFiltering, setIsFiltering] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  
  const categories = ["All", "AI/ML", "Full Stack", "Commercial", "DevOps"];
  
  useEffect(() => {
    setDisplayedProjects(projects);
  }, [projects]);

  useEffect(() => {
    setIsFiltering(true);
    const timeout = setTimeout(() => {
      const filtered =
        selectedCategory === "All"
          ? projects
          : projects.filter((p) => p.category === selectedCategory);
      setDisplayedProjects(filtered);
      setIsFiltering(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [selectedCategory, projects]);

  return (
    <section id="projects" className="py-24 px-4" data-testid="section-projects" ref={ref}>
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-section-title">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl" data-testid="text-section-description">
            A selection of commercial solutions, AI/ML innovations, and full-stack applications
            that showcase my technical expertise and problem-solving capabilities.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-12" data-testid="container-filters">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="font-mono text-sm"
              data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" data-testid="container-project-grid">
          {isFiltering ? (
            Array.from({ length: 3 }).map((_, index) => <ProjectSkeleton key={index} />)
          ) : (
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => (
                <motion.div
                  className="h-full"
                  key={project.id}
                  initial={{ opacity: 0, y: 50, rotateX: 6 }}
                  animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </section>
  );
}
