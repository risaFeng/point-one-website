
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { GamepadIcon, Bot, Globe, BrainCircuit, Puzzle } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const productCards = [
    {
      title: t('products.item1.title'),
      description: t('products.item1.description'),
      icon: <GamepadIcon size={24} className="text-blue-600" />,
      features: ['AI-driven content creation', 'Player-generated worlds', 'Cross-platform compatibility'],
      color: 'from-blue-500 to-indigo-600',
      delay: 0.1
    },
    {
      title: t('products.item2.title'),
      description: t('products.item2.description'),
      icon: <Globe size={24} className="text-purple-600" />,
      features: ['Real-time translation', 'Cultural context awareness', 'Global community building'],
      color: 'from-purple-500 to-pink-600',
      delay: 0.3
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl z-0"></div>
      
      {/* Floating icons */}
      <motion.div 
        className="absolute top-20 left-1/4 opacity-20"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut" 
        }}
      >
        <Bot size={60} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-1/4 opacity-20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <BrainCircuit size={70} />
      </motion.div>
      
      <motion.div 
        className="absolute top-2/3 left-1/5 opacity-20"
        animate={{ 
          y: [0, 10, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Puzzle size={50} />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
              AI-Powered
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            {t('products.title')}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {productCards.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: product.delay }}
              className="group relative rounded-xl overflow-hidden shadow-lg hover-lift"
            >
              <div className="absolute inset-0 opacity-80 z-0 bg-gradient-to-r border border-white/20" style={{ opacity: 0.05 }}></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-30 z-0" style={{ background: `radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, transparent 70%)` }}></div>
              
              <div className="bg-white p-8 rounded-xl relative z-10 h-full flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                    {product.icon}
                  </div>
                  <motion.div 
                    className="bg-gradient-to-r w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, #4f46e5, #8b5cf6)` }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <ul className="mt-auto space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to right, #4f46e5, #8b5cf6)` }}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-8 rounded-xl glass-card bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">AI-Powered Applications</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">175+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100M+</div>
              <div className="text-gray-600">Global Downloads</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
