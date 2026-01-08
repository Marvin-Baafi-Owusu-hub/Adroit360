import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaSearchDollar,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";


const services = [
  {
    title: "Custom Web Development",
    description:
      "Building scalable, high-performance web applications using modern frameworks like React and Node.js.",
    icon: FaLaptopCode,
    // REPLACE 'web-dev-bg.jpg' with a real image path (e.g., a screen of code or a development team)
    image:
      "https://images.unsplash.com/photo-1565687981296-535f09db714e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile solutions for iOS and Android, focusing on seamless user experience.",
    icon: FaMobileAlt,
    // REPLACE 'mobile-app-bg.jpg' with a real image path (e.g., a stylish smartphone mock-up)
    image:
      "https://images.unsplash.com/photo-1652372668818-acaa57c4f7a9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
      "Managing infrastructure, scaling applications, and implementing CI/CD pipelines on AWS, Azure, or Google Cloud.",
    icon: FaCloud,
    // REPLACE 'cloud-bg.jpg' with a real image path (e.g., abstract cloud shapes or data centers)
    image:
      "https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "UI/UX & Design Thinking",
    description:
      "Crafting intuitive interfaces and delightful user experiences that drive engagement and conversions.",
    icon: FaSearchDollar,
    // REPLACE 'design-bg.jpg' with a real image path (e.g., a person sketching or a design mockup)
    image:
      "https://plus.unsplash.com/premium_photo-1661775083116-3e8fbb1d5a7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="pb-9 md:pb-13 pt-15 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            What We Do
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={200}>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We transform your digital challenges into strategic software
            advantages with our comprehensive service offerings.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              animation="slide-up"
              delay={index * 150 + 300}
            >
              <div
                key={index}
                className="group relative h-96 rounded-xl shadow-xl overflow-hidden transform hover:shadow-2xl transition duration-500"
              >
                {/* Card Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  // NOTE: Use a unique image for each service
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>

                {/* Gradient Overlay for Readability*/}
                <div className="absolute inset-0 bg-black/90 opacity-60 group-hover:opacity-40 transition duration-500"></div>

                {/*Card Content*/}
                <div className="relative p-6 h-full flex flex-col justify-end text-white">
                  <service.icon className="w-8 h-8 mb-3 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
