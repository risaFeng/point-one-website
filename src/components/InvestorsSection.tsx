
import React, { useRef } from 'react';
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
      logoSrc: '/lovable-uploads/e79be1ac-208b-47e6-b984-86bf9950ab35.png'
    },
    { 
      name: 'Sky9 Capital',
      logoSrc: '/lovable-uploads/a1e1fff0-9e64-46b9-a0f9-d9280da746e7.png'
    },
    { 
      name: 'Source Code Capital',
      logoSrc: '/lovable-uploads/91f3d766-ede0-42e8-a6cb-cb594fa4a9e3.png'
    },
    { 
      name: 'Qiming Ventures',
      logoSrc: '/lovable-uploads/eb7878da-05f1-4bfd-ad91-b5e97b06084b.png'
    },
    { 
      name: 'Northern Light VC',
      logoSrc: '/lovable-uploads/36ce7ad1-46ad-47ae-af1c-494ca26e3500.png'
    },
    { 
      name: 'NetEase',
      logoSrc: '/lovable-uploads/a4c92098-4d77-4776-b96f-25c04c7f54bc.png'
    },
    { 
      name: 'ClearVue',
      logoSrc: '/lovable-uploads/15a60af6-204b-47e8-93be-a5d5a56b9e64.png'
    },
    { 
      name: 'GraniteAsia',
      logoSrc: '/lovable-uploads/e12bfe27-1544-49bc-9367-700cbdc12d66.png'
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
          className="text-center mb-16"
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

        {/* Investors Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {investors.map((investor, index) => (
              <motion.div
                key={`investor-${index}`}
                className="flex items-center justify-center"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-24 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:border-black transition-all duration-300 p-4">
                  <img 
                    src={investor.logoSrc}
                    alt={`${investor.name} logo`}
                    className="max-h-full max-w-full object-contain transition-all duration-300 grayscale hover:grayscale-0"
                  />
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
          <div className="inline-block px-6 py-3 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
            {t('multiple.rounds')}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;
