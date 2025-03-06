
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';

const InvestorsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Placeholder investors - in a real app, you'd use actual logos
  const investors = [
    { 
      name: 'Peak XV (Sequoia India)', 
      logo: 'https://mma.prnewswire.com/media/2100631/Peak_XV_Logo.jpg'
    },
    { 
      name: 'GGV Capital', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/GGV-Capital-Logo.png'
    },
    { 
      name: 'NetEase', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/NetEase_Logo.png'
    },
    { 
      name: 'Northern Light', 
      logo: 'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1422465450/vxekgwroaa5kd9zdcr4k.png'
    },
    { 
      name: 'Qiming', 
      logo: 'https://qimingvc.com/wp-content/themes/qiming/assets/img/logo_qimingventures.png'
    },
    { 
      name: 'Source Code Capital', 
      logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/e3/b1/72/e3b172a3-4f6e-a462-a3e5-68e11b0e9e71/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'
    },
    { 
      name: 'K2VC', 
      logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/e3/b1/72/e3b172a3-4f6e-a462-a3e5-68e11b0e9e71/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'
    },
    { 
      name: 'Yunqi Capital', 
      logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/e3/b1/72/e3b172a3-4f6e-a462-a3e5-68e11b0e9e71/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'
    },
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
              Backed By
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {t('investors.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('investors.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {investors.map((investor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-full h-24 flex items-center justify-center mb-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={investor.logo} 
                  alt={investor.name} 
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">{investor.name}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800 text-sm font-medium">
            Multiple rounds of financing from mainstream institutions
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;
