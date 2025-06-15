import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Building2, CarFront, ShoppingBag, Hotel, IceCream, Building, Shapes as Shoes } from 'lucide-react';
// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

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
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 7,
            },
          }}
          className="partners-slider"
        >
          {partnerIcons.map((partner, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center justify-center p-4 bg-gray-700/50 hover:bg-gray-700 rounded-xl transition-colors h-full"
              >
                <partner.icon className="h-12 w-12 text-green-400 mb-3" width={48} height={48} aria-label={t.partners.names[index]} />
                <span className="text-white text-sm">{t.partners.names[index]}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;