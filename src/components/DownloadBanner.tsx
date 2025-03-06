
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DownloadBanner: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#9b87f5] text-white py-3 sticky top-0 z-50"
    >
      <a 
        href="https://www.budapp.cn" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <img 
          src="/lovable-uploads/18a8b5f6-cec8-4005-bbc0-4966c3ed9881.png" 
          alt="BUD App Icon" 
          className="w-6 h-6 rounded"
        />
        <span className="font-medium">
          {language === 'zh' ? '下载 BUD-碧优蒂的世界' : 'Download BUD App'}
        </span>
        <Download size={16} className="ml-1" />
      </a>
    </motion.div>
  );
};

export default DownloadBanner;
