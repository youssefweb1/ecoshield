import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Building2, CarFront, ShoppingBag, Hotel, IceCream, Building, Shapes as Shoes } from 'lucide-react';

const Partners: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();

  const partnerIcons = [
    { name: 'Radisson', icon: Hotel },
    { name: 'Calvin Klein', icon: ShoppingBag },
    { name: 'Shrimp Shack', icon: Building },
    { name: 'Ladun', icon: Building2 },
    { name: 'Cold Stone', icon: IceCream },
    { name: 'Lexus', icon: CarFront },
    { name: 'Skechers', icon: Shoes }
  ];

  return (
    <section 
      className="py-20 bg-gray-800"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t.partners.title}</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">{t.partners.description}</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {partnerIcons.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-xl transition-colors"
            >
              <partner.icon className="h-12 w-12 text-green-400 mb-3" width={48} height={48} aria-label={t.partners.names[index]} />
              <span className="text-white text-sm">{t.partners.names[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;