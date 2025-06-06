import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { ShieldCheck, Users, Award, UserCheck, Banknote, FlaskConical, Clock } from 'lucide-react';

const icons = [
  Award,
  Users,
  ShieldCheck,
  UserCheck,
  Banknote,
  FlaskConical,
  Clock,
];

const WhyUs: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();

  return (
    <section 
      id="why-us" 
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t.whyUs.title}</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
          {t.whyUs.description && (
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">{t.whyUs.description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyUs.reasons.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index} 
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] duration-300 border border-gray-700 flex flex-col items-center text-center"
              >
                <div className="mb-4 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                {point.description && (
                  <p className="text-gray-200 text-base mt-1">{point.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;