
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
      icon: <Trophy className="text-yellow-500" size={24} />
    },
    {
      year: t('awards.2023.title'),
      awards: [
        t('awards.2023.item1')
      ],
      icon: <Star className="text-yellow-500" size={24} />
    },
    {
      year: t('awards.2024.title'),
      awards: [
        t('awards.2024.item1')
      ],
      icon: <Award className="text-yellow-500" size={24} />
    }
  ];

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-orange-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
              BUD
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
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
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-yellow-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-yellow-50 mr-4">
                  {yearData.icon}
                </div>
                <h3 className="font-bold text-xl">{yearData.year}</h3>
              </div>
              
              <ul className="space-y-4">
                {yearData.awards.map((award, idx) => (
                  <li key={idx} className="flex">
                    <span className="text-yellow-500 mr-2">•</span>
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
          className="text-center mt-12 text-gray-700"
        >
          {t('awards.conclusion')}
        </motion.p>
      </div>
    </section>
  );
};

export default AwardsSection;
