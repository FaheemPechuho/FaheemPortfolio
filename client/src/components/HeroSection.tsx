import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import AuroraBackground from "@/components/backgrounds/Aurora";

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  expertise: string[];
  onScrollToProjects?: () => void;
}

export default function HeroSection({
  name,
  title,
  description,
  expertise,
  onScrollToProjects
}: HeroSectionProps) {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const titles = [
    "Full Stack Developer",
    "AI/ML Engineer",
    "Software Engineering Student"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const typingDelay = shouldReduceMotion ? 0 : 100;
    const deletingDelay = shouldReduceMotion ? 0 : 50;
    const idleDelay = shouldReduceMotion ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedTitle.length < currentTitle.length) {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), idleDelay);
        }
      } else {
        if (displayedTitle.length > 0) {
          setDisplayedTitle(displayedTitle.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? deletingDelay : typingDelay);

    return () => clearTimeout(timeout);
  }, [displayedTitle, currentIndex, isDeleting, shouldReduceMotion]);

  const highlightStats = [
    { label: "Commercial Revenue", value: "$50K+", accent: "from-primary/20 to-primary/5" },
    { label: "AI Accuracy", value: "95%", accent: "from-secondary/20 to-secondary/5" },
    { label: "Deployment Speed", value: "70% faster", accent: "from-accent/20 to-accent/5" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <AuroraBackground />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(88, 166, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(88, 166, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      
      <div className="max-w-5xl mx-auto text-center relative z-10" style={{ perspective: "1200px" }}>
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-muted-foreground" data-testid="text-terminal-prompt">
            $ whoami
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight" 
          data-testid="text-name"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {name}
        </motion.h1>
        
        <motion.div 
          className="h-12 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-mono text-primary" data-testid="text-title">
            {displayedTitle}
            <span className="animate-pulse">|</span>
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" 
          data-testid="text-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 justify-center mb-12" 
          data-testid="container-expertise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {expertise.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
              whileHover={{
                scale: shouldReduceMotion ? 1 : 1.08,
                rotateX: shouldReduceMotion ? 0 : 6,
                rotateY: shouldReduceMotion ? 0 : -6,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Badge 
                variant="secondary" 
                className="font-mono text-xs px-3 py-1"
                data-testid={`badge-expertise-${index}`}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button 
            size="lg" 
            onClick={onScrollToProjects}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              const contact = document.getElementById('contact');
              contact?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="button-get-in-touch"
          >
            Get in Touch
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {highlightStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`rounded-2xl border border-white/5 bg-gradient-to-br ${stat.accent} p-5 text-left hover:shadow-xl`}
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{
                rotateX: shouldReduceMotion ? 0 : 8,
                rotateY: shouldReduceMotion ? 0 : -6,
                translateZ: shouldReduceMotion ? 0 : 12,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <p className="text-sm uppercase tracking-widest text-muted-foreground font-mono">
                {stat.label}
              </p>
              <p className="text-3xl font-semibold mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
