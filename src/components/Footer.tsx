import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Heart, Instagram, Facebook, Twitter, Linkedin, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();

  return (
    <footer 
      className="bg-gray-900 pt-16 pb-8"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img className="h-[70px] w-auto" src="/logo.webp" alt="Eco Shield Logo" width="70" height="70" decoding="async" />
              </picture>
            </div>
            <p className="text-gray-400 mb-4">
              {t.footer.description}
            </p>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="https://www.facebook.com/Ecoshield.pest.control.service.saudi.arabia" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://x.com/eco_shield_sa" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://www.instagram.com/eco_shield_sa/" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/eco-shield-eco-solutions/" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                id='whatsapp-footer-button'
                href="http://wa.me/9660533441300" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{isRtl ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t.about.title}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t.services.title}
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t.whyUs.title}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t.testimonials.title}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  {t.contact.title}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.contact.title}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-gray-400">{t.contact.whatsapp}</span>
                <a 
                id='whatsapp-footer-button-2'
                  href={t.contact.whatsappLink}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  {t.offers.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-gray-400">{t.contact.email}</span>
                <a 
                  href={`mailto:${t.contact.emailValue}`}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  {t.contact.emailValue}
                </a>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-gray-400">{t.contact.location}</span>
                <a
                href={t.contact.websiteValue}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline"
              >
                {t.contact.locationValue}
              </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-12 mt-8">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0 text-sm text-gray-500">
            <p className="text-gray-400">
              {t.footer.copyright} | {t.footer.rights}
            </p>
            <span className="flex items-center space-x-1 rtl:space-x-reverse text-gray-200">
              <span>{isRtl ? 'صنع بـكل ' : 'Made with'}</span>
              <Heart className="h-3 w-3 text-green-400 bold" />
              <span>
                {isRtl ? 'بواسطة / ' : 'by '}
                <a 
                  href="https://www.yooussef.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold underline text-green-400 transition-colors"
                >
                  {isRtl ? 'م. يوسف الصباحي' : 'Eng. Youssef ElSabbahy'}
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;