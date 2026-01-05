import { useInView } from 'react-intersection-observer';

/**
 * A wrapper component to animate content when it scrolls into view.
 * @param {string} animation - The animation class (e.g., 'slide-up', 'fade-in').
 * @param {number} delay - Animation delay in milliseconds (e.g., 200).
 * @param {number} threshold - How much of the element must be visible (0.0 to 1.0).
 */
const ScrollReveal = ({ 
  children, 
  animation = 'slide-up', 
  delay = 0, 
  threshold = 0.1 
}) => {
  const { ref, inView } = useInView({
    // Trigger once when the element enters the view
    triggerOnce: true, 
    // Percentage of element visible before trigger
    threshold: threshold, 
  });

  // Base Tailwind classes for smooth transition
  const baseClasses = `
    transition-all duration-1000 ease-out 
    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0'}
  `;

  // Animation specific classes
  let animationClasses = '';
  switch (animation) {
    case 'slide-up':
      // Start below the final position
      animationClasses = `${inView ? '' : 'translate-y-10'}`; 
      break;
    case 'slide-left':
      // Start right of the final position
      animationClasses = `${inView ? '' : 'translate-x-10'}`; 
      break;
    case 'fade-in':
    default:
      // No translation, just opacity
      animationClasses = '';
      break;
  }
  
  // Apply delay via inline style
  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div 
      ref={ref} 
      className={`${baseClasses} ${animationClasses}`} 
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;