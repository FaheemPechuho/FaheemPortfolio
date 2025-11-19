import CertificationsSection from '../CertificationsSection';

export default function CertificationsSectionExample() {
  const mockCertifications = [
    {
      id: "1",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialUrl: "https://aws.amazon.com/verification",
      skills: ["Cloud Architecture", "EC2, S3, RDS", "Scalability & Security"]
    },
    {
      id: "2",
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      credentialUrl: "https://coursera.org/verify/specialization",
      skills: ["Neural Networks", "CNN & RNN", "TensorFlow"]
    },
    {
      id: "3",
      title: "Machine Learning Engineering",
      issuer: "Coursera",
      date: "2023",
      credentialUrl: "https://coursera.org/verify",
      skills: ["ML Pipelines", "Model Deployment", "MLOps"]
    }
  ];

  return <CertificationsSection certifications={mockCertifications} />;
}
