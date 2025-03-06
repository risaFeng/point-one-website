
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
    <section id="founders" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-3">
            <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full flex items-center justify-center">
              <Users className="inline-block mr-1.5" size={14} />
              {t('founders.subtitle')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
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
              className="rounded-xl overflow-hidden transition-all duration-300 group relative"
            >
              <div className="relative bg-white p-10 flex flex-col items-center rounded-xl shadow-sm border border-gray-100 h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-black group-hover:text-black transition-colors duration-300">
                    {founder.name}
                  </h3>
                  
                  <div className="mb-6 overflow-hidden rounded-xl w-32 h-40 mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-gray-100 group-hover:border-black">
                    <div className="w-full h-full overflow-hidden">
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-700 group-hover:text-black transition-colors duration-300 text-sm leading-relaxed">
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
