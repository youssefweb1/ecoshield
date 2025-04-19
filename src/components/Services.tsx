import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Bug, SprayCan as Spray, Home, PaintBucket as CleaningBucket, Bug as Bug2, Rat } from 'lucide-react';

const Services: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();

  const pestIcons = [Bug, Bug2, Rat, Spray];
  const cleaningIcons = [CleaningBucket, Home];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-900"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t.services.title}</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pest Control */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Bug className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t.services.pestControl.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-6">{t.services.pestControl.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.services.pestControl.items.map((item, index) => {
                const Icon = pestIcons[index % pestIcons.length];
                return (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-green-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Cleaning Services */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center">
                <CleaningBucket className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t.services.cleaning.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-6">{t.services.cleaning.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.services.cleaning.items.map((item, index) => {
                const Icon = cleaningIcons[index % cleaningIcons.length];
                return (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-green-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;