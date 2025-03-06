
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Globe, TwitterIcon, Instagram, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: <Mail className="text-black" size={24} />,
      title: t('contact.email'),
      detail: 'contact@pointone.tech',
    },
    {
      icon: <MapPin className="text-black" size={24} />,
      title: t('contact.location'),
      detail: 'Beijing, China | San Francisco, USA',
    },
    {
      icon: <Globe className="text-black" size={24} />,
      title: t('contact.social'),
      detail: t('contact.social'),
      socials: [
        { icon: <TwitterIcon size={18} />, url: 'https://twitter.com' },
        { icon: <Instagram size={18} />, url: 'https://instagram.com' },
        { icon: <Linkedin size={18} />, url: 'https://linkedin.com' },
      ]
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
            <span className="bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full">
              {t('get.in.touch')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-black">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black p-8 rounded-xl border border-gray-200 hover:border-black transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-gray-100 mr-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{item.detail}</p>
              
              {item.socials && (
                <div className="flex gap-4 mt-auto">
                  {item.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <footer className="bg-black text-white p-10 rounded-xl">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/b2475733-698f-4e44-8ede-55fa83f0a0b6.png" 
                alt="Point One Logo" 
                className="h-16"
              />
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
