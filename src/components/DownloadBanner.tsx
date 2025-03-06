
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#9b87f5] text-white py-2 px-4 w-full sticky top-0 z-50">
      <a 
        href="https://www.budapp.cn" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          className="flex items-center"
        >
          <img 
            src="/lovable-uploads/dca1b13a-0da5-4450-8b34-e1fe6d38db22.png" 
            alt="BUD App Logo" 
            className="w-6 h-6 mr-2" 
          />
          <Download size={16} className="mr-1" />
          <span className="font-medium">{t('download.bud')}</span>
        </motion.div>
      </a>
    </div>
  );
};

export default DownloadBanner;
