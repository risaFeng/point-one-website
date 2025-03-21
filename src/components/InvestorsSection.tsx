
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
      logoSrc: '/lovable-uploads/cbeb1673-5f29-486b-9abd-541b03cdc3cd.png'
    },
    { 
      name: 'Sky9 Capital',
      logoSrc: '/lovable-uploads/49cc185a-81b3-48fa-880f-9e892dd9827d.png'
    },
    { 
      name: 'Source Code Capital',
      logoSrc: '/lovable-uploads/805edd2f-c4d0-4484-bf2b-cb93d4c7895d.png'
    },
    { 
      name: 'Qiming Ventures',
      logoSrc: '/lovable-uploads/989b1633-5fef-4cc7-8996-e3eef68452e2.png'
    },
    { 
      name: 'Northern Light VC',
      logoSrc: '/lovable-uploads/8978db89-bc10-41af-83b5-75f9624a59ac.png'
    },
    { 
      name: 'NetEase',
      logoSrc: '/lovable-uploads/978d4854-f1ea-428f-81d6-91111a01d208.png'
    },
    { 
      name: 'ClearVue Partners',
      logoSrc: '/lovable-uploads/bb83d9dc-e3a3-4f21-a921-02c4f4f8bb6f.png'
    },
    { 
      name: 'GraniteAsia',
      logoSrc: '/lovable-uploads/77d32076-d0e8-4a6c-aba9-3c48141dd01c.png'
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
