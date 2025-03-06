
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Clock, Award } from 'lucide-react';

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
    <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
              Point One
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {t('history.title')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full hidden md:block"></div>
          
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
                  <div className={`bg-white p-6 rounded-xl shadow-sm transition-all hover:shadow-md ${
                    index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'
                  }`}>
                    <h3 className="text-xl font-semibold mb-2 text-purple-700">{event.period}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
                
                <div className="md:w-0 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10">
                    <Clock className="text-white" size={20} />
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
