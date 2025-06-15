import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { Shield, X, Check, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useTranslation } from "../hooks/useTranslation"
import { useLanguage } from "../context/LanguageContext"

const PromotionPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showCallButton, setShowCallButton] = useState(false)
  const t = useTranslation()
  const { language } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Function to check if current time is between 8:00 AM and 9:00 PM Saudi time
    const checkBusinessHours = () => {
      // Create a date object with Saudi Arabia timezone (Asia/Riyadh)
      const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });
      const currentTime = new Date(now);
      const currentHour = currentTime.getHours();

      // Show call button between 8:00 AM (8) and 9:00 PM (21)
      setShowCallButton(currentHour >= 8 && currentHour < 21);
    };

    // Check immediately when component mounts
    checkBusinessHours();

    // Set up interval to check every minute
    const intervalId = setInterval(checkBusinessHours, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-3xl bg-gray-900 rounded-lg relative animate-fadeIn shadow-xl overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>        
        <button
          className={`absolute ${language === 'ar' ? 'left-2' : 'right-2'} top-2 z-10 p-2 text-gray-400 hover:text-gray-200 rounded-lg`}
          onClick={() => setIsVisible(false)}
          aria-label="إغلاق النافذة"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>

        <div className="grid md:grid-cols-5 overflow-hidden rounded-lg">
          {/* Left side - Hero section */}
          <div className={`bg-gradient-to-br from-emerald-900 to-emerald-700 text-white p-6 flex flex-col justify-center md:col-span-2 ${language === 'ar' ? 'order-1' : 'order-2'}`}>
            <div className="mt-9 md:mt-0 mb-4 inline-flex items-center gap-2 p-2 bg-white/10 rounded-lg">
              {/* Logo or Shield + Company Name */}
              <img src="/icon.png" alt="Eco Shield Logo" className="h-8 w-8" width={32} height={32} decoding="async" />
              <span className="text-lg font-bold">{t.promotionPopup.company}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{t.promotionPopup.title}</h2>
            
            
          </div>

          {/* Right side - Content */}
          <div className={`p-6 md:col-span-3 text-white ${language === 'ar' ? 'order-2' : 'order-1'}`}>            
            <div className="mb-6">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">
                  {t.promotionPopup.price}
                </span>
                <span className="text-gray-400">/{t.promotionPopup.year}</span>
              </div>
            </div>

            <div className=" mb-6">
              <h3 className="font-medium mb-2 text-gray-200">{t.promotionPopup.features.title}</h3>
              <ul className="space-y-2">
                {t.promotionPopup.features.items.map((feature: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Button - shown between 9:00 PM and 8:00 AM */}
            {!showCallButton && (
              <button
                id="whatsapp-promotionPopup-button"
                onClick={() => window.open(t.contact.whatsappLink, "_blank")}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                aria-label={t.promotionPopup.cta}
              >
                <FaWhatsapp className="h-5 w-5" />
                {t.promotionPopup.cta}
              </button>
            )}

            {/* Call Button - shown between 8:00 AM and 9:00 PM */}
            {showCallButton && (
              <button
                id="call-promotionPopup-button"
                onClick={() => window.open('tel:0533441300')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                aria-label={language === 'ar' ? 'اتصل الآن' : 'Call Now'}
              >
                <Phone className="h-5 w-5" />
                {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionPopup
