import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Users, Award, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const icons = [Users, Award, Clock];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      className="py-20 bg-gray-800"
      dir={isRtl ? 'rtl' : 'ltr'}
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.stats.title}</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.stats.items.map((item, index) => {
            const Icon = icons[index];
            
            return (
              <div 
                key={index} 
                className="bg-gray-900 backdrop-blur-sm rounded-xl p-8 text-center shadow-xl"
              >
                <div className="mb-6 mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className={`text-4xl font-bold text-white mb-2 ${inView ? 'animate-counter' : ''}`}>
                  {item.value}
                </h3>
                <p className="text-green-400 text-lg">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;