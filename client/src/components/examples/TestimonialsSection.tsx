import TestimonialsSection from '../TestimonialsSection';

export default function TestimonialsSectionExample() {
  const mockTestimonials = [
    {
      id: "1",
      name: "Ahmed Khan",
      role: "CEO",
      company: "Real Estate Solutions Ltd",
      content: "Abdul delivered a CRM system that transformed our business. His technical expertise and understanding of our market needs resulted in a product our entire team loves using daily.",
      initials: "AK"
    },
    {
      id: "2",
      name: "Sarah Ahmed",
      role: "Tech Lead",
      company: "Innovation Labs",
      content: "Working with Abdul on the Voice AI project was impressive. His deep understanding of NLP and system architecture helped us reduce booking time by 60%. Highly recommend!",
      initials: "SA"
    },
    {
      id: "3",
      name: "Dr. Hassan Ali",
      role: "Research Supervisor",
      company: "University Research Lab",
      content: "Abdul's work on sign language recognition showcased exceptional research skills and practical implementation ability. His 95% accuracy model exceeded our expectations.",
      initials: "HA"
    }
  ];

  return <TestimonialsSection testimonials={mockTestimonials} />;
}
