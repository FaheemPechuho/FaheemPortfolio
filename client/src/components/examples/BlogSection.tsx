import BlogSection from '../BlogSection';

export default function BlogSectionExample() {
  const mockPosts = [
    {
      id: "1",
      title: "Building a Real-Time Sign Language Recognition System with 95% Accuracy",
      description: "A deep dive into architecting a production-ready sign language detection system using CNN, ResNet, and Attention mechanisms. Learn about data preprocessing, model optimization, and deployment strategies.",
      readTime: "15 min read",
      technologies: ["TensorFlow", "CNN", "ResNet", "Python", "Docker"],
      url: "https://medium.com/@abdulfaheem/sign-language-recognition",
      featured: true
    },
    {
      id: "2",
      title: "Integrating Voice AI into Restaurant Management: A Complete Guide",
      description: "How I built a voice-activated AI system that reduced manual booking time by 60%. Covers voice processing, NLP integration, WebSocket architecture, and real-time state management.",
      readTime: "12 min read",
      technologies: ["Voice AI", "NLP", "WebSockets", "React", "Node.js"],
      url: "https://medium.com/@abdulfaheem/voice-ai-integration",
      featured: true
    }
  ];

  return <BlogSection posts={mockPosts} />;
}
