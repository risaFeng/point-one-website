
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';

const InvestorsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Investor logos array with fixed image paths
  const investors = [
    { 
      name: 'Peak XV',
      logo: '/lovable-uploads/ba9e4823-7ae5-4027-92c8-38524b6854e6.png' 
    },
    { 
      name: 'Sky9 Capital',
      logo: '/lovable-uploads/7fe4695c-b140-4852-869c-e7ee6b4369cc.png'
    },
    { 
      name: 'Source Code Capital',
      logo: '/lovable-uploads/650a6298-4212-4204-b9b4-366132a2b570.png'
    },
    { 
      name: 'Qiming Ventures',
      logo: '/lovable-uploads/0d7b9038-86eb-4eca-902d-280a85ccea78.png'
    },
    { 
      name: 'Northern Light VC',
      logo: '/lovable-uploads/cf85bf08-c082-4863-a4e7-e2750122eaca.png'
    },
    { 
      name: 'NetEase',
      logo: '/lovable-uploads/ae522528-ebd6-40e1-8ed4-b4298a5df085.png'
    },
    { 
      name: 'ClearVue',
      logo: '/lovable-uploads/f9cdd451-411f-4b7e-a19d-8103c23a79a6.png'
    },
    { 
      name: 'GraniteAsia',
      logo: '/lovable-uploads/f4246879-70f5-4c8f-ad9b-33ef417d8589.png'
    }
  ];

  // Add fallback image logic in case the actual logo doesn't load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image: ${e.currentTarget.src}`);
    e.currentTarget.src = '/placeholder.svg';
    e.currentTarget.classList.add('bg-gray-100');
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
                    src={investor.logo} 
                    alt={`${investor.name} logo`}
                    onError={handleImageError}
                    className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
