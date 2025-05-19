import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % t.testimonials.items.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gray-900"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t.testimonials.title}</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-800 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="absolute top-8 left-8 opacity-20">
              <Quote className="h-20 w-20 text-green-500" />
            </div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-200 italic mb-6 leading-relaxed">
                "{t.testimonials.items[activeIndex].content}"
              </p>
              
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{t.testimonials.items[activeIndex].author}</h4>
                  <p className="text-gray-400">Client</p>
                </div>
              </div>
            </div>
            
            <div className={`absolute bottom-[1rem] ${isRtl ? 'left-8' : 'right-[1rem]'} flex space-x-3 rtl:space-x-reverse`}>
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-green-600 text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <div className="flex items-center justify-center w-full h-full">
                  {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                </div>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-green-600 text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <div className="flex items-center justify-center w-full h-full">
                  {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;