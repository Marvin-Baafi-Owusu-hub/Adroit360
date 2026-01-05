import { HiCheckCircle, HiArrowSmRight } from 'react-icons/hi';
import { FaLaptopCode, FaRocket, FaGem } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const pricingPlans = [
  {
    icon: FaLaptopCode,
    name: "Starter Package",
    price: "$2,500",
    description: "Ideal for small businesses and startups needing a basic online presence and basic support.",
    features: [
      "5 Page Website",
      "Basic SEO Optimization",
      "Responsive Design",
      "1 Month Support",
      "Standard Hosting Setup"
    ],
    color: 'bg-blue-500',
    buttonText: "Start Now"
  },
  {
    icon: FaRocket,
    name: "Growth Engine",
    price: "$5,999",
    description: "Best for growing companies that need customized features and better performance.",
    features: [
      "Custom UI/UX Design",
      "15 Page Dynamic Website",
      "Advanced API Integration",
      "3 Months Priority Support",
      "Performance Optimization"
    ],
    color: 'bg-blue-500',
    isPopular: true,
    buttonText: "Get Started"
  },
  {
    icon: FaGem,
    name: "Enterprise Custom",
    price: "Quote",
    description: "Full-scale solution for complex requirements and dedicated development team.",
    features: [
      "Dedicated Dev Team",
      "Unlimited Pages/Modules",
      "Microservices Architecture",
      "24/7 Premium Support",
      "Custom Security Audit"
    ],
    color: 'bg-blue-600',
    buttonText: "Contact Us"
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="pb-9 md:pb-13 pt-10 bg-blue-50">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <ScrollReveal animation="slide-up">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
           Pricing
        </h2>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={150}>
        <p className="text-xl text-gray-600 text-center mb-16 ">
          Find the perfect plan for your project, from startup to enterprise.
        </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 grid-8 lg:grid-cols-3 lg:gap-6 gap-y-7 place-content-stretch">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={index} animation="slide-up" delay={index * 200 + 300}>
            <div
              key={index}
              // Card with subtle shadow and border
              className={`relative bg-white p-8 rounded-xl shadow-lg border border-gray-200 pt-7 
                          transform hover:scale-[1.1] transition duration-500 ease-in-out group`}
            >
              { /* Icon */}
              <plan.icon className={`w-10 h-10 mb-4 ${plan.isPopular ? 'text-gray-500' : 'text-gray-600'}`} />

              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-gray-500 mb-4 text-sm">{plan.description}</p>

              <p className="text-2xl font-extrabold text-gray-900 my-6">
                {plan.price}
                {plan.price !== 'Quote' && <span className="text-base font-medium text-gray-500"> / project</span>}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-700">
                    <HiCheckCircle className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold text-white ${plan.color} 
                            hover:opacity-90 transition duration-300 flex items-center justify-center`}
              >
                {plan.buttonText}
                <HiArrowSmRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;