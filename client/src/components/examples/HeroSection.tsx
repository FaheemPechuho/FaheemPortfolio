import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
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
        "DevOps",
        "PostgreSQL",
        "MongoDB"
      ]}
      onScrollToProjects={() => console.log('Scroll to projects')}
    />
  );
}
