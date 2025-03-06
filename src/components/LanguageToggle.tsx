
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type LanguageToggleProps = {
  className?: string;
};

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className={cn('fixed top-5 right-5 z-50', className)}>
      <button
        onClick={toggleLanguage}
        className="lang-switch flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-white transition-all duration-300"
      >
        <span className="text-sm font-medium">
          {language === 'zh' ? 'English' : '中文'}
        </span>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          {language === 'zh' ? '🇺🇸' : '🇨🇳'}
        </motion.div>
      </button>
    </div>
  );
};

export default LanguageToggle;
