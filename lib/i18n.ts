export type Language = 'zh' | 'en' | 'es' | 'ru'

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

export const translations = {
  zh: {
    nav: {
      home: '首页 - 拉美电商工具',
      tools: '工具测评',
      consulting: '跨境咨询',
      about: '关于我们',
      contact: '联系我们',
    },
    hero: {
      title: '拉美跨境电商工具测评专家',
      subtitle: '专注拉美市场，为您提供Mercado Libre、ERP管理、广告投放等跨境电商工具测评与咨询服务',
      cta: '查看工具测评',
      secondary: '了解更多',
    },
    about: {
      title: '关于我们',
      description: '我们从事跨境电商行业8年，对国家政策有深刻了解，在跨境电商运营、跨境广告投放等方面拥有丰富的实际操作经验。我们致力于为您提供最专业、最实用的工具测评和咨询服务。',
      experience: '8年行业经验',
      expertise: '专业团队支持',
      global: '拉美市场专家',
    },
    stats: {
      years: '年电商经验',
      tools: '工具测评&评级',
      clients: '卖家成功案例',
      countries: '拉美国家覆盖',
    },
    tools: {
      title: '热门工具测评',
      subtitle: '精选拉美跨境电商必备工具，助力卖家高效运营',
      viewMore: '查看详情',
      card1: {
        title: 'Mercado Libre 卖家工具',
        description: '专为Mercado Libre卖家打造的运营工具，帮助高效管理店铺、分析销售数据、优化listing与广告运营。',
      },
      card2: {
        title: 'ERP 管理系统',
        description: '一站式跨境电商ERP管理系统，支持Mercado Libre等多平台订单处理、库存管理和财务分析。',
      },
      card3: {
        title: '广告投放工具',
        description: '精准的拉美市场广告投放解决方案，支持Facebook、Google广告管理，助力跨境卖家提升ROI。',
      },
    },
    consulting: {
      title: '跨境咨询',
      subtitle: '最新跨境电商资讯与政策解读',
      news: [
        {
          title: '2024年中国-拉美跨境电商新政策解读',
          summary: '解读最新中国与拉美国家之间的跨境电商优惠政策，包括关税减免和物流便利化措施。',
          date: '2024-01-15',
        },
        {
          title: '巴西电商市场发展趋势分析',
          summary: '深度分析巴西电商市场现状与未来发展趋势，为卖家提供市场进入策略建议。',
          date: '2024-01-12',
        },
        {
          title: '墨西哥跨境物流解决方案指南',
          summary: '详细介绍墨西哥市场主流跨境物流服务商及其优缺点，帮助卖家选择最优物流方案。',
          date: '2024-01-10',
        },
      ],
    },
    footer: {
      description: '专注拉美跨境电商工具测评与咨询服务',
      quickLinks: '快速链接',
      contactUs: '联系我们',
      address: '地址：中国陕西',
      email: '邮箱',
      copyright: '© 2026 MeliToolHub | 拉美跨境电商工具测评与咨询服务 | 专注Mercado Libre、ERP与广告投放工具',
    },
  },
  en: {
    nav: {
      home: 'Home - LATAM Tools',
      tools: 'Tool Reviews',
      consulting: 'Consulting',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Latin America E-commerce Tool Expert',
      subtitle: 'Focused on Latin American markets, providing professional Mercado Libre, ERP, and advertising tool reviews and consulting services',
      cta: 'View Tool Reviews',
      secondary: 'Learn More',
    },
    about: {
      title: 'About Us',
      description: 'With 8 years of experience in cross-border e-commerce, we have deep understanding of national policies and rich practical experience in e-commerce operations and advertising. We are committed to providing you with the most professional and practical tool reviews and consulting services.',
      experience: '8 Years Experience',
      expertise: 'Expert Team Support',
      global: 'LATAM Market Expert',
    },
    stats: {
      years: 'Years of E-Commerce Expertise',
      tools: 'Tools Reviewed & Ranked',
      clients: 'Sellers Helped Grow',
      countries: 'LATAM Countries Covered',
    },
    tools: {
      title: 'Popular Tool Reviews',
      subtitle: 'Essential tools for Latin American cross-border e-commerce to help sellers operate efficiently',
      viewMore: 'View Details',
      card1: {
        title: 'Mercado Libre Seller Tools',
        description: 'Operations tools built for Mercado Libre sellers, helping efficiently manage stores, analyze sales data, and optimize listing & ad operations.',
      },
      card2: {
        title: 'ERP Management System',
        description: 'One-stop cross-border e-commerce ERP system, supporting Mercado Libre and multi-platform order processing, inventory management, and financial analysis.',
      },
      card3: {
        title: 'Advertising Tools',
        description: 'Precise Latin American market advertising solutions, supporting Facebook & Google ad management, helping cross-border sellers improve ROI.',
      },
    },
    consulting: {
      title: 'Cross-border Consulting',
      subtitle: 'Latest cross-border e-commerce news and policy analysis',
      news: [
        {
          title: '2024 China-LATAM Cross-border E-commerce Policy Update',
          summary: 'Analysis of the latest cross-border e-commerce preferential policies between China and Latin American countries, including tariff reductions and logistics facilitation measures.',
          date: '2024-01-15',
        },
        {
          title: 'Brazil E-commerce Market Trend Analysis',
          summary: 'In-depth analysis of Brazil\'s e-commerce market status and future development trends, providing market entry strategy suggestions for sellers.',
          date: '2024-01-12',
        },
        {
          title: 'Mexico Cross-border Logistics Solution Guide',
          summary: 'Detailed introduction to mainstream cross-border logistics service providers in the Mexican market and their pros and cons.',
          date: '2024-01-10',
        },
      ],
    },
    footer: {
      description: 'Focused on Latin American cross-border e-commerce tool reviews and consulting services',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      address: 'Address: Shaanxi, China',
      email: 'Email',
      copyright: '© 2026 MeliToolHub | LATAM Cross-border E-commerce Tool Reviews & Consulting | Mercado Libre, ERP & Ad Tools Expert',
    },
  },
  es: {
    nav: {
      home: 'Inicio - Herramientas LATAM',
      tools: 'Herramientas',
      consulting: 'Consultoría',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      title: 'Expertos en Herramientas de E-commerce para Latinoamérica',
      subtitle: 'Enfocados en el mercado latinoamericano, proporcionando evaluaciones profesionales de herramientas Mercado Libre, ERP y publicidad',
      cta: 'Ver Evaluaciones',
      secondary: 'Más Información',
    },
    about: {
      title: 'Sobre Nosotros',
      description: 'Con 8 años de experiencia en comercio electrónico transfronterizo, tenemos un profundo conocimiento de las políticas nacionales y una rica experiencia práctica en operaciones de comercio electrónico y publicidad. Estamos comprometidos a proporcionarle las evaluaciones de herramientas y servicios de consultoría más profesionales y prácticos.',
      experience: '8 Años de Experiencia',
      expertise: 'Equipo Experto',
      global: 'Expertos en LATAM',
    },
    stats: {
      years: 'Años de Experiencia E-Commerce',
      tools: 'Herramientas Evaluadas',
      clients: 'Vendedores Ayudados',
      countries: 'Países LATAM Cubiertos',
    },
    tools: {
      title: 'Evaluaciones Populares',
      subtitle: 'Herramientas esenciales para el comercio electrónico transfronterizo en Latinoamérica',
      viewMore: 'Ver Detalles',
      card1: {
        title: 'Herramientas de Vendedor de Mercado Libre',
        description: 'Herramientas de operación construidas para vendedores de Mercado Libre, ayudando a gestionar tiendas eficientemente y optimizar operaciones.',
      },
      card2: {
        title: 'Sistema de Gestión ERP',
        description: 'Sistema ERP integral para e-commerce transfronterizo, soportando Mercado Libre y procesamiento multi-plataforma.',
      },
      card3: {
        title: 'Herramientas de Publicidad',
        description: 'Soluciones precisas de publicidad para el mercado latinoamericano, soportando gestión de anuncios Facebook y Google.',
      },
    },
    consulting: {
      title: 'Consultoría Transfronteriza',
      subtitle: 'Últimas noticias y análisis de políticas de comercio electrónico transfronterizo',
      news: [
        {
          title: 'Actualización de Políticas de E-commerce China-LATAM 2024',
          summary: 'Análisis de las últimas políticas preferenciales de comercio electrónico transfronterizo entre China y países latinoamericanos.',
          date: '2024-01-15',
        },
        {
          title: 'Análisis de Tendencias del Mercado de E-commerce en Brasil',
          summary: 'Análisis profundo del estado actual y tendencias futuras del mercado de comercio electrónico en Brasil.',
          date: '2024-01-12',
        },
        {
          title: 'Guía de Soluciones Logísticas Transfronterizas en México',
          summary: 'Introducción detallada a los principales proveedores de servicios logísticos transfronterizos en el mercado mexicano.',
          date: '2024-01-10',
        },
      ],
    },
    footer: {
      description: 'Enfocados en evaluaciones de herramientas y servicios de consultoría de comercio electrónico transfronterizo para Latinoamérica',
      quickLinks: 'Enlaces Rápidos',
      contactUs: 'Contáctenos',
      address: 'Dirección: Shaanxi, China',
      email: 'Correo',
      copyright: '© 2026 MeliToolHub | Evaluaciones y Consultoría de Herramientas de E-commerce Transfronterizo LATAM | Expertos en Mercado Libre, ERP y Publicidad',
    },
  },
  ru: {
    nav: {
      home: 'Главная - LATAM Инструменты',
      tools: 'Обзоры',
      consulting: 'Консалтинг',
      about: 'О нас',
      contact: 'Контакты',
    },
    hero: {
      title: 'Эксперты по инструментам электронной коммерции в Латинской Америке',
      subtitle: 'Сосредоточены на латиноамериканских рынках, предоставляя профессиональные обзоры инструментов Mercado Libre, ERP и рекламы',
      cta: 'Смотреть обзоры',
      secondary: 'Узнать больше',
    },
    about: {
      title: 'О нас',
      description: 'Имея 8-летний опыт в трансграничной электронной коммерции, мы глубоко понимаем государственную политику и обладаем богатым практическим опытом в операциях электронной коммерции и рекламе. Мы стремимся предоставить вам самые профессиональные и практичные обзоры инструментов и консалтинговые услуги.',
      experience: '8 лет опыта',
      expertise: 'Команда экспертов',
      global: 'Эксперты LATAM',
    },
    stats: {
      years: 'Лет Опыта E-Commerce',
      tools: 'Инструментов Проверено',
      clients: 'Продавцам Помогли',
      countries: 'Стран LATAM Охвачено',
    },
    tools: {
      title: 'Популярные обзоры',
      subtitle: 'Необходимые инструменты для трансграничной электронной коммерции в Латинской Америке',
      viewMore: 'Подробнее',
      card1: {
        title: 'Инструменты продавца Mercado Libre',
        description: 'Операционные инструменты для продавцов Mercado Libre, помогающие эффективно управлять магазинами и оптимизировать операции.',
      },
      card2: {
        title: 'ERP система управления',
        description: 'Комплексная ERP система для трансграничной электронной коммерции, поддерживающая Mercado Libre и мульти-платформенную обработку.',
      },
      card3: {
        title: 'Рекламные инструменты',
        description: 'Точные рекламные решения для латиноамериканского рынка, поддерживающие управление рекламой Facebook и Google.',
      },
    },
    consulting: {
      title: 'Трансграничный консалтинг',
      subtitle: 'Последние новости и анализ политики трансграничной электронной коммерции',
      news: [
        {
          title: 'Обновление политики электронной коммерции Китай-LATAM 2024',
          summary: 'Анализ последних преференциальных политик трансграничной электронной коммерции между Китаем и странами Латинской Америки.',
          date: '2024-01-15',
        },
        {
          title: 'Анализ тенденций рынка электронной коммерции Бразилии',
          summary: 'Глубокий анализ текущего состояния и будущих тенденций развития рынка электронной коммерции Бразилии.',
          date: '2024-01-12',
        },
        {
          title: 'Руководство по трансграничным логистическим решениям в Мексике',
          summary: 'Подробное описание основных поставщиков трансграничных логистических услуг на мексиканском рынке.',
          date: '2024-01-10',
        },
      ],
    },
    footer: {
      description: 'Сосредоточены на обзорах инструментов и консалтинговых услугах для трансграничной электронной коммерции в Латинской Америке',
      quickLinks: 'Быстрые ссылки',
      contactUs: 'Связаться с нами',
      address: 'Адрес: Шэньси, Китай',
      email: 'Эл. почта',
      copyright: '© 2026 MeliToolHub | Обзоры и консалтинг инструментов трансграничной электронной коммерции LATAM | Эксперты Mercado Libre, ERP и рекламы',
    },
  },
}
