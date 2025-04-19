import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { ShoppingBag, Shield, Leaf, Package } from 'lucide-react';

const Store: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();

  return (
    <section 
      id="store" 
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse mb-4">
            <ShoppingBag className="h-8 w-8 text-green-500" />
            <h2 className="text-3xl font-bold text-white">{t.store.title}</h2>
          </div>
          <p className="text-xl text-gray-300 mb-8">{t.store.description}</p>
          <a
            href="https://store.ecoshield.sa"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg font-medium"
          >
            <Package className="h-5 w-5" />
            <span>{t.store.cta}</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all">
            <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">{t.store.features.certified.title}</h3>
            <p className="text-gray-300">{t.store.features.certified.description}</p>
          </div>
          
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all">
            <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">{t.store.features.eco.title}</h3>
            <p className="text-gray-300">{t.store.features.eco.description}</p>
          </div>
          
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all">
            <Package className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">{t.store.features.delivery.title}</h3>
            <p className="text-gray-300">{t.store.features.delivery.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;