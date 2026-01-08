import Header from './components/Header';
import Hero from './components/Hero';
import PartnersSection from './components/PartnersSection';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import CaseStudies from './components/CaseStudies';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer'; 



const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <PricingSection />
        <CaseStudies />
        <FAQSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};


export default App;
