
import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';

const InvestorsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Investor logos array with the correct image paths and names
  const investors = [
    { 
      name: 'Peak XV',
      logoSrc: '/placeholder.svg'
    },
    { 
      name: 'Sky9 Capital',
      logoSrc: '/placeholder.svg'
    },
    { 
      name: 'Source Code Capital',
      logoSrc: '/placeholder.svg'
    },
    { 
      name: 'Qiming Ventures',
      logoSrc: '/placeholder.svg'
    },
    { 
      name: 'Northern Light VC',
      logoSrc: '/placeholder.svg'
    },
    { 
      name: 'NetEase',
      logoSrc: '/placeholder.svg'
    },
    { 
      name: 'ClearVue',
      logoSrc: '/placeholder.svg'
    },
    { 
      name: 'GraniteAsia',
      logoSrc: '/placeholder.svg'
    }
  ];

  return (
    <section id="investors" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
              {t('backed.by')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {t('investors.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('investors.subtitle')}
          </p>
        </motion.div>

        {/* Investors Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {investors.map((investor, index) => (
              <motion.div
                key={`investor-${index}`}
                className="flex items-center justify-center"
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-24 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-all p-4">
                  <div className="flex flex-col items-center justify-center">
                    <img 
                      src={investor.logoSrc}
                      alt={`${investor.name} logo`}
                      className="max-h-full max-w-full object-contain transition-all duration-300"
                    />
                    <span className="mt-2 text-sm text-gray-700 font-medium">{investor.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 text-sm font-medium">
            {t('multiple.rounds')}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;
