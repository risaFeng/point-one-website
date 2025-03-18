
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Medal } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

const CompanyInfo: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full">
              ABOUT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="p-6 rounded-xl border border-black hover:shadow-lg transition-all duration-300 bg-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Medal className="text-black" size={24} />
                {t('achievements.title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-black text-xl leading-7">•</span>
                  <span>{t('achievements.item1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black text-xl leading-7">•</span>
                  <span>{t('achievements.item2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black text-xl leading-7">•</span>
                  <span>{t('achievements.item3')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="w-full max-w-md mx-auto">
              <AspectRatio ratio={isMobile ? 3/4 : 4/3} className="bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">AI</span>
                    </div>
                    <h3 className="text-xl font-bold">Artificial Intelligence</h3>
                    <p className="text-gray-500">Powering the future of technology</p>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
