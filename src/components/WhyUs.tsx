import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { 
  Users, 
  ShieldCheck, 
  Clock, 
  Banknote, 
  Laptop 
} from 'lucide-react';

const WhyUs: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();

  const icons = [
    Users,
    ShieldCheck,
    Users,
    Clock,
    Banknote,
    Laptop
  ];

  return (
    <section 
      id="why-us" 
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t.whyUs.title}</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] duration-300 border border-gray-700"
              >
                <div className="mb-4 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-green-500" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;