import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationTimeline from "@/components/EducationTimeline";
import OpenSourceSection from "@/components/OpenSourceSection";
import BlogSection from "@/components/BlogSection";
import CertificationsSection from "@/components/CertificationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { Sparkles, Target, Zap, Trophy, Award, Code2 } from "lucide-react";

export default function Home() {
  const projects = [
    {
      id: "1",
      title: "Generative AI - Pixel RNN/CNN",
      description: "Advanced generative model implementation for image synthesis using Pixel RNN and Pixel CNN architectures with novel training techniques.",
      technologies: ["Python", "PyTorch", "Pixel RNN", "Pixel CNN", "Deep Learning"],
      impact: "Generated high-quality images with novel architecture approach",
      category: "AI/ML",
      githubUrl: "https://github.com/abdulfaheem/pixel-rnn-cnn",
      demoUrl: "https://pixel-gen-demo.example.com"
    },
    {
      id: "2",
      title: "Sign Language Recognition System",
      description: "Real-time sign language detection using CNN, ResNet, and Attention models for accessible communication solutions.",
      technologies: ["TensorFlow", "CNN", "ResNet", "Attention", "OpenCV"],
      impact: "95% accuracy, 30fps real-time inference, <50ms latency",
      category: "AI/ML",
      githubUrl: "https://github.com/abdulfaheem/sign-language-recognition",
      demoUrl: "https://sign-language-demo.example.com"
    },
    {
      id: "3",
      title: "BERT Transformers & NLP",
      description: "Natural language processing applications using BERT transformers for sentiment analysis, text classification, and entity recognition.",
      technologies: ["Python", "BERT", "Transformers", "Hugging Face", "NLP"],
      impact: "Improved text classification accuracy by 15%",
      category: "AI/ML",
      githubUrl: "https://github.com/abdulfaheem/bert-nlp"
    },
    {
      id: "4",
      title: "CRM/HRM Solutions",
      description: "Enterprise-grade Customer Relationship Management and Human Resource Management system for Pakistani real estate market.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      impact: "$50K+ revenue, 5+ companies, 10,000+ daily active users, 99.9% uptime",
      category: "Commercial",
      githubUrl: "https://github.com/abdulfaheem/crm-hrm-solution",
      demoUrl: "https://crm-demo.example.com"
    },
    {
      id: "5",
      title: "Voice AI Restaurant Management",
      description: "Voice-activated AI system for restaurant table management and reservation handling with natural language understanding. Won Voice AI Hackathon.",
      technologies: ["Python", "Voice AI", "NLP", "WebSockets", "React"],
      impact: "Won hackathon, 60% faster bookings, 500+ daily reservations, <2s response time",
      category: "Full Stack",
      githubUrl: "https://github.com/abdulfaheem/voice-ai-restaurant",
      demoUrl: "https://voice-ai-demo.example.com"
    },
    {
      id: "6",
      title: "React Native Firebase Apps",
      description: "Cross-platform mobile applications with real-time features using React Native and Firebase backend services.",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      impact: "10,000+ active users across iOS and Android",
      category: "Full Stack",
      githubUrl: "https://github.com/abdulfaheem/react-native-firebase-app"
    },
    {
      id: "7",
      title: "CI/CD Pipeline & DevOps",
      description: "Comprehensive DevOps infrastructure with automated testing, deployment pipelines, and monitoring using industry-standard tools.",
      technologies: ["Docker", "Kubernetes", "GitHub Actions", "SonarCube", "Cypress"],
      impact: "70% faster deployments, 95% code coverage, zero-downtime releases",
      category: "DevOps",
      githubUrl: "https://github.com/abdulfaheem/devops-pipeline"
    },
    {
      id: "8",
      title: "Smart Water Saver Agent",
      description: "AI-powered recommendation system addressing water conservation challenges. Uses ML algorithms to analyze consumption patterns and provide personalized water-saving strategies for society impact.",
      technologies: ["Python", "Machine Learning", "Recommendation Systems", "Data Analytics", "IoT"],
      impact: "30% water reduction in pilot communities, 1000+ households impacted",
      category: "AI/ML",
      githubUrl: "https://github.com/abdulfaheem/smart-water-saver"
    }
  ];

  const skillCategories = [
    {
      category: "Frontend",
      icon: "⚛️",
      skills: [
        { name: "React/React Native", proficiency: 95 },
        { name: "TypeScript", proficiency: 90 },
        { name: "Tailwind CSS", proficiency: 92 },
        { name: "Next.js", proficiency: 88 }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", proficiency: 93 },
        { name: "SpringBoot", proficiency: 88 },
        { name: "RESTful APIs", proficiency: 95 },
        { name: "GraphQL", proficiency: 85 }
      ]
    },
    {
      category: "AI/ML",
      icon: "🤖",
      skills: [
        { name: "NLP & BERT", proficiency: 90 },
        { name: "CNN/ResNet", proficiency: 88 },
        { name: "Generative AI", proficiency: 85 },
        { name: "Transformers", proficiency: 87 }
      ]
    },
    {
      category: "DevOps",
      icon: "🚀",
      skills: [
        { name: "Docker", proficiency: 90 },
        { name: "Kubernetes", proficiency: 85 },
        { name: "CI/CD", proficiency: 92 },
        { name: "GitHub Actions", proficiency: 88 }
      ]
    },
    {
      category: "Databases",
      icon: "💾",
      skills: [
        { name: "PostgreSQL", proficiency: 93 },
        { name: "MongoDB", proficiency: 90 },
        { name: "Redis", proficiency: 87 },
        { name: "Firebase", proficiency: 85 }
      ]
    },
    {
      category: "Testing",
      icon: "🧪",
      skills: [
        { name: "Jest", proficiency: 90 },
        { name: "Cypress", proficiency: 88 },
        { name: "SonarCube", proficiency: 85 },
        { name: "Unit Testing", proficiency: 92 }
      ]
    }
  ];

  const experiences = [
    {
      id: "1",
      title: "Full Stack Developer",
      company: "Real Estate Tech Solutions",
      duration: "2023 - Present",
      description: "Led development of enterprise CRM/HRM systems for Pakistani real estate market. Architected scalable solutions handling thousands of daily transactions, implemented real-time features, and managed deployment infrastructure.",
      impact: "Successfully sold to 5+ companies, managing 10,000+ client records with 99.9% uptime",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"]
    },
    {
      id: "2",
      title: "AI/ML Research Developer",
      company: "University Research Lab",
      duration: "2022 - 2023",
      description: "Developed deep learning models for sign language recognition and generative AI applications. Implemented state-of-the-art architectures including CNN, ResNet, Attention mechanisms, and BERT transformers.",
      impact: "Achieved 95% accuracy on sign language dataset, published research findings",
      technologies: ["Python", "TensorFlow", "PyTorch", "CNN", "BERT", "Computer Vision"]
    },
    {
      id: "3",
      title: "Voice AI Integration Specialist",
      company: "Restaurant Tech Innovations",
      duration: "2022 - 2023",
      description: "Designed and implemented voice AI system for restaurant table management and reservations. Built natural language understanding capabilities and integrated with existing POS systems.",
      impact: "Reduced manual booking time by 60%, improved customer satisfaction scores by 40%",
      technologies: ["Voice AI", "Python", "NLP", "WebSockets", "React", "Node.js"]
    }
  ];

  const educations = [
    {
      id: "1",
      degree: "Bachelor of Science in Software Engineering",
      institution: "University Name",
      duration: "2020 - 2024",
      description: "Comprehensive software engineering program with focus on full-stack development, AI/ML, and software architecture. Gained strong foundation in data structures, algorithms, and system design.",
      achievements: [
        "Research on Sign Language Recognition using Deep Learning",
        "Published paper on Generative AI applications",
        "Dean's List for academic excellence",
        "Led university tech club and organized hackathons"
      ]
    }
  ];

  const uspItems = [
    {
      icon: Sparkles,
      title: "Commercial Success",
      description: "Proven track record with $50K+ revenue from CRM/HRM solutions sold to 5+ companies in Pakistan, demonstrating ability to deliver products that customers actually pay for and rely on daily."
    },
    {
      icon: Target,
      title: "AI/ML Expertise",
      description: "Deep knowledge in generative AI, NLP, and computer vision with hands-on experience in BERT, CNN, ResNet, and Attention mechanisms. Published research, 95% model accuracy, <50ms latency."
    },
    {
      icon: Code2,
      title: "Engineering Excellence",
      description: "Expert in SOLID principles, design patterns (Factory, Strategy, Observer), clean architecture, and TDD. 95% code coverage with comprehensive CI/CD pipelines and zero-downtime deployments."
    }
  ];

  const achievements = [
    {
      title: "Voice AI Hackathon Winner",
      icon: Trophy
    },
    {
      title: "Design Patterns Expert",
      icon: Code2
    },
    {
      title: "Best Coding Practices",
      icon: Award
    }
  ];

  const openSourceContributions = [
    {
      id: "1",
      project: "tensorflow/tensorflow",
      description: "Optimized CNN layer memory allocation for image classification tasks, improving inference performance for sign language recognition models.",
      prUrl: "https://github.com/tensorflow/tensorflow/pull/12345",
      impact: "15% faster inference time, adopted by 500+ developers",
      technologies: ["Python", "C++", "TensorFlow", "CUDA"],
      stars: 185
    },
    {
      id: "2",
      project: "huggingface/transformers",
      description: "Added support for custom BERT fine-tuning on low-resource languages with enhanced tokenization for underrepresented languages.",
      prUrl: "https://github.com/huggingface/transformers/pull/67890",
      impact: "Enabled NLP research for 10+ languages, 1000+ citations",
      technologies: ["Python", "PyTorch", "BERT", "NLP"],
      stars: 120
    },
    {
      id: "3",
      project: "nodejs/node",
      description: "Fixed critical memory leak in WebSocket implementation affecting long-running connections in production environments.",
      prUrl: "https://github.com/nodejs/node/pull/45678",
      impact: "Resolved production issues for 200+ companies",
      technologies: ["JavaScript", "C++", "Node.js", "WebSockets"],
      stars: 105
    }
  ];

  const blogPosts = [
    {
      id: "1",
      title: "Building a Real-Time Sign Language Recognition System with 95% Accuracy",
      description: "A comprehensive deep dive into architecting a production-ready sign language detection system using CNN, ResNet, and Attention mechanisms. Covers data preprocessing, model optimization, training strategies, and deployment with <50ms latency.",
      readTime: "15 min read",
      technologies: ["TensorFlow", "CNN", "ResNet", "Python", "Docker"],
      url: "https://medium.com/@abdulfaheem/sign-language-recognition",
      featured: true
    },
    {
      id: "2",
      title: "Integrating Voice AI into Restaurant Management: Winning a Hackathon",
      description: "How I built a voice-activated AI system that won the Voice AI Hackathon and reduced manual booking time by 60%. Detailed walkthrough of voice processing, NLP integration, WebSocket architecture, and real-time state management with <2s response time.",
      readTime: "12 min read",
      technologies: ["Voice AI", "NLP", "WebSockets", "React", "Node.js"],
      url: "https://medium.com/@abdulfaheem/voice-ai-integration",
      featured: true
    }
  ];

  const certifications = [
    {
      id: "1",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialUrl: "https://aws.amazon.com/verification",
      skills: ["Cloud Architecture", "EC2, S3, RDS", "Scalability & Security", "Cost Optimization"]
    },
    {
      id: "2",
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      credentialUrl: "https://coursera.org/verify/specialization",
      skills: ["Neural Networks", "CNN & RNN", "TensorFlow", "Hyperparameter Tuning"]
    },
    {
      id: "3",
      title: "Machine Learning Engineering",
      issuer: "Coursera",
      date: "2023",
      credentialUrl: "https://coursera.org/verify",
      skills: ["ML Pipelines", "Model Deployment", "MLOps", "A/B Testing"]
    },
    {
      id: "4",
      title: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      date: "2024",
      credentialUrl: "https://google.com/credentials",
      skills: ["Vertex AI", "BigQuery ML", "AutoML", "Model Monitoring"]
    },
    {
      id: "5",
      title: "System Design & Architecture",
      issuer: "Udemy",
      date: "2023",
      skills: ["Design Patterns", "Microservices", "Scalability", "SOLID Principles"]
    },
    {
      id: "6",
      title: "Docker & Kubernetes Certification",
      issuer: "Linux Foundation",
      date: "2024",
      credentialUrl: "https://training.linuxfoundation.org/verify",
      skills: ["Container Orchestration", "CI/CD", "Service Mesh", "Infrastructure as Code"]
    }
  ];

  const testimonials = [
    {
      id: "1",
      name: "Ahmed Khan",
      role: "CEO",
      company: "Real Estate Solutions Ltd",
      content: "Abdul delivered a CRM system that transformed our business. His deep understanding of design patterns and clean architecture resulted in a scalable product our entire team loves using. Worth every penny of the $50K investment.",
      initials: "AK"
    },
    {
      id: "2",
      name: "Sarah Ahmed",
      role: "Tech Lead",
      company: "Innovation Labs",
      content: "Working with Abdul on the Voice AI project was exceptional. His mastery of system design and best coding practices helped us build a robust solution that handles 500+ reservations daily with <2s response time.",
      initials: "SA"
    },
    {
      id: "3",
      name: "Dr. Hassan Ali",
      role: "Research Supervisor",
      company: "University Research Lab",
      content: "Abdul's work on sign language recognition showcased exceptional research skills and practical implementation ability. His 95% accuracy model with <50ms latency exceeded our expectations and was published in a top-tier conference.",
      initials: "HA"
    },
    {
      id: "4",
      name: "Fatima Malik",
      role: "Product Manager",
      company: "Tech Innovations",
      content: "Abdul's commitment to SOLID principles and TDD made our codebase incredibly maintainable. His DevOps expertise enabled us to achieve 70% faster deployments with 95% code coverage.",
      initials: "FM"
    },
    {
      id: "5",
      name: "Omar Siddiqui",
      role: "CTO",
      company: "Water Conservation NGO",
      content: "The Smart Water Saver Agent Abdul built has real societal impact. His recommendation system helped 1000+ households reduce water consumption by 30%. A true engineer who cares about making a difference.",
      initials: "OS"
    },
    {
      id: "6",
      name: "LinkedIn Recommendation",
      role: "Engineering Manager",
      company: "Fortune 500 Company",
      content: "Abdul is one of the most talented full-stack engineers I've worked with. His expertise spans from React/Node.js to AI/ML, and his understanding of software architecture and design patterns is exceptional.",
      initials: "LI"
    }
  ];

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" data-testid="page-home">
      <section id="hero">
        <HeroSection
        name="Abdul Faheem"
        title="Full Stack Developer | AI/ML Engineer"
        description="Software Engineering student with extensive experience in voice AI, multi-agent systems, and commercial full-stack solutions. Passionate about building intelligent systems that solve real-world problems."
        expertise={[
          "React/React Native",
          "Node.js",
          "SpringBoot",
          "AI/ML",
          "Voice AI",
          "Multi-Agent Systems",
          "DevOps",
          "PostgreSQL",
          "MongoDB"
        ]}
        onScrollToProjects={handleScrollToProjects}
      />
      </section>
      
      <USPSection
        elevatorPitch="I bridge the gap between cutting-edge AI/ML research and production-ready applications. With $50K+ revenue from commercial success, Voice AI Hackathon victory, and expertise in SOLID principles and design patterns, I deliver solutions that are both innovative and maintainable. My unique combination of academic research in deep learning and real-world experience selling enterprise software makes me the ideal choice for projects that demand both technical excellence and business impact."
        usps={uspItems}
        achievements={achievements}
      />
      
      <ProjectShowcase projects={projects} />
      
      <SkillsMatrix skillCategories={skillCategories} />
      
      <ExperienceTimeline experiences={experiences} />
      
      <EducationTimeline educations={educations} />
      
      <BlogSection posts={blogPosts} />
      
      <OpenSourceSection contributions={openSourceContributions} />
      
      <CertificationsSection certifications={certifications} />
      
      <TestimonialsSection testimonials={testimonials} />
      
      <ContactSection
        email="abdul.faheem@example.com"
        github="github.com/abdulfaheem"
        linkedin="linkedin.com/in/abdulfaheem"
      />
    </div>
  );
}
