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
        
        {/* Pest Control */}
        <div className="bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl transition-transform hover:scale-[1.01] duration-300 w-full max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center">
              {React.createElement(pestIconsMap[t.services.pestControl.items[0]] || pestIconsMap['default'], { className: "h-9 w-9 text-green-500" })}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{t.services.pestControl.title}</h3>
          </div>
          
          <p className="text-gray-200 mb-8 text-lg">{t.services.pestControl.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {t.services.pestControl.items.map((item, index) => {
              const Icon = pestIconsMap[item] || pestIconsMap['default'];
              return (
                <div key={index} className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-gray-300 font-semibold text-lg">{item}</span>
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
                      <p className="text-sm text-gray-400 mt-2" dangerouslySetInnerHTML={{ __html: language === 'ar' ? desc.ar : desc.en }} />
                    );
                  })()}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;