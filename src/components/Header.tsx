import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const Header: React.FC = () => {
  const { language, setLanguage, isRtl } = useLanguage();
  const t = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: t.about.title, href: '#about' },
    { title: t.services.title, href: '#services' },
    { title: t.whyUs.title, href: '#why-us' },
    { title: t.contact.title, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4  lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img className="h-8 w-8" src="/icon.png" alt="Eco Shield Logo" width="32" height="32" />
            
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">{language === 'ar' ? 'إيكو شيلد' : 'Eco Shield'}</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium"
              >
                {item.title}
              </a>
            ))}
          </nav>
          
          {/* Language & CTA */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <button 
              onClick={toggleLanguage}
              className="w-8 h-8 rounded-full bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white transition-colors flex items-center justify-center"
              aria-label="تغيير اللغة"
            >
              <span 
                style={{ 
                  fontFamily: 'Tajawal, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                  paddingBottom: language === 'en' ? '4px' : '0',
                  paddingTop: language === 'en' ? '0' : '4px'
                }} 
                className="font-medium text-sm"
              >
                {language === 'en' ? 'ع' : 'EN'}
              </span>
            </button>
            {/* WhatsApp CTA */}
            <a
              id="whatsapp-header-desktop"
              href={t.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors shadow-md"
            >
              <span
               style={{ fontFamily: 'Tajawal, sans-serif' }} 
               className="text-sm font-medium" 
              >{language === 'ar' ? 'تواصل واتساب' : 'WhatsApp Us'}</span>
              <FaWhatsapp className="h-4 w-4" />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4 rtl:space-x-reverse">
            <button 
              onClick={toggleLanguage}
              className="w-8 h-8 rounded-full bg-gray-800 hover:bg-green-600 text-gray-300 hover:text-white transition-colors flex items-center justify-center"
              aria-label="تغيير اللغة"
            >
              <span 
                style={{ 
                  fontFamily: 'Tajawal, sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                  paddingBottom: language === 'en' ? '2px' : '0',
                  paddingTop: language === 'en' ? '0' : '4px'
                }} 
                className="font-medium text-sm"
              >
                {language === 'en' ? 'ع' : 'EN'}
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-400 transition-colors"
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-[1.9rem] w-[1.9rem]" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium py-2"
                >
                  {item.title}
                </a>
              ))}
              {/* WhatsApp CTA Mobile */}
              <a
                id="whatsapp-header-mobile"
                href={t.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors shadow-md"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span className="text-sm font-medium">{language === 'ar' ? 'تواصل واتساب' : 'WhatsApp Us'}</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;