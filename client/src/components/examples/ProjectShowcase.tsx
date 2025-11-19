import ProjectShowcase from '../ProjectShowcase';

export default function ProjectShowcaseExample() {
  const mockProjects = [
    {
      id: "1",
      title: "Generative AI - Pixel RNN/CNN",
      description: "Advanced generative model implementation for image synthesis using Pixel RNN and Pixel CNN architectures.",
      technologies: ["Python", "PyTorch", "Pixel RNN", "Pixel CNN", "Deep Learning"],
      impact: "Generated high-quality images with novel architecture",
      category: "AI/ML",
      link: "#"
    },
    {
      id: "2",
      title: "Sign Language Recognition",
      description: "Real-time sign language detection system using CNN, ResNet, and Attention models for accessible communication.",
      technologies: ["TensorFlow", "CNN", "ResNet", "Attention", "OpenCV"],
      impact: "95% accuracy, real-time inference at 30fps",
      category: "AI/ML",
      link: "#"
    },
    {
      id: "3",
      title: "CRM/HRM Solutions",
      description: "Enterprise-grade CRM and HRM system successfully deployed to Pakistani real estate market.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      impact: "Sold to 5+ real estate companies, managing 10,000+ clients",
      category: "Commercial",
      link: "#"
    }
  ];

  return <ProjectShowcase projects={mockProjects} />;
}
