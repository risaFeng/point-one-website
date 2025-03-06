
import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Globe, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: t('contact.email'),
      detail: 'contact@pointone.tech',
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: t('contact.location'),
      detail: 'Beijing, China | San Francisco, USA',
    },
    {
      icon: <Globe className="text-blue-600" size={24} />,
      title: t('contact.social'),
      detail: t('contact.social'),
      socials: [
        { icon: <Twitter size={20} />, url: 'https://twitter.com' },
        { icon: <Instagram size={20} />, url: 'https://instagram.com' },
        { icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-100 to-transparent opacity-50 rounded-full blur-3xl"></div>
      
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
              {t('get.in.touch')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
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
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-blue-50 mr-4">
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
                      className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
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
          <footer>
            <p className="text-gray-500 text-sm">
              {t('footer.copyright')}
            </p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
