import Logo from '../assets/Logo.png'; 
//icons from lucide-react (npm install lucide-react)
 import { Mail, Phone, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react'; 


const quickLinks = [
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms of Service', href: '#terms' },
  { name: 'Sitemap', href: '#sitemap' },
];

const socialLinks = [
  { icon: Facebook, href: '#facebook', label: 'Facebook' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 pb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="Logo" className="h-10 w-auto object-contain"/>
              <span className="text-2xl font-bold text-white">Adroit360</span>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              We turn brilliant ideas into robust, scalable software solutions 
              that drive real business value and global efficiency.
            </p>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((Link, index) => (
                <a
                  key={index}
                  href={Link.href}
                  aria-label={Link.label}
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  <Link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-1">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-5 ml-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition duration-300 text-sm"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 inline-block" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal/Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-5 ml-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition duration-300 text-sm"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 inline-block" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-1"> 
            <h4 className="text-lg font-semibold mb-5 ml-6 text-white">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-blue-400 shrink-0 mt-1" />
                <span>contact@adroit360.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-blue-400 shrink-0 mt-1" />
                <span>+233 241851827</span>
              </li>
              <li className="pt-2">
                community center, <br/>
                Adroit 360 Ltd, <br/>
                Accra, Ghana.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-800 pt-6 pb-4">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Innovate Soft. All rights reserved.
          </p>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;