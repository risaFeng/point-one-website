
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';

const InvestorsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += 0.5; // Speed of scroll
      
      // Reset when we've scrolled to a point where we can loop
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  // Investor logos array with the correct image paths
  const investors = [
    { 
      name: 'Peak XV',
      logoSrc: '/lovable-uploads/7c0c247d-9ec7-4ee9-b26b-7c0abb921a58.png'
    },
    { 
      name: 'Sky9 Capital',
      logoSrc: '/lovable-uploads/17c2bbd3-99b2-40aa-b909-e0df50022aa9.png'
    },
    { 
      name: 'Source Code Capital',
      logoSrc: '/lovable-uploads/844cf486-6776-4d89-8346-ebe6952b7bd3.png'
    },
    { 
      name: 'Qiming Ventures',
      logoSrc: '/lovable-uploads/705dea9a-7780-4771-abec-6177c5cd7092.png'
    },
    { 
      name: 'Northern Light VC',
      logoSrc: '/lovable-uploads/3ba04488-8b65-404c-881c-490468817ca6.png'
    },
    { 
      name: 'NetEase',
      logoSrc: '/lovable-uploads/4df79034-86d5-4061-b94a-a826b9e99701.png'
    },
    { 
      name: 'ClearVue Partners',
      logoSrc: '/lovable-uploads/d8c311a9-076f-49b0-ab65-152d822ef2c8.png'
    },
    { 
      name: 'GraniteAsia',
      logoSrc: '/lovable-uploads/bc5b8fd7-4574-4df0-afa7-0bdb9916bc3a.png'
    }
  ];

  // Duplicate the investors to create a seamless loop
  const allInvestors = [...investors, ...investors];

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
          className="text-center mb-12"
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

        {/* Investors Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 py-6 px-4 custom-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allInvestors.map((investor, index) => (
              <motion.div
                key={`investor-${index}`}
                className="flex-shrink-0"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-300 hover:border-black transition-all duration-300 p-4">
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
          <div className="inline-block px-6 py-3 rounded-full bg-white text-black text-sm font-medium border border-black">
            {t('multiple.rounds')}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorsSection;
