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
  'hero.subtitle.zh': '全球移动娱乐游戏与AI消费产品领域的创新者',
  'hero.subtitle.en': 'Innovator in Global Mobile Gaming & AI Consumer Products',
  'hero.cta.zh': '了解更多',
  'hero.cta.en': 'Learn More',
  
  // About Section
  'about.title.zh': '关于我们',
  'about.title.en': 'About Us',
  'about.subtitle.zh': '专注于全球移动娱乐与AI技术的融合',
  'about.subtitle.en': 'Focused on the fusion of global mobile entertainment and AI technology',
  'about.description.zh': 'Point One是一家全球领先的科技公司，专注于移动娱乐游戏与人工智能领域。我们的使命是通过创新技术赋能全球用户，打破地域与文化的限制。凭借强大的AI研发团队和全球化视野，我们成功开发了10多款应用产品，覆盖全球175个国家，产品总下载量突破1亿次。我们的AI游戏UGC平台让玩家从游戏参与者转变为内容创作者，而我们的全球AI消费产品则致力于用人工智能技术解决实际问题，在各种场景中为全球用户提供真实价值。',
  'about.description.en': 'Point One is a globally leading technology company focused on mobile entertainment games and artificial intelligence. Our mission is to empower users worldwide through innovative technology, breaking geographical and cultural limitations. With a powerful AI R&D team and global vision, we have successfully developed over 10 application products, covering 175 countries worldwide with total downloads exceeding 100 million. Our AI game UGC platform transforms players from game participants into content creators, while our global AI consumer products are dedicated to solving real problems with AI technology, providing genuine value to global users in various scenarios.',
  
  // Company History Section
  'history.title.zh': '发展历程',
  'history.title.en': 'Company History',
  'history.2019.title.zh': '2019年7月',
  'history.2019.title.en': 'July 2019',
  'history.2019.description.zh': 'Risa和Shawn从美国硅谷回国，共同创立了Point One Inc.，开启了公司在科技创新领域的征程。',
  'history.2019.description.en': 'Risa and Shawn returned from Silicon Valley to co-found Point One Inc., beginning the company\'s journey in technological innovation.',
  'history.2019-2021.title.zh': '2019-2021年',
  'history.2019-2021.title.en': '2019-2021',
  'history.2019-2021.description.zh': '公司先后完成了由一线美元基金纪源资本和源码资本领投的数百万美元Pre-A轮和A轮融资，并成功推出了面向全球年轻人的3D互动娱乐平台BUD，迅速吸引了大量用户。',
  'history.2019-2021.description.en': 'The company completed Pre-A and Series A financing of several million dollars led by GGV Capital and Source Code Capital, and successfully launched BUD, a 3D interactive entertainment platform for global youth, quickly attracting a large user base.',
  'history.2021.title.zh': '2021年末',
  'history.2021.title.en': 'Late 2021',
  'history.2021.description.zh': 'Point One Inc.完成了1500万美元的A+轮融资，本轮融资由启明创投领投，老股东源码资本、纪源资本和云九资本超额跟投，进一步巩固了公司在行业中的地位。',
  'history.2021.description.en': 'Point One Inc. completed a $15 million Series A+ financing led by Qiming Venture Partners, with oversubscription from existing shareholders Source Code Capital, GGV Capital, and Yunqi Capital, further strengthening the company\'s position in the industry.',
  'history.2022.title.zh': '2022年5月',
  'history.2022.title.en': 'May 2022',
  'history.2022.description.zh': '公司再次完成3680万美元的B轮融资，本轮融资由Peak XV Partners（前红杉印度）领投，网易等多家知名美元基金跟投，标志着公司在资本市场的持续认可。',
  'history.2022.description.en': 'The company completed a $36.8 million Series B financing led by Peak XV Partners (formerly Sequoia India), with participation from NetEase and other well-known dollar funds, marking the continued recognition of the company in the capital market.',
  'history.present.title.zh': '2022年至今',
  'history.present.title.en': '2022 to Present',
  'history.present.description.zh': 'Point One Inc.不断拓展全球市场，推出了多款面向海内外的创新产品，覆盖全球175个国家，产品总下载量突破1亿次。其中，多款产品在中国、美国、日本、英国等主要市场表现尤为突出，成功进入Top10榜单，展现了公司在全球范围内的强大竞争力和用户影响力。',
  'history.present.description.en': 'Point One Inc. continuously expands its global market, launching multiple innovative products for domestic and foreign markets, covering 175 countries worldwide with total downloads exceeding 100 million. Many products have performed exceptionally well in major markets such as China, the United States, Japan, and the United Kingdom, successfully entering the Top 10 rankings, demonstrating the company\'s strong competitiveness and user influence globally.',
  
  // Awards Section
  'awards.title.zh': '获奖经历',
  'awards.title.en': 'Awards & Recognition',
  'awards.subtitle.zh': '在全球移动娱乐游戏和AI消费产品领域，Point One凭借产品BUD屡获殊荣，彰显强大实力。',
  'awards.subtitle.en': 'In the field of global mobile entertainment games and AI consumer products, Point One has won numerous awards with its product BUD, demonstrating its strong capabilities.',
  'awards.2022.title.zh': '2022年',
  'awards.2022.title.en': '2022',
  'awards.2022.item1.zh': '2022年6月，BUD联合创始人Risa入选创业邦"30位30岁以下创业先锋"，展现出公司团队的创新活力。',
  'awards.2022.item1.en': 'In June 2022, BUD co-founder Risa was selected as one of the "30 Under 30 Entrepreneurial Pioneers" by Cyzone, demonstrating the innovative vitality of the company\'s team.',
  'awards.2022.item2.zh': '6月28日，BUD获"2022中国未来独角兽企业"认证，凸显其在行业的发展潜力。',
  'awards.2022.item2.en': 'On June 28, BUD was certified as a "2022 China Future Unicorn Enterprise," highlighting its development potential in the industry.',
  'awards.2022.item3.zh': '同年，Risa入选福布斯"30 Under 30 - Asia - Consumer Technology"榜单，提升了BUD及Point One的国际知名度。',
  'awards.2022.item3.en': 'In the same year, Risa was selected for the Forbes "30 Under 30 - Asia - Consumer Technology" list, enhancing the international reputation of BUD and Point One.',
  'awards.2023.title.zh': '2023年',
  'awards.2023.title.en': '2023',
  'awards.2023.item1.zh': 'Risa登上《2023常熟昆承湖・胡润U30中国创业先锋》榜单，再次证明公司创新成果获认可。（2024年3月发布榜单）',
  'awards.2023.item1.en': 'Risa was listed on the "2023 Changshu Kuncheng Lake - Hurun U30 China Entrepreneurial Pioneers" list, once again proving that the company\'s innovative achievements have been recognized. (List released in March 2024)',
  'awards.2024.title.zh': '2024年',
  'awards.2024.title.en': '2024',
  'awards.2024.item1.zh': 'BUD荣获弗若斯特沙利文"中国生成式AI游戏文娱行业最佳应用实践"奖，体现公司在技术融合方面的领先地位。',
  'awards.2024.item1.en': 'BUD won the Frost & Sullivan "China Generative AI Gaming and Entertainment Industry Best Application Practice" award, reflecting the company\'s leading position in technology integration.',
  'awards.conclusion.zh': '这些奖项激励着Point One，依托BUD持续创新，为全球用户打造更优质产品。',
  'awards.conclusion.en': 'These awards inspire Point One to continue innovation based on BUD and create better products for global users.',
  
  // Founders Section
  'founders.title.zh': '创始人介绍',
  'founders.title.en': 'Our Founders',
  'founders.risa.name.zh': 'Risa',
  'founders.risa.name.en': 'Risa',
  'founders.risa.bio.zh': '2017年毕业于美国康奈尔大学，获计算机和数学本科双学位。2017-2019年曾任职于Snapchat美国洛杉矶总部，担任AR互动设计师，负责创新AR特效的研发，以及AR引擎Lens Studio从0到1的生态搭建，曾打造出数款全球爆款AR效果。2019年Risa回国创立Point One，全面负责公司整体管理、核心产品研发、运营推广及战略规划，2022年福布斯亚洲30岁以下精英榜消费者技术类榜首获得者。',
  'founders.risa.bio.en': 'Graduated from Cornell University in 2017 with dual bachelor\'s degrees in Computer Science and Mathematics. From 2017 to 2019, she worked at Snapchat\'s Los Angeles headquarters as an AR Interactive Designer, responsible for developing innovative AR effects and building the ecosystem of the AR engine Lens Studio from 0 to 1, creating several globally popular AR effects. In 2019, Risa returned to China to found Point One, fully responsible for the company\'s overall management, core product development, operations promotion, and strategic planning. She was the top recipient in the Consumer Technology category of the 2022 Forbes Asia 30 Under 30 list.',
  'founders.shawn.name.zh': 'Shawn',
  'founders.shawn.name.en': 'Shawn',
  'founders.shawn.bio.zh': '毕业于美国罗格斯大学，获计算机科学硕士学位，本科就读于中国同济大学。2015至2019年期间，他先后任职于Snapchat美国洛杉矶总部以及Meta旧金山总部，在互动娱乐产品研发领域积累了丰富经验。2019年，Shawn回国创立Point One。作为公司核心创始人，他全面统筹公司战略规划与产品研发工作，成功推动公司实现数次爆款产品上线，助力公司顺利完成多轮融资，引领公司在行业内不断开拓进取，稳健发展。',
  'founders.shawn.bio.en': 'Graduated from Rutgers University with a master\'s degree in Computer Science, and completed his undergraduate studies at Tongji University in China. From 2015 to 2019, he worked at Snapchat\'s Los Angeles headquarters and Meta\'s San Francisco headquarters, accumulating rich experience in interactive entertainment product development. In 2019, Shawn returned to China to co-found Point One. As a core founder of the company, he comprehensively coordinates the company\'s strategic planning and product development, successfully promoting multiple hit product launches, helping the company complete multiple rounds of financing, and leading the company to continuously pioneer and develop steadily in the industry.',
  
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
  'products.subtitle.zh': '创新AI消费产品与游戏体验',
  'products.subtitle.en': 'Innovative AI Consumer Products & Gaming Experiences',
  'products.item1.title.zh': 'AI游戏UGC平台',
  'products.item1.title.en': 'AI Game UGC Platform',
  'products.item1.description.zh': '赋予玩家创造能力，使其从单纯的游戏参与者转变为内容创作者',
  'products.item1.description.en': 'Empowering players with creative abilities, transforming them from mere game participants to content creators',
  'products.item2.title.zh': '全球AI消费产品',
  'products.item2.title.en': 'Global AI Consumer Products',
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
  'applications.zh': 'AI驱动消费产品',
  'applications.en': 'AI-Powered Consumer Products',
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
