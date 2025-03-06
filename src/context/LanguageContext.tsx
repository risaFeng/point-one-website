import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'hero.title': 'Point One',
    'hero.subtitle': 'Innovator in Global Mobile Gaming & AI Consumer Products',
    'hero.cta': 'Learn More',
    'about.title': 'About Us',
    'about.subtitle': 'Focused on the fusion of global mobile entertainment and AI technology',
    'about.description': 'Point One is a globally leading technology company focused on mobile entertainment games and artificial intelligence. Our mission is to empower users worldwide through innovative technology, breaking geographical and cultural limitations. With a powerful AI R&D team and global vision, we have successfully developed over 10 application products, covering 175 countries worldwide with total downloads exceeding 100 million. Our AI game UGC platform transforms players from game participants into content creators, while our global AI consumer products are dedicated to solving real problems with AI technology, providing genuine value to global users in various scenarios.',
    'history.title': 'Company History',
    'history.2019.title': '2019年7月',
    'history.2019.description': 'Risa和Shawn从美国硅谷回国，共同创立了Point One Inc.，开启了公司在科技创新领域的征程。',
    'history.2019-2021.title': '2019-2021年',
    'history.2019-2021.description': '公司先后完成了由一线美元基金纪源资本和源码资本领投的数百万美元Pre-A轮和A轮融资，并成功推出了面向全球年轻人的3D互动娱乐平台BUD，迅速吸引了大量用户。',
    'history.2021.title': '2021年末',
    'history.2021.description': 'Point One Inc.完成了1500万美元的A+轮融资，本轮融资由启明创投领投，老股东源码资本、纪源资本和云九资本超额跟投，进一步巩固了公司在行业中的地位。',
    'history.2022.title': '2022年5月',
    'history.2022.description': '公司再次完成3680万美元的B轮融资，本轮融资由Peak XV Partners（前红杉印度）领投，网易等多家知名美元基金跟投，标志着公司在资本市场的持续认可。',
    'history.present.title': '2022年至今',
    'history.present.description': 'Point One Inc.不断拓展全球市场，推出了多款面向海内外的创新产品，覆盖全球175个国家，产品总下载量突破1亿次。其中，多款产品在中国、美国、日本、英国等主要市场表现尤为突出，成功进入Top10榜单，展现了公司在全球范围内的强大竞争力和用户影响力。',
    'awards.title': '获奖经历',
    'awards.subtitle': '在全球移动娱乐游戏和AI消费产品领域，Point One凭借产品BUD屡获殊荣，彰显强大实力。',
    'awards.2022.title': '2022年',
    'awards.2022.item1': '2022年6月，BUD联合创始人Risa入选创业邦"30位30岁以下创业先锋"，展现出公司团队的创新活力。',
    'awards.2022.item2': '6月28日，BUD获"2022中国未来独角兽企业"认证，凸显其在行业的发展潜力。',
    'awards.2022.item3': '同年，Risa入选福布斯"30 Under 30 - Asia - Consumer Technology"榜单，提升了BUD及Point One的国际知名度。',
    'awards.2023.title': '2023年',
    'awards.2023.item1': 'Risa登上《2023常熟昆承湖・胡润U30中国创业先锋》榜单，再次证明公司创新成果获认可。（2024年3月发布榜单）',
    'awards.2024.title': '2024年',
    'awards.2024.item1': 'BUD荣获弗若斯特沙利文"中国生成式AI游戏文娱行业最佳应用实践"奖，体现公司在技术融合方面的领先地位。',
    'awards.conclusion': '这些奖项激励着Point One，依托BUD持续创新，为全球用户打造更优质产品。',
    'founders.title': '创始人介绍',
    'founders.risa.name': 'Risa',
    'founders.risa.bio': '2017年毕业于美国康奈尔大学，获计算机和数学本科双学位。2017-2019年曾任职于Snapchat美国洛杉矶总部，担任AR互动设计师，负责创新AR特效的研发，以及AR引擎Lens Studio从0到1的生态搭建，曾打造出数款全球爆款AR效果。2019年Risa回国创立Point One，全面负责公司整体管理、核心产品研发、运营推广及战略规划，2022年福布斯亚洲30岁以下精英榜消费者技术类榜首获得者。',
    'founders.shawn.name': 'Shawn',
    'founders.shawn.bio': '毕业于美国罗格斯大学，获计算机科学硕士学位，本科就读于中国同济大学。2015至2019年期间，他先后任职于Snapchat美国洛杉矶总部以及Meta旧金山总部，在互动娱乐产品研发领域积累了丰富经验。2019年，Shawn回国创立Point One。作为公司核心创始人，他全面统筹公司战略规划与产品研发工作，成功推动公司实现数次爆款产品上线，助力公司顺利完成多轮融资，引领公司在行业内不断开拓进取，稳健发展。',
    'achievements.title': '全球成就',
    'achievements.subtitle': '我们的国际化团队，拥有独到的全球视野和本地化运营能力',
    'achievements.item1': '10多款应用产品，覆盖175个国家，产品总下载量超1亿',
    'achievements.item2': '多款产品在中国、美国、日本、英国等主要市场进入Top10榜单',
    'achievements.item3': '公司已获Peak XV（前红杉印度)、纪源资本、锴明投资、网易、北极光创投、启明创投、源码资本、云九资本等多家主流机构多轮融资',
    'products.title': '我们的产品',
    'products.subtitle': '创新AI消费产品与游戏体验',
    'products.item1.title': 'AI游戏UGC平台',
    'products.item1.description': '在移动平台上打造交互式AI NPC和玩家创造世界，让玩家从游戏参与者转变为内容创作者',
    'products.item2.title': '全球AI消费产品',
    'products.item2.description': '利用最先进的LLM和扩散技术提高生产力，解决实际生活问题，为用户创造真实价值',
    'investors.title': '投资方',
    'investors.subtitle': '获得全球顶级投资机构的支持',
    'contact.title': '联系我们',
    'contact.subtitle': '期待与您合作',
    'contact.email': '邮箱',
    'contact.location': '位置',
    'contact.social': '社交媒体',
    'footer.copyright': '© 2024 Point One. 保留所有权利。',
    'backed.by': '支持方',
    'get.in.touch': '联系我们',
    'ai.powered': 'AI驱动',
    'multiple.rounds': '获得多家主流机构多轮融资',
    'ai.content.creation': 'AI驱动内容创作',
    'player.generated.worlds': '玩家创建的世界',
    'cross.platform': '跨平台兼容',
    'realtime.translation': '实时翻译',
    'cultural.context': '文化情境感知',
    'global.community': '全球社区建设',
    'applications': 'AI驱动消费产品',
    'countries.served': '覆盖国家',
    'global.downloads': '全球下载量',
    'point.one': 'Point One',
    'ai.npc.interaction': 'AI互动NPC技术',
    'player.created.worlds': '玩家自建游戏世界',
    'mobile.first.gaming': '移动优先游戏体验',
    'productivity.enhancement': '生产力提升工具',
    'sota.ai.technology': '最先进的LLM与扩散模型',
    'real.problem.solving': '实际问题解决方案',
    'download': 'Download',
  },
  cn: {
    'hero.title': 'Point One',
    'hero.subtitle': '全球移动娱乐游戏与AI消费产品领域的创新者',
    'hero.cta': '了解更多',
    'about.title': '关于我们',
    'about.subtitle': '专注于全球移动娱乐与AI技术的融合',
    'about.description': 'Point One是一家全球领先的科技公司，专注于移动娱乐游戏与人工智能领域。我们的使命是通过创新技术赋能全球用户，打破地域与文化的限制。凭借强大的AI研发团队和全球化视野，我们成功开发了10多款应用产品，覆盖全球175个国家，产品总下载量突破1亿次。我们的AI游戏UGC平台让玩家从游戏参与者转变为内容创作者，而我们的全球AI消费产品则致力于用人工智能技术解决实际问题，在各种场景中为全球用户提供真实价值。',
    'history.title': '发展历程',
    'history.2019.title': '2019年7月',
    'history.2019.description': 'Risa和Shawn从美国硅谷回国，共同创立了Point One Inc.，开启了公司在科技创新领域的征程。',
    'history.2019-2021.title': '2019-2021年',
    'history.2019-2021.description': '公司先后完成了由一线美元基金纪源资本和源码资本领投的数百万美元Pre-A轮和A轮融资，并成功推出了面向全球年轻人的3D互动娱乐平台BUD，迅速吸引了大量用户。',
    'history.2021.title': '2021年末',
    'history.2021.description': 'Point One Inc.完成了1500万美元的A+轮融资，本轮融资由启明创投领投，老股东源码资本、纪源资本和云九资本超额跟投，进一步巩固了公司在行业中的地位。',
    'history.2022.title': '2022年5月',
    'history.2022.description': '公司再次完成3680万美元的B轮融资，本轮融资由Peak XV Partners（前红杉印度）领投，网易等多家知名美元基金跟投，标志着公司在资本市场的持续认可。',
    'history.present.title': '2022年至今',
    'history.present.description': 'Point One Inc.不断拓展全球市场，推出了多款面向海内外的创新产品，覆盖全球175个国家，产品总下载量突破1亿次。其中，多款产品在中国、美国、日本、英国等主要市场表现尤为突出，成功进入Top10榜单，展现了公司在全球范围内的强大竞争力和用户影响力。',
    'awards.title': '获奖经历',
    'awards.subtitle': '在全球移动娱乐游戏和AI消费产品领域，Point One凭借产品BUD屡获殊荣，彰显强大实力。',
    'awards.2022.title': '2022年',
    'awards.2022.item1': '2022年6月，BUD联合创始人Risa入选创业邦"30位30岁以下创业先锋"，展现出公司团队的创新活力。',
    'awards.2022.item2': '6月28日，BUD获"2022中国未来独角兽企业"认证，凸显其在行业的发展潜力。',
    'awards.2022.item3': '同年，Risa入选福布斯"30 Under 30 - Asia - Consumer Technology"榜单，提升了BUD及Point One的国际知名度。',
    'awards.2023.title': '2023年',
    'awards.2023.item1': 'Risa登上《2023常熟昆承湖・胡润U30中国创业先锋》榜单，再次证明公司创新成果获认可。（2024年3月发布榜单）',
    'awards.2024.title': '2024年',
    'awards.2024.item1': 'BUD荣获弗若斯特沙利文"中国生成式AI游戏文娱行业最佳应用实践"奖，体现公司在技术融合方面的领先地位。',
    'awards.conclusion': '这些奖项激励着Point One，依托BUD持续创新，为全球用户打造更优质产品。',
    'founders.title': '创始人介绍',
    'founders.risa.name': 'Risa',
    'founders.risa.bio': '2017年毕业于美国康奈尔大学，获计算机和数学本科双学位。2017-2019年曾任职于Snapchat美国洛杉矶总部，担任AR互动设计师，负责创新AR特效的研发，以及AR引擎Lens Studio从0到1的生态搭建，曾打造出数款全球爆款AR效果。2019年Risa回国创立Point One，全面负责公司整体管理、核心产品研发、运营推广及战略规划，2022年福布斯亚洲30岁以下精英榜消费者技术类榜首获得者。',
    'founders.shawn.name': 'Shawn',
    'founders.shawn.bio': '毕业于美国罗格斯大学，获计算机科学硕士学位，本科就读于中国同济大学。2015至2019年期间，他先后任职于Snapchat美国洛杉矶总部以及Meta旧金山总部，在互动娱乐产品研发领域积累了丰富经验。2019年，Shawn回国创立Point One。作为公司核心创始人，他全面统筹公司战略规划与产品研发工作，成功推动公司实现数次爆款产品上线，助力公司顺利完成多轮融资，引领公司在行业内不断开拓进取，稳健发展。',
    'achievements.title': '全球成就',
    'achievements.subtitle': '我们的国际化团队，拥有独到的全球视野和本地化运营能力',
    'achievements.item1': '10多款应用产品，覆盖175个国家，产品总下载量超1亿',
    'achievements.item2': '多款产品在中国、美国、日本、英国等主要市场进入Top10榜单',
    'achievements.item3': '公司已获Peak XV（前红杉印度)、纪源资本、锴明投资、网易、北极光创投、启明创投、源码资本、云九资本等多家主流机构多轮融资',
    'products.title': '我们的产品',
    'products.subtitle': '创新AI消费产品与游戏体验',
    'products.item1.title': 'AI游戏UGC平台',
    'products.item1.description': '在移动平台上打造交互式AI NPC和玩家创造世界，让玩家从游戏参与者转变为内容创作者',
    'products.item2.title': '全球AI消费产品',
    'products.item2.description': '利用最先进的LLM和扩散技术提高生产力，解决实际生活问题，为用户创造真实价值',
    'investors.title': '投资方',
    'investors.subtitle': '获得全球顶级投资机构的支持',
    'contact.title': '联系我们',
    'contact.subtitle': '期待与您合作',
    'contact.email': '邮箱',
    'contact.location': '位置',
    'contact.social': '社交媒体',
    'footer.copyright': '© 2024 Point One. 保留所有权利。',
    'backed.by': '支持方',
    'get.in.touch': '联系我们',
    'ai.powered': 'AI驱动',
    'multiple.rounds': '获得多家主流机构多轮融资',
    'ai.content.creation': 'AI驱动内容创作',
    'player.generated.worlds': '玩家创建的世界',
    'cross.platform': '跨平台兼容',
    'realtime.translation': '实时翻译',
    'cultural.context': '文化情境感知',
    'global.community': '全球社区建设',
    'applications': 'AI驱动消费产品',
    'countries.served': '覆盖国家',
    'global.downloads': '全球下载量',
    'point.one': 'Point One',
    'ai.npc.interaction': 'AI互动NPC技术',
    'player.created.worlds': '玩家自建游戏世界',
    'mobile.first.gaming': '移动优先游戏体验',
    'productivity.enhancement': '生产力提升工具',
    'sota.ai.technology': '最先进的LLM与扩散模型',
    'real.problem.solving': '实际问题解决方案',
    'download': '下载',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('zh');

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
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
