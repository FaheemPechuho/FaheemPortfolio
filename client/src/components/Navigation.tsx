import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["hero", "projects", "skills", "experience", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="font-mono text-lg font-bold cursor-pointer"
          onClick={() => scrollToSection("#hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary">$</span> abdul_faheem
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className={`font-mono text-sm transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === item.id && (
                <motion.span
                  className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </Button>
          ))}

          <div className="h-4 w-px bg-border mx-2" />

          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open("https://github.com/abdulfaheem", "_blank")}
            className="gap-2"
          >
            <Github className="w-4 h-4" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open("https://linkedin.com/in/abdulfaheem", "_blank")}
            className="gap-2"
          >
            <Linkedin className="w-4 h-4" />
          </Button>

          <div className="h-4 w-px bg-border mx-2" />
          <ThemeToggle />

          <Button
            size="sm"
            className="ml-2 gap-2"
            onClick={() => {
              // For now, scroll to contact. Later: download actual resume
              scrollToSection("#contact");
            }}
          >
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start font-mono"
                  onClick={() => scrollToSection(item.href)}
                >
                  <span className="text-primary mr-2">›</span>
                  {item.label}
                </Button>
              ))}

              <div className="h-px bg-border my-4" />

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => window.open("https://github.com/abdulfaheem", "_blank")}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={() => window.open("https://linkedin.com/in/abdulfaheem", "_blank")}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>

              <div className="flex justify-between items-center gap-4">
                <span className="text-sm font-mono text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>

              <Button
                className="w-full gap-2"
                onClick={() => scrollToSection("#contact")}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

