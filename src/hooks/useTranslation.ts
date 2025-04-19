import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { ar } from '../translations/ar';
import { Translation } from '../types';

export const useTranslation = (): Translation => {
  const { language } = useLanguage();
  
  return language === 'ar' ? ar : en;
};