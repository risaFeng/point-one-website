
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';

const NewInvestorsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Updated investor logos array with placeholder images
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
      name: 'ClearVue Partners',
      logoSrc: '/placeholder.svg'
    },
    { 
      name: 'GraniteAsia',
      logoSrc: '/placeholder.svg'
    }
  ];

  return (
    <section id="investors" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3">
            <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full">
              {t('backed.by')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            {t('investors.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('investors.subtitle')}
          </p>
        </motion.div>

        {/* Investors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {investors.map((investor, index) => (
            <motion.div
              key={`investor-${index}`}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[180px] h-20 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 hover:border-black transition-all duration-300 p-4">
                <img 
                  src={investor.logoSrc}
                  alt={`${investor.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-white text-black text-sm font-medium border border-black">
            {t('multiple.rounds')}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewInvestorsSection;
