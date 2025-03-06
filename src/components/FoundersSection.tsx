
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Users, Sparkles } from 'lucide-react';

const FoundersSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const founders = [
    {
      name: t('founders.risa.name'),
      bio: t('founders.risa.bio'),
      image: "/lovable-uploads/4730bc85-9a92-4e80-81eb-253106d3a071.png", // Risa's image
      socials: []
    },
    {
      name: t('founders.shawn.name'),
      bio: t('founders.shawn.bio'),
      image: "/lovable-uploads/49121768-815e-429c-ad37-72e44dd1154b.png", // Shawn's image
      socials: []
    }
  ];

  return (
    <section id="founders" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200 to-transparent opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-200 to-transparent opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-3">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-4 py-1.5 rounded-full flex items-center justify-center">
              <Sparkles className="inline-block mr-1.5" size={14} />
              {t('founders.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('founders.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 flex flex-col items-center border border-gray-100 rounded-xl shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-5 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {founder.name}
                  </h3>
                  
                  <div className="mb-6 overflow-hidden rounded-2xl w-48 h-64 mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 ring-2 ring-white group-hover:ring-blue-200">
                    <div className="w-full h-full overflow-hidden">
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm leading-relaxed max-w-sm mx-auto">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
