// src/components/HowItWorks.jsx
import React, { useState } from 'react';
import { IoIosColorFilter, IoIosCodeWorking, IoIosRocket, IoIosSync } from 'react-icons/io';
import ScrollReveal from './ScrollReveal'; 


const stepBackgrounds = [
  'bg-[url("https://images.unsplash.com/photo-1722002328904-30367bc42e77?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]', 
  'bg-[url("https://images.unsplash.com/photo-1708724195876-1156245fce21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]', 
  'bg-[url("https://images.unsplash.com/photo-1699462515761-90db271d77c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]', 
  'bg-[url("https://images.unsplash.com/photo-1589645733841-b54da1b6ef06?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]', 
];

const steps = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We dive deep into your goals, defining project scope, user stories, and technology road maps.",
    icon: IoIosColorFilter,
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description: "Crafting intuitive UI/UX designs and interactive prototypes before any code is written.",
    icon: IoIosCodeWorking,
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Agile development sprints combined with rigorous QA testing ensures a bug-free, robust solution.",
    icon: IoIosRocket,
  },
  {
    step: 4,
    title: "Launch & Optimization",
    description: "Deployment to production environment followed by continuous monitoring and performance optimization.",
    icon: IoIosSync,
  },
];

const HowItWorks = () => {
  // State to track which step's card is currently open
  const [activeStep, setActiveStep] = useState(null);

  // Function to toggle the card visibility
  const toggleCard = (stepNumber) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };
    
  // Function to check if the current card should be visible
  const isCardVisible = (stepNumber) => activeStep === stepNumber;

  return (
    <section id="how-it-works" className="pb-9 md:pb-13 md:mx-auto  pt-10 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Description */}
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
            Our Simple Process
          </h2>
        </ScrollReveal>
        
        <ScrollReveal animation="slide-up" delay={150}>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We follow a four-step agile methodology to ensure predictable delivery and successful outcomes.
          </p>
        </ScrollReveal>
        
        {/* Process Steps Container */}
        
        <div className="relative -ml-4 mt-12 flex flex-col items-center lg:flex-row lg:justify-between">
          
          {steps.map((step, index) => {
            
            const IconComponent = step.icon; 
            const isVisible = isCardVisible(step.step);
            
            return (
              <React.Fragment key={index}>
                
                <ScrollReveal animation="slide-up" delay={index * 150 + 200}>
                  {/* Step Container; Now a general container, click handled on the number */}
                  <div className="relative w-full p-6 pt-0 text-center z-10 
                                  group mb-20 lg:mb-0"> 
                    
                    {/* Step Number and Title (Always visible) */}
                    <div className="flex flex-col items-center justify-center">
                        
                        {/* Step Number Circle; Now the click trigger */}
                        <div 
                            className={`w-12 h-12 rounded-full flex items-center justify-center 
                                        bg-blue-600 text-white font-bold text-lg ring-4 ring-blue-50 shadow-md 
                                        transition-all duration-300 cursor-pointer 
                                        ${isVisible ? 'scale-110' : 'hover:scale-110'}`}
                            onClick={() => toggleCard(step.step)}
                            aria-expanded={isVisible}
                            aria-controls={`step-card-${step.step}`}
                        >
                            {step.step}
                        </div>

                        {/* Step Title */}
                        <h3 className={`text-lg font-bold text-gray-900 mt-6 lg:mt-4 transition-colors duration-300 
                                        ${isVisible ? 'text-blue-600' : ''}`}>
                            {step.title}
                        </h3>
                    </div>

                   
                    <div 
                        id={`step-card-${step.step}`}
                        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[320px] 
                                    -translate-y-[105%] lg:w-[300px] p-6 rounded-xl shadow-2xl bg-white 
                                    text-left z-30 overflow-hidden 
                                    transition-all duration-300 
                                    ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <div className={`absolute inset-0 ${stepBackgrounds[index]} bg-cover bg-center opacity-90`}>
                             {/* You can add an overlay here if needed, e.g., bg-blue-900/30 */}
                        </div>

                        <div className="relative"> {/* Content wrapper for z-index above background */}
                            <div className="flex items-center mb-3">
                                <IconComponent className="w-6 h-6 text-blue-600 mr-3"/>
                                <h4 className="text-xl font-extrabold text-gray-900">
                                    {step.title}
                                </h4>
                            </div>
                            
                            <p className="text-gray-700 text-sm mt-2">
                                {step.description}
                            </p>
                        </div>
                    </div>

                  </div>
                </ScrollReveal>

               
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;