import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'zh' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  // Hero Section
  'hero.title.zh': 'Point One',
  'hero.title.en': 'Point One',
  'hero.subtitle.zh': '全球移动娱乐游戏与AI工具领域的创新者',
  'hero.subtitle.en': 'Innovator in Global Mobile Gaming & AI Tools',
  'hero.cta.zh': '了解更多',
  'hero.cta.en': 'Learn More',
  
  // About Section
  'about.title.zh': '关于我们',
  'about.title.en': 'About Us',
  'about.subtitle.zh': '专注于全球移动娱乐与AI技术的融合',
  'about.subtitle.en': 'Focused on the fusion of global mobile entertainment and AI technology',
  'about.description.zh': 'Point One是一家专注全球移动娱乐游戏与 AI 工具领域的科技公司，核心业务涵盖 AI 游戏 UGC 平台与出海 AI 应用产品。在 AI 游戏 UGC 平台，我们赋予玩家创造能力，使其从单纯的游戏参与者转变为内容创作者，借助 AI 工具打造独特游戏体验。同时，我们积极开发出海 AI APP 产品，以技术打破语言文化壁垒，促进全球用户的连接与交流。我们始终致力于推动娱乐与技术融合，为全球用户提供创新价值。',
  'about.description.en': 'Point One is a technology company focused on global mobile entertainment games and AI tools, with core businesses covering AI game UGC platforms and overseas AI application products. On our AI game UGC platform, we empower players with creative abilities, transforming them from mere game participants into content creators, using AI tools to create unique gaming experiences. At the same time, we actively develop overseas AI APP products, using technology to break down language and cultural barriers, and promote connection and communication among global users. We are committed to promoting the integration of entertainment and technology, providing innovative value to global users.',
  
  // Achievements Section
  'achievements.title.zh': '全球成就',
  'achievements.title.en': 'Global Achievements',
  'achievements.subtitle.zh': '我们的国际化团队，拥有独到的全球视野和本地化运营能力',
  'achievements.subtitle.en': 'Our international team has unique global vision and localized operational capabilities',
  'achievements.item1.zh': '10多款应用产品，覆盖175个国家，产品总下载量超1亿',
  'achievements.item1.en': 'Over 10 application products, covering 175 countries, with total downloads exceeding 100 million',
  'achievements.item2.zh': '多款产品在中国、美国、日本、英国等主要市场进入Top10榜单',
  'achievements.item2.en': 'Multiple products have entered the Top 10 rankings in major markets such as China, the US, Japan, and the UK',
  'achievements.item3.zh': '公司已获Peak XV（前红杉印度)、纪源资本、锴明投资、网易、北极光创投、启明创投、源码资本、云九资本等多家主流机构多轮融资',
  'achievements.item3.en': 'The company has received multiple rounds of financing from mainstream institutions such as Peak XV (formerly Sequoia India), GGV Capital, K2VC, NetEase, Northern Light Venture Capital, Qiming Venture Partners, Source Code Capital, and Yunqi Capital',
  
  // Products Section
  'products.title.zh': '我们的产品',
  'products.title.en': 'Our Products',
  'products.subtitle.zh': '创新AI工具与游戏体验',
  'products.subtitle.en': 'Innovative AI Tools & Gaming Experiences',
  'products.item1.title.zh': 'AI游戏UGC平台',
  'products.item1.title.en': 'AI Game UGC Platform',
  'products.item1.description.zh': '赋予玩家创造能力，使其从单纯的游戏参与者转变为内容创作者',
  'products.item1.description.en': 'Empowering players with creative abilities, transforming them from mere game participants to content creators',
  'products.item2.title.zh': '全球AI应用',
  'products.item2.title.en': 'Global AI Applications',
  'products.item2.description.zh': '以技术打破语言文化壁垒，促进全球用户的连接与交流',
  'products.item2.description.en': 'Breaking language and cultural barriers through technology, facilitating global connection and communication',
  
  // Investors Section
  'investors.title.zh': '投资方',
  'investors.title.en': 'Our Investors',
  'investors.subtitle.zh': '获得全球顶级投资机构的支持',
  'investors.subtitle.en': 'Backed by world-class investment institutions',
  
  // Contact Section
  'contact.title.zh': '联系我们',
  'contact.title.en': 'Contact Us',
  'contact.subtitle.zh': '期待与您合作',
  'contact.subtitle.en': 'We look forward to collaborating with you',
  'contact.email.zh': '邮箱',
  'contact.email.en': 'Email',
  'contact.location.zh': '位置',
  'contact.location.en': 'Location',
  'contact.social.zh': '社交媒体',
  'contact.social.en': 'Social Media',
  
  // Footer
  'footer.copyright.zh': '© 2024 Point One. 保留所有权利。',
  'footer.copyright.en': '© 2024 Point One. All rights reserved.',

  // Other UI Elements
  'backed.by.zh': '支持方',
  'backed.by.en': 'Backed By',
  'get.in.touch.zh': '联系我们',
  'get.in.touch.en': 'Get In Touch',
  'ai.powered.zh': 'AI驱动',
  'ai.powered.en': 'AI-Powered',
  'multiple.rounds.zh': '获得多家主流机构多轮融资',
  'multiple.rounds.en': 'Multiple rounds of financing from mainstream institutions',
  'ai.content.creation.zh': 'AI驱动内容创作',
  'ai.content.creation.en': 'AI-driven content creation',
  'player.generated.worlds.zh': '玩家创建的世界',
  'player.generated.worlds.en': 'Player-generated worlds',
  'cross.platform.zh': '跨平台兼容',
  'cross.platform.en': 'Cross-platform compatibility',
  'realtime.translation.zh': '实时翻译',
  'realtime.translation.en': 'Real-time translation',
  'cultural.context.zh': '文化情境感知',
  'cultural.context.en': 'Cultural context awareness',
  'global.community.zh': '全球社区建设',
  'global.community.en': 'Global community building',
  'applications.zh': 'AI驱动应用',
  'applications.en': 'AI-Powered Applications',
  'countries.served.zh': '覆盖国家',
  'countries.served.en': 'Countries Served',
  'global.downloads.zh': '全球下载量',
  'global.downloads.en': 'Global Downloads',
  'point.one.zh': 'Point One',
  'point.one.en': 'Point One',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese

  const t = (key: string) => {
    const translationKey = `${key}.${language}`;
    return translations[translationKey as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
