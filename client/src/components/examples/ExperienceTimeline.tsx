import ExperienceTimeline from '../ExperienceTimeline';

export default function ExperienceTimelineExample() {
  const mockExperiences = [
    {
      id: "1",
      title: "Full Stack Developer",
      company: "Real Estate Tech Solutions",
      duration: "2023 - Present",
      description: "Led development of enterprise CRM/HRM systems for Pakistani real estate market, managing end-to-end architecture and deployment.",
      impact: "Successfully sold to 5+ companies, managing 10,000+ client records with 99.9% uptime",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      id: "2",
      title: "AI/ML Research Developer",
      company: "University Research Lab",
      duration: "2022 - 2023",
      description: "Developed deep learning models for sign language recognition and generative AI applications using state-of-the-art architectures.",
      impact: "Achieved 95% accuracy on sign language dataset, published research paper",
      technologies: ["Python", "TensorFlow", "PyTorch", "CNN", "BERT"]
    }
  ];

  return <ExperienceTimeline experiences={mockExperiences} />;
}
