import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProjectCard
        title="Sign Language Recognition System"
        description="Deep learning system for real-time sign language recognition using CNN, ResNet, and Attention mechanisms."
        technologies={["Python", "TensorFlow", "CNN", "ResNet", "Computer Vision"]}
        impact="95% accuracy on test dataset with real-time inference"
        category="AI/ML"
        githubUrl="https://github.com/example/sign-language"
        demoUrl="https://demo.example.com"
        onViewDetails={() => console.log('View details clicked')}
      />
    </div>
  );
}
