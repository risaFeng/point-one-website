
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AppIconsCarousel: React.FC = () => {
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

  // App icon data using the uploaded images
  const appIcons = [
    "/lovable-uploads/0a77fb25-d249-44a0-99f3-d37e14eea01f.png",
    "/lovable-uploads/f0c4bc5c-49c5-4cef-a49e-da5521f73120.png",
    "/lovable-uploads/f88e5cf9-0d4d-4e11-9122-02f5c2b75627.png", 
    "/lovable-uploads/a92ddef9-3457-472c-8626-5a1541cce3e5.png",
    "/lovable-uploads/741bc1d0-6887-48fd-9dc6-fc6b4f3cfd4d.png",
    "/lovable-uploads/71c12328-6afb-4db3-abdb-b94d77a98b72.png",
    "/lovable-uploads/e93cad23-55b4-4a50-80b8-fff19783bda1.png",
    "/lovable-uploads/2622bb7e-aec4-4d5f-b5d2-630b222c9df5.png",
    "/lovable-uploads/54c4b1e4-ddf1-4a85-8d77-c07580de43ba.png",
    "/lovable-uploads/3ac7d81a-49d7-4356-b4cf-48012f818157.png",
    "/lovable-uploads/0715e84c-d6af-4f60-9988-97164f576b74.png"
  ];

  // Duplicate the icons to create a seamless loop
  const allIcons = [...appIcons, ...appIcons];

  return (
    <motion.section 
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden gap-8 py-6 px-4 custom-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allIcons.map((icon, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              style={{ width: '80px', height: '80px' }}
            >
              <motion.img
                src={icon}
                alt={`App ${index % appIcons.length + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AppIconsCarousel;
