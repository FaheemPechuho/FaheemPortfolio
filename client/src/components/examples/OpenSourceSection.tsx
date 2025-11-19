import OpenSourceSection from '../OpenSourceSection';

export default function OpenSourceSectionExample() {
  const mockContributions = [
    {
      id: "1",
      project: "tensorflow/tensorflow",
      description: "Improved performance of CNN layers for sign language recognition tasks by optimizing memory allocation.",
      prUrl: "https://github.com/tensorflow/tensorflow/pull/12345",
      impact: "15% faster inference time for image classification models",
      technologies: ["Python", "C++", "TensorFlow"],
      stars: 185
    },
    {
      id: "2",
      project: "huggingface/transformers",
      description: "Added support for custom BERT fine-tuning on low-resource languages with enhanced tokenization.",
      prUrl: "https://github.com/huggingface/transformers/pull/67890",
      impact: "Enabled NLP research for underrepresented languages",
      technologies: ["Python", "PyTorch", "BERT"],
      stars: 120
    }
  ];

  return <OpenSourceSection contributions={mockContributions} />;
}
