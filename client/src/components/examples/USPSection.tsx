import USPSection from '../USPSection';
import { Sparkles, Target, Zap } from "lucide-react";

export default function USPSectionExample() {
  return (
    <USPSection
      elevatorPitch="I bridge the gap between cutting-edge AI/ML research and production-ready applications. With proven commercial success in the Pakistani market and deep technical expertise across the full stack, I deliver solutions that are both innovative and practical."
      usps={[
        {
          icon: Sparkles,
          title: "Commercial Success",
          description: "Proven track record with CRM/HRM solutions sold to 5+ companies, demonstrating ability to deliver products that customers actually pay for."
        },
        {
          icon: Target,
          title: "AI/ML Expertise",
          description: "Deep knowledge in generative AI, NLP, and computer vision with hands-on experience in BERT, CNN, ResNet, and Attention mechanisms."
        },
        {
          icon: Zap,
          title: "Full Stack Mastery",
          description: "End-to-end development capability from React/React Native frontends to Node.js/SpringBoot backends with DevOps expertise."
        }
      ]}
    />
  );
}
