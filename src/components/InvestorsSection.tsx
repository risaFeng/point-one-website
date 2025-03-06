
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
  
  // Investor logos array with the updated image paths
  const investors = [
    { 
      name: 'Peak XV',
      logoSrc: '/lovable-uploads/7efee26b-f892-4c10-8a1e-6557429c3347.png'
    },
    { 
      name: 'Sky9 Capital',
      logoSrc: '/lovable-uploads/aa3fde85-058a-4819-a8ee-17f9d6b48c1f.png'
    },
    { 
      name: 'Source Code Capital',
      logoSrc: '/lovable-uploads/1050abab-e51d-4cb9-86f1-cd135416b71f.png'
    },
    { 
      name: 'Qiming Ventures',
      logoSrc: '/lovable-uploads/73a67ba5-f809-42a5-9841-b531f7729c86.png'
    },
    { 
      name: 'Northern Light VC',
      logoSrc: '/lovable-uploads/99a55e2b-0137-47fd-9862-faa7918b9526.png'
    },
    { 
      name: 'NetEase',
      logoSrc: '/lovable-uploads/2a909bd0-ab9b-4351-9ffc-044cb67a36e0.png'
    },
    { 
      name: 'ClearVue Partners',
      logoSrc: '/lovable-uploads/597a8eee-81b7-4214-ad2e-f844ef6ee178.png'
    },
    { 
      name: 'GraniteAsia',
      logoSrc: '/lovable-uploads/7666df85-7dfd-435f-93a6-da81bcc55b56.png'
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
          className="relative mb-12 overflow-hidden"
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
