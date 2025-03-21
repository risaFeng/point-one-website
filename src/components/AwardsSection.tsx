
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const AwardsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const awardsData = [
    {
      title: t('awards.2022.item1.cleaned'),
      year: '2022',
      icon: <Trophy className="text-black" size={24} />
    },
    {
      title: t('awards.2022.item2.cleaned'),
      year: '2022',
      icon: <Trophy className="text-black" size={24} />
    },
    {
      title: t('awards.2022.item3.cleaned'),
      year: '2022',
      icon: <Trophy className="text-black" size={24} />
    },
    {
      title: t('awards.2024.item1.cleaned'),
      year: '2024',
      icon: <Award className="text-black" size={24} />
    }
  ];

  return (
    <section id="awards" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
              AWARDS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            {t('awards.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('awards.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-black hover:border-black flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gray-100 mr-4">
                  {award.icon}
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-4 flex-grow">
                {award.title}
              </h3>
              
              <div className="text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                {award.year}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12 text-gray-600"
        >
          {t('awards.conclusion')}
        </motion.p>
      </div>
    </section>
  );
};

export default AwardsSection;
