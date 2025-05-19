import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Bug, SprayCan, Home, PaintBucket, Rat, Bed, Sofa, Leaf, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const { isRtl, language } = useLanguage();
  const t = useTranslation();

  // أيقونات مكافحة الآفات حسب الفئة (فقط الأيقونات المتوفرة)
  const pestIconsMap: Record<string, any> = {
    'النمل': Bug,
    'النمل الأبيض': Bug,
    'الصراصير': Bug,
    'البعوض': Bug,
    'الذباب': Bug,
    'الفئران': Rat,
    'بق الفراش': Bed,
    'جميع أنواع القوارض': Rat,
    // افتراضي
    'default': Bug
  };
  // أيقونات التنظيف حسب الفئة (فقط الأيقونات المتوفرة)
  const cleaningIconsMap: Record<string, any> = {
    'تنظيف المنازل العميق': Home,
    'تنظيف ما قبل وبعد الانتقال': Shield,
    'تنظيف المكاتب والمباني التجارية': Sofa,
    'تنظيف ما بعد البناء': PaintBucket,
    'تنظيف السجاد والمفروشات': Sofa,
    'التنظيف الصديق للبيئة (الأخضر)': Leaf,
    // افتراضي
    'default': Home
  };

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
                {React.createElement(pestIconsMap[t.services.pestControl.items[0]] || pestIconsMap['default'], { className: "h-8 w-8 text-green-500" })}
              </div>
              <h3 className="text-2xl font-bold text-white">{t.services.pestControl.title}</h3>
            </div>
            
            <p className="text-gray-200 mb-6">{t.services.pestControl.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.services.pestControl.items.map((item, index) => {
                const Icon = pestIconsMap[item] || pestIconsMap['default'];
                return (
                  <div key={index} className="flex flex-col gap-1 mb-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-green-400" />
                      </div>
                      <span className="text-gray-300 font-semibold">{item}</span>
                    </div>
                    {/* SEO Description */}
                    {(() => {
                      const descriptions: Record<string, { ar: string; en: string }> = {
                        'النمل الأبيض': {
                          ar: '<b>أفضل شركة مكافحة النمل الأبيض بالرياض:</b> يعد النمل الأبيض من أخطر أنواع الآفات التي قد تصيب أي منشأة فتعرّضها للدمار، خصوصًا في أي نوع منشأة أخرى. لذلك في حالة تواجد النمل الأبيض يجب التواصل مع شركة مكافحة النمل الأبيض بالرياض فورًا.',
                          en: '<b>Best Termite Control Company in Riyadh:</b> Termites are among the most dangerous pests that can destroy any facility. If you notice termites, contact the best termite control company in Riyadh immediately.'
                        },
                        'البعوض': {
                          ar: '<b>أفضل شركة مكافحة البعوض بالرياض:</b> الحشرة الأكثر خطورة في العالم، وتسبب أعلى معدلات الوفاة بين الحشرات. يجب مكافحة البعوض فورًا بالتواصل مع شركة مكافحة الحشرات والبعوض بالرياض.',
                          en: '<b>Best Mosquito Control Company in Riyadh:</b> Mosquitoes are the most dangerous insects worldwide, causing the highest death rates. Contact the best mosquito control company in Riyadh now.'
                        },
                        'الصراصير': {
                          ar: '<b>أفضل شركة مكافحة الصراصير بالرياض:</b> الصراصير من أكثر الأنواع ضررًا بالإنسان والحيوان والمؤسسات. يجب التواصل مع شركة مكافحة الصراصير بالرياض فورًا.',
                          en: '<b>Best Cockroach Control Company in Riyadh:</b> Cockroaches are among the most harmful pests to humans, animals, and institutions. Contact the best cockroach control company in Riyadh immediately.'
                        },
                        'الذباب': {
                          ar: '<b>أفضل شركة مكافحة الذباب بالرياض:</b> الذباب ينقل أكثر من 100 نوع بكتيريا مسببة للأمراض. مكافحة الذباب مطلوبة في الأنشطة الغذائية والمنازل. تواصل مع شركة مكافحة الحشرات والذباب بالرياض فورًا.',
                          en: '<b>Best Fly Control Company in Riyadh:</b> Flies transmit over 100 types of disease-causing bacteria. Contact the best fly control company in Riyadh for your home or business.'
                        },
                        'الفئران': {
                          ar: '<b>أفضل شركة مكافحة الفئران بالرياض:</b> الفئران من أكبر نواقل الأمراض وقد تسببت في أوبئة تاريخية. يجب التواصل مع شركة مكافحة القوارض والفئران بالرياض فورًا.',
                          en: '<b>Best Rodent Control Company in Riyadh:</b> Rodents are major disease carriers and have caused historic epidemics. Contact the best rodent control company in Riyadh now.'
                        },
                        'بق الفراش': {
                          ar: '<b>أفضل شركة مكافحة بق الفراش بالرياض:</b> بق الفراش من أخطر الآفات التي تصيب المؤسسات والمنازل. يجب معالجة واستئصال بق الفراش فورًا بالتواصل مع شركة مكافحة بق الفراش بالرياض.',
                          en: '<b>Best Bed Bug Control Company in Riyadh:</b> Bed bugs are among the most dangerous pests for homes and businesses. Contact the best bed bug control company in Riyadh for fast and effective treatment.'
                        },
                        'النمل': {
                          ar: '<b>شركة مكافحة النمل بالرياض:</b> نقدم حلولاً فعالة وسريعة لمكافحة النمل بجميع أنواعه في المنازل والمنشآت. تواصل معنا لأفضل خدمة مكافحة النمل بالرياض.',
                          en: '<b>Ant Control Company in Riyadh:</b> We provide fast and effective solutions for all types of ants in homes and businesses. Contact us for the best ant control service in Riyadh.'
                        },
                      };
                      const desc = descriptions[item] || {
                        ar: `<b>شركة مكافحة ${item} بالرياض:</b> حلول متخصصة وسريعة لمكافحة ${item} في جميع أنواع المنشآت. تواصل معنا الآن لأفضل خدمة مكافحة ${item} بالرياض.`,
                        en: `<b>${item} Control Company in Riyadh:</b> Specialized and fast solutions for ${item} control in all types of facilities. Contact us now for the best ${item} control service in Riyadh.`
                      };
                      return (
                        <p className="text-xs text-gray-400 mt-1" dangerouslySetInnerHTML={{ __html: language === 'ar' ? desc.ar : desc.en }} />
                      );
                    })()}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Cleaning Services */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center">
                {React.createElement(cleaningIconsMap[t.services.cleaning.items[0]] || cleaningIconsMap['default'], { className: "h-8 w-8 text-green-500" })}
              </div>
              <h3 className="text-2xl font-bold text-white">{t.services.cleaning.title}</h3>
            </div>
            
            <p className="text-gray-200 mb-6">{t.services.cleaning.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.services.cleaning.items.map((item, index) => {
                const Icon = cleaningIconsMap[item] || cleaningIconsMap['default'];
                // وصف لكل فئة تنظيف
                const cleaningDescriptions: Record<string, { ar: string; en: string }> = {
                  'تنظيف المنازل العميق': {
                    ar: '<b>تنظيف المنازل العميق بالرياض:</b> نقدم أفضل خدمات تنظيف المنازل العميق باستخدام مواد آمنة وأجهزة متطورة. تواصل معنا لأفضل شركة تنظيف منازل بالرياض.',
                    en: '<b>Deep House Cleaning in Riyadh:</b> We provide the best deep house cleaning services using safe materials and advanced equipment. Contact us for the best house cleaning company in Riyadh.'
                  },
                  'تنظيف ما قبل وبعد الانتقال': {
                    ar: '<b>تنظيف ما قبل وبعد الانتقال بالرياض:</b> خدمات تنظيف شاملة قبل وبعد الانتقال لضمان بيئة نظيفة وصحية في منزلك الجديد أو القديم.',
                    en: '<b>Move-in/Move-out Cleaning in Riyadh:</b> Comprehensive cleaning services before and after moving to ensure a clean and healthy environment in your new or old home.'
                  },
                  'تنظيف المكاتب والمباني التجارية': {
                    ar: '<b>تنظيف المكاتب والمباني التجارية بالرياض:</b> حلول تنظيف احترافية للمكاتب والشركات تضمن بيئة عمل صحية ومنتجة.',
                    en: '<b>Office & Commercial Cleaning in Riyadh:</b> Professional cleaning solutions for offices and companies to ensure a healthy and productive work environment.'
                  },
                  'تنظيف ما بعد البناء': {
                    ar: '<b>تنظيف ما بعد البناء بالرياض:</b> إزالة الأتربة والمخلفات بعد أعمال البناء أو الترميم بسرعة وكفاءة عالية.',
                    en: '<b>Post-construction Cleanup in Riyadh:</b> Fast and efficient removal of dust and debris after construction or renovation works.'
                  },
                  'تنظيف السجاد والمفروشات': {
                    ar: '<b>تنظيف السجاد والمفروشات بالرياض:</b> تنظيف عميق للسجاد والمفروشات باستخدام أحدث التقنيات لضمان النظافة والتعقيم.',
                    en: '<b>Carpet & Upholstery Cleaning in Riyadh:</b> Deep cleaning for carpets and upholstery using the latest technologies for cleanliness and disinfection.'
                  },
                  'التنظيف الصديق للبيئة (الأخضر)': {
                    ar: '<b>التنظيف الصديق للبيئة بالرياض:</b> حلول تنظيف خضراء وآمنة للحفاظ على البيئة وصحة العائلة.',
                    en: '<b>Eco-friendly (Green) Cleaning in Riyadh:</b> Green and safe cleaning solutions to protect the environment and your family\'s health.'
                  },
                };
                const desc = cleaningDescriptions[item] || {
                  ar: `<b>خدمة ${item} بالرياض:</b> حلول تنظيف متخصصة وفعالة لجميع أنواع المنشآت. تواصل معنا الآن لأفضل خدمة ${item} بالرياض.`,
                  en: `<b>${item} Cleaning Service in Riyadh:</b> Specialized and effective cleaning solutions for all types of facilities. Contact us now for the best ${item} cleaning service in Riyadh.`
                };
                return (
                  <div key={index} className="flex flex-col gap-1 mb-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-green-400" />
                      </div>
                      <span className="text-gray-300 font-semibold">{item}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1" dangerouslySetInnerHTML={{ __html: language === 'ar' ? desc.ar : desc.en }} />
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