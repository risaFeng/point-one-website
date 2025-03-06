import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';

const InvestorsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [imgErrors, setImgErrors] = useState<{[key: string]: boolean}>({});

  // Investor logos array with the correct image paths
  const investors = [
    { 
      name: 'Peak XV',
      logo: '/lovable-uploads/61875c02-8df5-481d-8d9e-38bfc7c8a807.png', 
      fallback: '/placeholder.svg'
    },
    { 
      name: 'Sky9 Capital',
      logo: '/lovable-uploads/1c589203-fc7f-4349-b616-6ea253e78e0c.png',
      fallback: '/placeholder.svg'
    },
    { 
      name: 'Source Code Capital',
      logo: '/lovable-uploads/e8bce3a2-005c-4fea-a777-45d5e060cb04.png',
      fallback: '/placeholder.svg'
    },
    { 
      name: 'Qiming Ventures',
      logo: '/lovable-uploads/69e8ad10-f7f6-4373-86db-3cd29baf85b6.png',
      fallback: '/placeholder.svg'
    },
    { 
      name: 'Northern Light VC',
      logo: '/lovable-uploads/62f2fc7d-f501-4525-9cc7-0d22119e6c12.png',
      fallback: '/placeholder.svg'
    },
    { 
      name: 'NetEase',
      logo: '/lovable-uploads/ad9e47a7-6437-40ca-81b8-662e0e80b451.png',
      fallback: '/placeholder.svg'
    },
    { 
      name: 'ClearVue',
      logo: '/lovable-uploads/d77e6b07-aa38-47cb-b669-8804c50c322c.png',
      fallback: '/placeholder.svg'
    },
    { 
      name: 'GraniteAsia',
      logo: '/lovable-uploads/393260df-da81-4730-9ce4-256f739afda6.png',
      fallback: '/placeholder.svg'
    }
  ];

  // Enhanced fallback image handling
  const handleImageError = (index: number) => {
    console.log(`Image failed to load for investor: ${investors[index].name}`);
    setImgErrors(prev => ({...prev, [index]: true}));
  };

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
                  <img 
                    src={imgErrors[index] ? investor.fallback : investor.logo}
                    alt={`${investor.name} logo`}
                    onError={() => handleImageError(index)}
                    className="max-h-full max-w-full object-contain transition-all duration-300"
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
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 text-sm font-medium">
            {t('multiple.rounds')}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;
