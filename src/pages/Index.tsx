
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AppIconsCarousel from '@/components/AppIconsCarousel';
import CompanyInfo from '@/components/CompanyInfo';
import ProductsSection from '@/components/ProductsSection';
import InvestorsSection from '@/components/InvestorsSection';
import ContactSection from '@/components/ContactSection';
import LanguageToggle from '@/components/LanguageToggle';
import CompanyHistory from '@/components/CompanyHistory';
import AwardsSection from '@/components/AwardsSection';
import FoundersSection from '@/components/FoundersSection';
import { LanguageProvider } from '@/context/LanguageContext';

const Index = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden">
        <LanguageToggle />
        <HeroSection />
        <AppIconsCarousel />
        <CompanyInfo />
        <CompanyHistory />
        <ProductsSection />
        <AwardsSection />
        <FoundersSection />
        <InvestorsSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
