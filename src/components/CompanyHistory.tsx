
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Clock } from 'lucide-react';

const CompanyHistory: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const historyTimeline = [
    {
      period: t('history.2019.title'),
      description: t('history.2019.description')
    },
    {
      period: t('history.2019-2021.title'),
      description: t('history.2019-2021.description')
    },
    {
      period: t('history.2021.title'),
      description: t('history.2021.description')
    },
    {
      period: t('history.2022.title'),
      description: t('history.2022.description')
    },
    {
      period: t('history.present.title'),
      description: t('history.present.description')
    }
  ];

  return (
    <section id="history" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-white text-black text-xs font-medium px-4 py-1.5 rounded-full">
              Point One
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            {t('history.title')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20 rounded-full hidden md:block"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {historyTimeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse text-right' : 'text-left'
                }`}
              >
                <div className="md:w-1/2 mb-4 md:mb-0 px-4">
                  <div className={`bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 p-6 rounded-xl ${
                    index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'
                  }`}>
                    <h3 className="text-xl font-semibold mb-2 text-white">{event.period}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
                
                <div className="md:w-0 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center z-10">
                    <Clock className="text-black" size={20} />
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
