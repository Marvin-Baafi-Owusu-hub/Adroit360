// src/components/FAQSection.jsx
import { useState } from 'react';
import { BsQuestionCircle, BsChevronDown } from 'react-icons/bs';
import ScrollReveal from './ScrollReveal';

const faqData = [
  {
    question: "What technology stack do you specialize in?",
    answer: "We primarily specialize in modern JavaScript frameworks like React, Node.js, and utilize Tailwind CSS for rapid and responsive styling. Our backend expertise includes Python/Django and various cloud platforms (AWS, Google Cloud)."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on complexity. A simple landing page may take 2-4 weeks, while a complex web application can take 3-6 months. We provide a detailed timeline after the discovery phase."
  },
  {
    question: "What is your process for software development?",
    answer: "We follow an Agile methodology, starting with Discovery, followed by Design (UI/UX), Development, Quality Assurance (QA), Deployment, and finally, ongoing Support."
  },
  {
    question: "Do you offer post-launch maintenance and support?",
    answer: "Yes, we offer flexible maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. Support includes bug fixes, security patches, and feature updates."
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className='flex items-center'>
            <BsQuestionCircle className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
            {question}
        </div>
        <BsChevronDown 
          className={`w-4 h-4 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-gray-600 leading-relaxed text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className=" pt-10 pb-9 md:pb-13 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ScrollReveal animation="slide-up">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={150}>
        <p className="text-xl text-gray-600 text-center mb-12">
          Find quick answers to the most common questions about our services.
        </p>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={300}>
        <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 p-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;