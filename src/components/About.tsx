import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Shield, Leaf, Award } from 'lucide-react';

const About: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-800"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-green-500/20 rounded-full"></div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-green-500/20 rounded-full"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <picture>
                <source srcSet="/about.webp" type="image/webp" />
                <img 
                  src="/about.webp" 
                  alt="Eco Shield Professional Team" 
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                />
              </picture>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <Shield className="h-8 w-8 text-green-500" />
              <h2 className="text-3xl font-bold text-white">{t.about.title}</h2>
            </div>
            
            <div className="space-y-4 mb-8">
              {t.about.content.map((paragraph, index) => (
                <p key={index} className="text-gray-200 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{t.about.features?.certified?.title || 'Certified Professionals'}</h3>
                  <p className="text-gray-400">{t.about.features?.certified?.description || 'Our team consists of licensed and certified professionals'}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{t.about.features?.eco?.title || 'Eco-Friendly Solutions'}</h3>
                  <p className="text-gray-400">{t.about.features?.eco?.description || 'We use environmentally conscious products and techniques'}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;