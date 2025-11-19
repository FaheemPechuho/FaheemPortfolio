import SkillsMatrix from '../SkillsMatrix';

export default function SkillsMatrixExample() {
  const mockSkills = [
    {
      category: "Frontend",
      icon: "⚛️",
      skills: [
        { name: "React/React Native", proficiency: 95 },
        { name: "TypeScript", proficiency: 90 },
        { name: "Tailwind CSS", proficiency: 92 }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", proficiency: 93 },
        { name: "SpringBoot", proficiency: 88 },
        { name: "RESTful APIs", proficiency: 95 }
      ]
    },
    {
      category: "AI/ML",
      icon: "🤖",
      skills: [
        { name: "NLP & BERT", proficiency: 90 },
        { name: "CNN/ResNet", proficiency: 88 },
        { name: "Generative AI", proficiency: 85 }
      ]
    }
  ];

  return <SkillsMatrix skillCategories={mockSkills} />;
}
