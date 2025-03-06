
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Users } from 'lucide-react';

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
    <section id="founders" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              <Users className="inline-block mr-1" size={14} />
              Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {t('founders.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold">{founder.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
