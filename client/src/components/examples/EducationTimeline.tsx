import EducationTimeline from '../EducationTimeline';

export default function EducationTimelineExample() {
  const mockEducations = [
    {
      id: "1",
      degree: "Bachelor of Science in Software Engineering",
      institution: "University Name",
      duration: "2020 - 2024",
      description: "Comprehensive software engineering program with focus on full-stack development, AI/ML, and software architecture.",
      achievements: [
        "Research on Sign Language Recognition using Deep Learning",
        "Published paper on Generative AI applications",
        "Dean's List for academic excellence"
      ]
    }
  ];

  return <EducationTimeline educations={mockEducations} />;
}
