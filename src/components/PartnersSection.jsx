import Beacon from '../assets/PartnerLogos/Beacon.png';
import BestPoint from '../assets/PartnerLogos/BestPoint.png';
import FlatC from '../assets/PartnerLogos/FlatC.png';
import GBA from '../assets/PartnerLogos/GBA.png';
import GoGMI from '../assets/PartnerLogos/GoGMI.png';
import Premium from '../assets/PartnerLogos/Premium.png';
import FC from '../assets/PartnerLogos/FC.png';
import Safi from '../assets/PartnerLogos/Safi.png';
import BestAssurance from '../assets/PartnerLogos/BestAssurance.png';
import BlueSpace from '../assets/PartnerLogos/BlueSpace.png';
import Well from '../assets/PartnerLogos/Well.png';
import GrandBK from '../assets/PartnerLogos/GrandBK.png';
import CocaCola from '../assets/PartnerLogos/CocaCola.png';
import Seafood from '../assets/PartnerLogos/Seafood.png';
import Voka from '../assets/PartnerLogos/Voka.png';

const partnerLogos = [
  {name: 'Beacon', image: Beacon},
  {name: 'BestPoint', image: BestPoint},
  {name: 'FlatC', image: FlatC},
  {name: 'GBA', image: GBA},
  {name: 'GoGMI', image: GoGMI},
  {name: 'Premium', image: Premium},
  {name: 'FC', image: FC},
  {name: 'Safi', image: Safi},
  {name: 'BlueSpace', image: BlueSpace},
  {name: 'BestAssurance', image: BestAssurance},
  {name: 'Well', image: Well},
  {name: 'GrandBK', image: GrandBK},
  {name: 'CocaCola', image: CocaCola},
  {name: 'Seafood', image: Seafood},
  {name: 'Voka', image: Voka},
];
 
const PartnersSection = () => {
  // We duplicate the list to ensure a seamless looping animation
  const logos = [...partnerLogos]; 

  
  // Keyframes for the horizontal movement
  const animationStyle = `
    @keyframes scroll-partners {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); } 
      {/* Scrolls exactly halfway (the length of the original list) */}
    }
  ` ;

  return (
    <section className="py-12 bg-white overflow-hidden">
      <style>{animationStyle}</style> {/* Inject the keyframes */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Trusted by Industry Leaders
        </h3>
      </div>
      
      {/* Scroll Container */}
      <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden shadow-lg border-y border-gray-100">
        
        {/* Fading Edges (optional, but looks professional)*/}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10"></div>
        
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10"></div>

        {/* Logo Track - This is where the animation is applied */}
        <div 
          className="flex items-center py-4 whitespace-nowrap"
          style={{ 
            animation: 'scroll-partners 30s linear infinite', 
            width: `${logos.length * 400}px` // Ensure the container is wide enough
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 mx-5 w-[200px]  flex items-center justify-center"
            >
              {typeof logo === 'object' && logo.image ? (
                <img src={logo.image} alt={logo.name} className="max-w-full max-h-full object-contain" />
              ) : (
                <span className="text-2xl font-light text-gray-400 hover:text-gray-700 transition duration-300">
                  {logo}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;