
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
      year: t('awards.2022.title'),
      awards: [
        t('awards.2022.item1'),
        t('awards.2022.item2'),
        t('awards.2022.item3')
      ],
      icon: <Trophy className="text-black" size={24} />
    },
    {
      year: t('awards.2023.title'),
      awards: [
        t('awards.2023.item1')
      ],
      icon: <Star className="text-black" size={24} />
    },
    {
      year: t('awards.2024.title'),
      awards: [
        t('awards.2024.item1')
      ],
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awardsData.map((yearData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-black hover:border-black"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-gray-100 mr-4">
                  {yearData.icon}
                </div>
                <h3 className="font-bold text-xl">{yearData.year}</h3>
              </div>
              
              <ul className="space-y-4">
                {yearData.awards.map((award, idx) => (
                  <li key={idx} className="flex">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">{award}</span>
                  </li>
                ))}
              </ul>
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
