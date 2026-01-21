import HeroBack from '../assets/Hro.avif';
import ScrollReveal from './ScrollReveal';
const Hero = () => {
  return (
    <section className="relative h-screen md:h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(${HeroBack})`,
            filter: 'brightness(0.7)', 
            zIndex: 1
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
       <ScrollReveal animation="slide-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Transforming Ideas into Software Solutions
        </h1>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={200}>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          We build custom software and web applications that drive growth and efficiency for businesses worldwide.
        </p>
        </ScrollReveal>
        <ScrollReveal animation="fade-in" delay={400}>
        <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 shadow-xl">
          Learn More
        </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;