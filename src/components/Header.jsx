import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";

const navItems = [
  { name: "What We Do", href: "#what-we-do" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white rounded-b-lg  shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between mr-9 items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-2xl font-bold text-gray-800">Adroit360</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition duration-150"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* The image shows a simple burger icon */}
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-lg pb-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-150"
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
