import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowRight, ArrowLeft, ShoppingCart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const [showCallButton, setShowCallButton] = useState(false);

  useEffect(() => {
    // Function to check if current time is between 8:00 AM and 9:00 PM Saudi time
    const checkBusinessHours = () => {
      // Create a date object with Saudi Arabia timezone (Asia/Riyadh)
      const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });
      const currentTime = new Date(now);
      const currentHour = currentTime.getHours();

      // Show call button between 8:00 AM (8) and 9:00 PM (21)
      setShowCallButton(currentHour >= 8 && currentHour < 21);
    };

    // Check immediately when component mounts
    checkBusinessHours();

    // Set up interval to check every minute
    const intervalId = setInterval(checkBusinessHours, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-16"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-800"></div>
        <div className="relative h-full overflow-hidden">
          <picture>
            <img
              src="/about.webp"
              alt="Eco Shield Background"
              width="100%"
              height="auto"
              decoding="async"
              className="w-full h-full object-cover object-center transform scale-105 animate-subtle-zoom"
            />
          </picture>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-3 animate-fade-in delay-200">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-green-400 font-medium mb-12 animate-fade-in delay-300">
            {t.hero.tagline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in delay-400">
            {/* WhatsApp Button - shown between 9:00 PM and 8:00 AM */}
            {!showCallButton && (
              <a
                id="whatsapp-hero-desktop"
                href="https://wa.me/966533441300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg font-medium group"
              >
                <span>{t.hero.ctaWhatsapp}</span>
                <FaWhatsapp className="h-5 w-5" />
              </a>
            )}
            
            {/* Call Button - shown between 8:00 AM and 9:00 PM */}
            {showCallButton && (
              <a
                id="call-hero-desktop"
                href="tel:0533441300"
                className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg font-medium group"
              >
                <span>{t.hero.ctaCall}</span>
                <Phone className="h-5 w-5" />
              </a>
            )}
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-500">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">{t.hero.features.service.title}</h3>
              <p className="text-gray-300">{t.hero.features.service.description}</p>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">{t.hero.features.eco.title}</h3>
              <p className="text-gray-300">{t.hero.features.eco.description}</p>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">{t.hero.features.team.title}</h3>
              <p className="text-gray-300">{t.hero.features.team.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;