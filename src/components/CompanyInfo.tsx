
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Globe, Users, Award } from 'lucide-react';

const CompanyInfo: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full opacity-50 blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Point One</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {t('about.title')}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="p-6 rounded-xl glass-card hover-lift">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="text-blue-600" size={24} />
                {t('achievements.title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl leading-7">•</span>
                  <span>{t('achievements.item1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl leading-7">•</span>
                  <span>{t('achievements.item2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl leading-7">•</span>
                  <span>{t('achievements.item3')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[500px] overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-90 z-10 mix-blend-multiply"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Global team collaboration"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="text-3xl font-bold">175+</div>
                    <div className="text-sm">Countries</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="text-3xl font-bold">100M+</div>
                    <div className="text-sm">Downloads</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm">Apps</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white p-4 rounded-lg shadow-xl">
              <motion.div 
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut" 
                }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" 
                  alt="Technology icon" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
