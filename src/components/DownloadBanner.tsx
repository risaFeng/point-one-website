
import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const DownloadBanner: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/2f2a7c74-dec2-48b4-9f81-5ef58b028043.png" 
            alt="BUD Game Icon" 
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-white font-medium text-sm">
            BUD-碧优蒂的世界
          </span>
        </div>
        
        <motion.a
          href="http://www.budapp.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-white text-sm font-medium transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={14} />
          <span>{t('download') || 'Download'}</span>
        </motion.a>
      </div>
    </div>
  );
};

export default DownloadBanner;
