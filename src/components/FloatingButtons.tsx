import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <>
      {/* Social Media Buttons */}
      <div className={`fixed left-4 bottom-20 z-50 flex flex-col gap-2 transition-all duration-300 ${
        showContacts ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <a
          href="https://www.facebook.com/Ecoshield.pest.control.service.saudi.arabia"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="https://x.com/eco_shield_sa"
          className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="https://www.instagram.com/eco_shield_sa/"
          className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/company/eco-shield-eco-solutions/"
          className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="http://wa.me/9660533441300"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="h-5 w-5" />
        </a>
      </div>

      {/* Toggle Contact Button */}
      <button
        onClick={toggleContacts}
        className="fixed left-4 bottom-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
        aria-label="Toggle contacts"
      >
        {showContacts ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-3 bottom-6 z-50 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
};

export default FloatingButtons;