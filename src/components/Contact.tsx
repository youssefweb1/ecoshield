import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Globe, 
  Send 
} from 'lucide-react';

const Contact: React.FC = () => {
  const { isRtl } = useLanguage();
  const t = useTranslation();

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t.contact.whatsapp}</h3>
                  <a 
                    href={t.contact.whatsappLink}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {t.offers.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t.contact.email}</h3>
                  <a 
                    href={`mailto:${t.contact.emailValue}`}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {t.contact.emailValue}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t.contact.location}</h3>
                  <p className="text-gray-300">{t.contact.locationValue}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{t.contact.website}</h3>
                  <a 
                    href={`https://${t.contact.websiteValue}`}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.contact.websiteValue}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          
          <form 
  action="https://api.web3forms.com/submit" 
  method="POST" 
  className="space-y-6"
>
  {/* Access Key */}
  <input type="hidden" name="access_key" value="29d5c74e-cdef-4e26-8e0e-92120867e1d6" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
        {isRtl ? 'الاسم' : 'Name'}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
        placeholder={isRtl ? 'أدخل اسمك' : 'Enter your name'}
      />
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
        {isRtl ? 'رقم الهاتف' : 'Phone'}
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
        placeholder={isRtl ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
      />
    </div>
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
      {isRtl ? 'البريد الإلكتروني' : 'Email'}
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
      placeholder={isRtl ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
    />
  </div>

  <div>
    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
      {isRtl ? 'الخدمة' : 'Service'}
    </label>
    <select
      id="service"
      name="service"
      className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
    >
      <option value="">{isRtl ? 'اختر خدمة' : 'Select a service'}</option>
      <option value="pest-control">{isRtl ? 'مكافحة الآفات' : 'Pest Control'}</option>
      <option value="cleaning">{isRtl ? 'خدمات التنظيف' : 'Cleaning Services'}</option>
    </select>
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
      {isRtl ? 'الرسالة' : 'Message'}
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required
      className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
      placeholder={isRtl ? 'أدخل رسالتك' : 'Enter your message'}
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors shadow-md"
  >
    <span>{isRtl ? 'إرسال الرسالة' : 'Send Message'}</span>
    <Send className="h-4 w-4" />
  </button>
</form>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;