
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Gamepad, Globe, Sparkles } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll effect for product icons
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

  // Product app icons
  const productIcons = [
    "/lovable-uploads/0a77fb25-d249-44a0-99f3-d37e14eea01f.png",
    "/lovable-uploads/f0c4bc5c-49c5-4cef-a49e-da5521f73120.png",
    "/lovable-uploads/f88e5cf9-0d4d-4e11-9122-02f5c2b75627.png", 
    "/lovable-uploads/a92ddef9-3457-472c-8626-5a1541cce3e5.png",
    "/lovable-uploads/741bc1d0-6887-48fd-9dc6-fc6b4f3cfd4d.png",
    "/lovable-uploads/71c12328-6afb-4db3-abdb-b94d77a98b72.png",
    "/lovable-uploads/e93cad23-55b4-4a50-80b8-fff19783bda1.png",
    "/lovable-uploads/2622bb7e-aec4-4d5f-b5d2-630b222c9df5.png",
    "/lovable-uploads/54c4b1e4-ddf1-4a85-8d77-c07580de43ba.png"
  ];

  // Duplicate the icons to create a seamless loop
  const allIcons = [...productIcons, ...productIcons];

  const getProductFeatures = (index: number) => {
    if (index === 0) {
      return [
        t('ai.npc.interaction'),
        t('player.created.worlds'),
        t('mobile.first.gaming')
      ];
    } else {
      return [
        t('productivity.enhancement'),
        t('sota.ai.technology'),
        t('real.problem.solving')
      ];
    }
  };

  const productCards = [
    {
      title: t('products.item1.title'),
      description: t('products.item1.description'),
      icon: <Gamepad size={24} className="text-black" />,
      features: getProductFeatures(0),
      delay: 0.1
    },
    {
      title: t('products.item2.title'),
      description: t('products.item2.description'),
      icon: <Globe size={24} className="text-black" />,
      features: getProductFeatures(1),
      delay: 0.3
    }
  ];

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full flex items-center justify-center">
              <Sparkles className="inline-block mr-1.5" size={14} />
              {t('ai.powered')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-black">
            {t('products.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Product Icons Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
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
                  alt={`Product ${index % productIcons.length + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {productCards.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: product.delay }}
              className="group relative rounded-xl overflow-hidden border border-black transition-all duration-300 bg-white text-black hover:shadow-lg"
            >
              <div className="relative p-8 flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-gray-100">
                    {product.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                <ul className="mt-auto space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 p-8 rounded-xl border border-black bg-white text-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-black mb-2">10+</div>
              <div className="text-gray-700">{t('applications')}</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-black mb-2">175+</div>
              <div className="text-gray-700">{t('countries.served')}</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-black mb-2">100M+</div>
              <div className="text-gray-700">{t('global.downloads')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
