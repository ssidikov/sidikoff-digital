import { Dictionary } from './dictionaries'

export const fallbackDictionary: Dictionary = {
  common: {
    loading: 'Loading...',
    error: 'An error occurred.',
    try_again: 'Try Again',
    learn_more: 'Learn More',
    view_all: 'View All',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    open: 'Open',
    badge_quality: 'Quality',
    badge_response: 'Fast Response',
    badge_support: 'Support',
    footer_copyright: '© 2024 Web Agency. All rights reserved.',
    legal_link: 'Legal Notice',
  },
  blog: {
    title: 'Our Blog',
    subtitle: 'Insights, tips, and trends in web development',
    all_posts: 'All Posts',
    featured_posts: 'Featured Posts',
    latest_posts: 'Latest Posts',
    read_more: 'Read more',
    author: 'Author',
    min_read: 'min read',
    published_on: 'Published on',
    related_posts: 'Related Posts',
    share_article: 'Share this article',
    back_to_blog: 'Back to Blog',
    no_posts: 'No blog posts found',
    loading: 'Loading posts...',
    categories: 'Categories',
    search_placeholder: 'Search articles...',
    cta: {
      title: 'Ready to start your digital project?',
      description: "Let's create something amazing together.",
      button: 'Get a free quote',
      secondary_button: 'View our services',
    },
  },
  navigation: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    blog: 'Blog',
    faq: 'FAQ',
    contact: 'Contact',
    pricing: 'Pricing',
    language: 'Language',
  },
  footer: {
    description: 'Professional digital solutions',
    quick_links: 'Quick Links',
    services_links: 'Services',
    contact_info: 'Contact Info',
    social_media: 'Follow Us',
    services: {
      web_creation: 'Website Creation',
      web_redesign: 'Website Redesign',
      seo_optimization: 'SEO Optimization',
      maintenance: 'Maintenance',
      web_applications: 'Web Applications',
      ecommerce: 'E-commerce',
    },
  },
  '404': {
    title: 'Page Not Found',
    description: 'Sorry, the page you are looking for does not exist.',
    search_placeholder: 'Search...',
    search_button: 'Search',
    go_home: 'Go Home',
    popular_pages: 'Popular Pages',
  },
  hero: {
    badge: 'Badge',
    title: 'Welcome',
    subtitle: 'Your digital partner',
    cta_primary: 'Get Started',
    cta_secondary: 'Learn More',
    features: [],
  },
  services: {
    title: 'Our Services',
    subtitle: 'What we offer',
    web_creation: {
      title: 'Website Creation',
      subtitle: 'Modern websites',
      features: [],
      description: 'We create modern websites.',
    },
    web_redesign: {
      title: 'Website Redesign',
      features: [],
      description: 'We redesign your website.',
    },
    seo_optimization: {
      title: 'SEO Optimization',
      features: [],
      description: 'We optimize your SEO.',
    },
    maintenance: {
      title: 'Maintenance',
      features: [],
      description: 'We maintain your website.',
    },
    restaurant: {
      title: 'Restaurant Websites',
      features: [],
      description: 'We create restaurant websites.',
    },
    cta_banner: {
      background: 'default-bg.jpg',
      description: 'Get started today',
      cta: 'Contact Us',
    },
    buttons: {
      request_quote: 'Request a quote',
      view_pricing: 'View pricing',
      learn_more: 'Learn more',
    },
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Frequently Asked Questions',
    categories: {
      general: 'General',
      pricing: 'Pricing',
      support: 'Support',
    },
    questions: {},
    cta: {
      title: 'Still have questions?',
      description: 'Contact our team for personalized consultation about your project.',
      button: 'Contact Us',
    },
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Our work',
    filter: {
      all: 'All',
      web: 'Web',
      mobile: 'Mobile',
      design: 'Design',
    },
    projects: {},
    view_project: 'View Project',
    live_demo: 'Live Demo',
    github: 'GitHub',
  },
  testimonials: {
    title: 'Client Testimonials',
    subtitle: 'What our clients say about us',
    cta: {
      title: 'Ready to join our satisfied clients?',
      description: 'Contact us today and see how we can help your business grow.',
      button: 'Start project',
    },
  },
  contact: {
    title: 'Contact',
    subtitle: 'Get in touch',
    description: 'Contact us for more information.',
    quickContact: 'Quick Contact',
    social: 'Social Media',
    socialDesc: 'Follow us on social media.',
    form: {
      title: 'Contact Form',
      name: {
        label: 'Name',
        placeholder: 'Enter your name',
      },
      email: {
        label: 'Email',
        placeholder: 'Enter your email',
      },
      phone: {
        label: 'Phone',
        placeholder: 'Enter your phone number',
      },
      subject: {
        label: 'Subject',
        placeholder: 'Enter subject',
      },
      message: {
        label: 'Message',
        placeholder: 'Enter your message',
      },
      submit: 'Submit',
      sending: 'Sending...',
      success: 'Message sent!',
      success_description: 'Your message has been sent successfully.',
      error: 'Error sending message.',
      error_description: 'An error occurred while sending your message.',
    },
    channels: {
      title: 'Contact Channels',
      email: 'Email',
      emailDesc: 'Contact us by email.',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Chat with us on WhatsApp.',
      telegram: 'Telegram',
      telegramDesc: 'Message us on Telegram.',
      phone: 'Phone',
      phoneDesc: 'Call us by phone.',
    },
  },
  pricing: {
    title: 'Our Pricing',
    subtitle: 'Transparent & Tailored',
    description:
      'Choose the solution that perfectly fits your needs and budget. All our projects include modern design, professional development, and complete support.',
    guarantee_badge: 'Guaranteed Results • Guaranteed Delivery',
    maintenance: {
      title: '🔧 Monthly Maintenance – Ongoing Support',
      billing: 'Rate: from €59/month',

      features: [
        'Regular technical updates',
        'Changes or additions to sections/pages',
        'Content additions or modifications (texts, images, etc.)',
        'Support via WhatsApp, Telegram or email',
        'Regular backups',
      ],
      cta: 'Request Quote',
    },
    plans: {
      essentiel: {
        name: 'Essential',
        price: 'from €590',
        description: 'Perfect for launching your business or modernizing your online image',
        features: [
          'Clear and professional single page',
          'Modern design that inspires trust',
          'Structured and impactful text (we help you write it)',
          'Basic SEO optimization (Google & mobile)',
          'Integrated contact form',
          'Mobile/tablet/computer compatible',
          'Delivery in 7 business days',
          '🧩 Goal: get professional presence quickly without complexity',
        ],
        cta: 'Get Started',
      },
      pro: {
        name: 'Pro',
        price: 'from €900',
        description: 'Complete solution for growing businesses with advanced needs',
        features: [
          'Complete 4-6 page site (Home, Services, About, Contact, etc.)',
          'Custom content writing',
          'Advanced SEO optimization (Google Business, tags, structure)',
          'Simple statistics (Google Analytics)',
          'Premium design with modern animations',
          'Short training to manage your site',
          'Delivery in 14 business days',
          '🔥 Recommended to create real online authority and generate leads',
        ],
        cta: 'Choose Pro',
      },
      entreprise: {
        name: 'Enterprise',
        price: 'Custom Quote',
        description: 'High-end solution adapted to your business strategy',
        features: [
          'Personalized analysis of your goals and market',
          'Specific development (e.g.: booking, client space, online store)',
          'Unique and completely custom design',
          'Complete SEO strategy (content, technical, semantic)',
          'Digital support for 1-3 months',
          'Advanced features (automation, blog, podcast, etc.)',
          'Ongoing support and personalized advice',
          '🎯 Goal: transform your site into a growth and conversion tool',
        ],
        cta: 'Contact Us',
      },
    },
  },
  legal: {
    title: 'Legal Notice',
    company_info_title: 'Company Information',
    company_name_label: 'Company Name',
    company_name: 'Web Agency',
    company_type_label: 'Company Type',
    company_type: 'SAS',
    siren_label: 'SIREN',
    siren: '000 000 000',
    address_label: 'Address',
    address: '123 Main St, Paris',
    phone_label: 'Phone',
    phone: '+33 1 23 45 67 89',
    email_label: 'Email',
    email: 'info@webagency.com',
    director_title: 'Director',
    director_name: 'John Doe',
    hosting_title: 'Hosting',
    host_label: 'Host',
    host: 'Vercel Inc.',
    host_address_label: 'Host Address',
    host_address: '340 S Lemon Ave #4133, Walnut, CA 91789, USA',
    host_website_label: 'Host Website',
    host_website: 'vercel.com',
    ip_title: 'Intellectual Property',
    ip_text: 'All content is protected.',
    data_title: 'Data Protection',
    data_text: 'Your data is safe.',
    cookies_title: 'Cookies',
    cookies_text: 'This site uses cookies.',
  },
  web_creation_landing: {
    meta_title: 'Custom Website Creation - Professional Web Development',
    meta_description:
      'Create your professional website with our custom development service. Responsive design, SEO optimization, and modern technologies.',
    keywords: ['website creation', 'web development', 'responsive design', 'SEO', 'custom website'],
    hero: {
      badge: 'Custom Development',
      title: 'Create Your Professional Website',
      description:
        'Stand out from the competition with a unique and optimized website. Our team creates custom sites that convert visitors into customers.',
      benefits: [
        'Complete custom design and development',
        'Full SEO optimization from launch',
        'Responsive on all devices',
        'Modern and fast technologies',
        'Technical support and training',
        'Performance and security guarantees',
      ],
      cta_primary: 'Get a Free Quote',
      cta_secondary: 'View Our Portfolio',
      image_alt: 'Professional website creation',
    },
    stats: [
      {
        number: '100+',
        title: 'Websites Created',
        description: 'for satisfied clients',
      },
      {
        number: '98%',
        title: 'Client Satisfaction',
        description: 'rating across all projects',
      },
      {
        number: '15 days',
        title: 'Average Delivery',
        description: 'from design to launch',
      },
    ],
    process: {
      title: 'Our Development Process',
      description:
        'A proven method to create a website that meets your goals and exceeds your expectations.',
      steps: [
        {
          title: 'Analysis & Strategy',
          description:
            'We study your business, target audience, and competition to define the optimal strategy.',
        },
        {
          title: 'Design & UX/UI',
          description:
            'Creation of wireframes and custom design focused on user experience and conversion.',
        },
        {
          title: 'Development',
          description: 'Custom coding with modern technologies, ensuring performance and security.',
        },
        {
          title: 'Launch & Support',
          description: 'Site deployment, training, and ongoing support to ensure your success.',
        },
      ],
    },
    features: {
      title: 'Why Choose Our Service?',
      description:
        'We create websites that not only look great but also perform exceptionally well.',
      items: [
        {
          icon: 'design',
          title: 'Custom Design',
          description:
            'Unique design that reflects your brand identity and stands out from the competition.',
        },
        {
          icon: 'performance',
          title: 'Optimized Performance',
          description: 'Fast loading times and superior performance on all devices.',
        },
        {
          icon: 'seo',
          title: 'SEO Ready',
          description: 'Technical and content optimization for better search engine visibility.',
        },
        {
          icon: 'responsive',
          title: 'Mobile-First',
          description: 'Perfect experience on smartphones, tablets, and desktops.',
        },
        {
          icon: 'security',
          title: 'Security',
          description: 'Advanced security measures to protect your site and user data.',
        },
        {
          icon: 'support',
          title: 'Ongoing Support',
          description: 'Technical assistance and updates to keep your site running smoothly.',
        },
      ],
    },
    cta: {
      title: 'Ready to Launch Your Web Project?',
      description:
        'Get a free and personalized quote for your professional website. Free consultation included.',
      primary_button: 'Get a Free Quote',
    },
  },
  web_redesign_landing: {
    meta_title: 'Website Redesign - Professional Modernization and Makeover',
    meta_description:
      'Modernize your existing website with our redesign service. Optimized UX/UI, improved performance, doubled conversion. Transform your online presence.',
    keywords: [
      'website redesign',
      'website makeover',
      'site modernization',
      'UX/UI',
      'conversion',
      'performance',
    ],
    hero: {
      badge: 'Digital Transformation',
      title: 'Modernize Your Existing Website',
      description:
        "Your site doesn't convert enough? Our redesign service transforms your online presence into a selling machine. Double your conversions with modern design and optimized UX.",
      benefits: [
        'Complete analysis of your current site',
        'Modern and responsive design',
        'User experience optimization (UX/UI)',
        'Performance and speed improvements',
        'Secure content migration',
        'Training on the new interface',
      ],
      cta_primary: 'Analyze My Site for Free',
      cta_secondary: 'See Our Transformations',
      image_alt: 'Professional website redesign',
    },
    stats: [
      {
        number: '150%',
        title: 'Average Improvement',
        description: 'in conversions after redesign',
      },
      {
        number: '40%',
        title: 'Bounce Rate',
        description: 'reduction on average',
      },
      {
        number: '2-3 wks',
        title: 'Redesign Timeline',
        description: 'for a transformed site',
      },
    ],
    process: {
      title: 'Our Redesign Process',
      description:
        'A structured method to transform your existing site into a high-performing conversion tool.',
      steps: [
        {
          title: 'Complete Audit',
          description:
            'Technical, UX and performance analysis of your current site to identify improvement opportunities.',
        },
        {
          title: 'UX Strategy',
          description:
            'Design of the new user experience based on your goals and visitor expectations.',
        },
        {
          title: 'Redesign',
          description: 'Creation of new modern, responsive design optimized for conversion.',
        },
        {
          title: 'Migration',
          description: 'Secure content migration and launch of your transformed website.',
        },
      ],
    },
    features: {
      title: 'Why Choose Our Redesign Service?',
      description:
        'We transform your existing site into a powerful conversion tool with a data-driven approach.',
      items: [
        {
          icon: 'design',
          title: 'Modern Design',
          description: 'Contemporary interface that inspires trust and engages your visitors.',
        },
        {
          icon: 'performance',
          title: 'Boosted Performance',
          description: 'Site 3x faster with optimized loading times.',
        },
        {
          icon: 'responsive',
          title: 'Mobile-First',
          description: 'Perfect experience on all devices, mobile priority.',
        },
        {
          icon: 'seo',
          title: 'SEO Preserved',
          description: 'Migration without SEO loss, even improvement.',
        },
        {
          icon: 'support',
          title: 'Training Included',
          description: 'Support to master your new website.',
        },
        {
          icon: 'security',
          title: 'Secure Migration',
          description: 'Complete backup and risk-free migration.',
        },
      ],
    },
    cta: {
      title: 'Ready to Transform Your Website?',
      description:
        'Get a free analysis of your current site and discover its improvement potential.',
      primary_button: 'Analyze My Site for Free',
    },
  },
  seo_optimization_landing: {
    meta_title: 'SEO Optimization & Search Rankings - Guaranteed Results',
    meta_description:
      'Professional SEO optimization service. Dominate search rankings and multiply organic traffic. Free audit and personalized strategy.',
    keywords: ['SEO optimization', 'search rankings', 'organic traffic', 'SEO audit'],
    hero: {
      badge: 'SEO Expert',
      title: 'Dominate Search Rankings and Multiply Your Traffic',
      description:
        'Transform your website into a traffic generation machine with our proven SEO expertise.',
      benefits: [
        'Complete free SEO audit',
        'Personalized strategy',
        'Real-time tracking',
        'Visible results in 3 months',
        'Expert support',
      ],
      cta_primary: 'Free SEO Audit',
      cta_secondary: 'See Results',
      image_alt: 'Professional SEO optimization',
    },
    stats: [
      {
        number: '300%',
        title: 'Traffic Increase',
        description: 'Average organic traffic growth',
      },
      {
        number: '85%',
        title: 'First Page',
        description: 'Keywords ranked on first page',
      },
      {
        number: '24h',
        title: 'Response Time',
        description: 'Expert support response',
      },
    ],
    process: {
      title: 'Our Proven SEO Method',
      description: 'Data-driven approach for maximum search visibility',
      steps: [
        {
          title: 'Complete SEO Audit',
          description: 'Technical analysis and keyword opportunities',
        },
        {
          title: 'Custom Strategy',
          description: 'Tailored action plan for your industry',
        },
        {
          title: 'On-Page Optimization',
          description: 'Technical improvements and content optimization',
        },
        {
          title: 'Tracking & Reporting',
          description: 'Performance monitoring with detailed reports',
        },
      ],
    },
    features: {
      title: 'Why Choose Our SEO Expertise',
      description: 'Measurable results for your online business growth',
      items: [
        {
          title: 'Technical Audit',
          description: 'Complete site analysis and optimization',
        },
        {
          title: 'Keyword Research',
          description: 'Profitable terms identification',
        },
        {
          title: 'Content Optimization',
          description: 'Converting content creation',
        },
        {
          title: 'Link Building',
          description: 'Authority boosting strategy',
        },
        {
          title: 'Performance Tracking',
          description: 'Real-time monitoring dashboards',
        },
        {
          title: 'Expert Support',
          description: 'Dedicated SEO specialists',
        },
      ],
    },
    cta: {
      title: 'Propel Your Site to First Page',
      description: 'Join clients who multiplied their revenue with our SEO expertise.',
      primary_button: 'Get Free SEO Audit',
    },
  },
  maintenance_landing: {
    meta_title: 'Website Maintenance & Support - 24/7 Premium Service',
    meta_description:
      'Professional website maintenance with enhanced security, automatic backups, and 24/7 support. Protect your digital investment.',
    keywords: ['website maintenance', 'technical support', 'security', 'backups'],
    hero: {
      badge: 'Premium Support',
      title: 'Premium Maintenance for Your Digital Investment',
      description: 'Complete maintenance service for security, performance and peace of mind.',
      benefits: [
        'Automatic 24/7 monitoring',
        'Secure daily backups',
        'Security updates',
        'Priority support within 2h',
        '99.9% uptime guarantee',
      ],
      cta_primary: 'Protect My Site',
      cta_secondary: 'View Plans',
      image_alt: 'Professional website maintenance',
    },
    stats: [
      {
        number: '99.9%',
        title: 'Uptime',
        description: 'Guaranteed site availability',
      },
      {
        number: '2h',
        title: 'Response Time',
        description: 'Priority support resolution',
      },
      {
        number: '50+',
        title: 'Sites Maintained',
        description: 'Trusted by clients daily',
      },
    ],
    process: {
      title: 'Our Complete Maintenance Service',
      description: 'Proactive protection for optimal site performance',
      steps: [
        {
          title: 'Continuous Monitoring',
          description: '24/7 availability and security monitoring',
        },
        {
          title: 'Preventive Maintenance',
          description: 'Regular updates and proactive fixes',
        },
        {
          title: 'Priority Support',
          description: 'Immediate assistance when needed',
        },
        {
          title: 'Monthly Reports',
          description: 'Detailed performance reports',
        },
      ],
    },
    features: {
      title: 'Your Website in Total Security',
      description: 'Complete service for peace of mind and performance',
      items: [
        {
          title: 'Automatic Backups',
          description: 'Secure daily backups with one-click restore',
        },
        {
          title: 'Enhanced Security',
          description: 'Anti-malware protection and firewall',
        },
        {
          title: 'Performance Optimization',
          description: 'Speed monitoring and improvements',
        },
        {
          title: 'Regular Updates',
          description: 'CMS and plugins always up to date',
        },
        {
          title: 'Expert Support',
          description: 'Dedicated team available 7/7',
        },
        {
          title: 'Proactive Monitoring',
          description: 'Problem detection before impact',
        },
      ],
    },
    cta: {
      title: 'Protect Your Website Today',
      description: 'Avoid costly outages and focus on your business.',
      primary_button: 'Choose Maintenance Plan',
    },
  },
  restaurant_landing: {
    meta_title: 'Restaurant Website Creation',
    meta_description: 'Professional restaurant websites with online reservations.',
    keywords: ['restaurant', 'website', 'online'],
    hero: {
      badge: 'Professional Service',
      title: 'Restaurant Website Creation',
      description: 'Get your restaurant online with professional website',
      benefits: ['Online reservations', 'Digital menu', 'Professional design'],
      cta_primary: 'Get Started',
      cta_secondary: 'View Portfolio',
      image_alt: 'Restaurant website example',
    },
    problems: {
      title: 'Restaurant Challenges',
      subtitle: 'Common problems we solve',
      pain_points: [],
    },
    solution: {
      title: 'Our Solution',
      description: 'Professional restaurant websites',
      features: [],
    },
    process: {
      title: 'Our Process',
      description: 'How we work',
      steps: [],
    },
    portfolio: {
      title: 'Our Work',
      subtitle: 'Recent projects',
      projects: [],
    },
    testimonials: {
      title: 'Client Reviews',
      subtitle: 'What our clients say',
      reviews: [],
    },
    pricing: {
      title: 'Pricing',
      description: 'Transparent pricing for restaurant websites',
      packages: [],
      support_plans: {
        title: 'Support Plans',
        subtitle: 'Ongoing support',
        plans: [],
      },
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Frequently asked questions',
      questions: [],
    },
    cta: {
      title: 'Ready to Start?',
      description: 'Contact us today',
      primary_button: 'Get Started',
      secondary_button: 'Learn More',
      guarantee: '30-day money back guarantee',
    },
  },
  seo_local: {
    hero: {
      title: 'Website Creation in {city}',
      description:
        'Expert web developer in {city}. I create professional, modern and high-performance websites to grow your business.',
      cta_primary: 'Get a free quote',
      cta_secondary: 'Call now',
    },
    statistics: {
      websites_created: 'Websites created',
      satisfied_clients: 'Satisfied clients',
      average_delivery: 'Average delivery',
      support_included: 'Support included',
    },
    services: {
      title: 'My web development services',
      description:
        'Professional web developer in {city}, I support you in creating your website. From showcase sites to e-commerce stores, each project is unique and adapted to your needs.',
      showcase: {
        title: 'Showcase website',
        description:
          'Professional website to present your company, services and values. Modern and responsive design.',
        price: 'From €590',
      },
      ecommerce: {
        title: 'E-commerce store',
        description:
          'Sell your products online with a secure store, online payment and order management.',
        price: 'From €1490',
      },
      webapp: {
        title: 'Web application',
        description:
          'Custom web application to automate your business processes and optimize your productivity.',
        price: 'On quote',
      },
      seo: {
        title: 'SEO optimization',
        description: 'Optimization to appear first on Google. Local SEO {city} included.',
        price: 'From €290/month',
      },
      redesign: {
        title: 'Website redesign',
        description:
          'Modernization of your existing site: new design, performance improvement and SEO.',
        price: 'From €590',
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Updates, automatic backups, security and technical support for your website.',
        price: '€49/month',
      },
    },
    advantages: {
      title: 'Why choose me for your website?',
      description:
        'Experienced freelance web developer, I guarantee you personalized service and concrete results.',
      fast_delivery: {
        title: 'Fast delivery',
        description:
          'Your website delivered in 2-3 weeks maximum. Personalized follow-up and transparent communication throughout the project.',
      },
      guaranteed_quality: {
        title: 'Guaranteed quality',
        description:
          'Modern, high-performance and SEO-optimized websites. Satisfaction guarantee and revisions included.',
      },
      complete_support: {
        title: 'Complete support',
        description:
          'Training on using your site, marketing advice and technical support after delivery.',
      },
    },
    portfolio: {
      title: 'My latest website creations',
      description:
        'Discover a selection of websites I have created. Each project is unique and adapted to the specific needs of my clients.',
    },
    cta: {
      title: 'Transform your idea into digital success',
      description:
        'Ready to create the website that will grow your business? Contact me for a personalized and free quote.',
      primary_button: 'Get a free quote',
      secondary_button: 'See my work',
      consultation_free: 'Free 30min consultation',
      quote_24h: 'Detailed quote within 24h',
      no_commitment: 'No commitment',
    },
  },
  boulangerie_landing: {
    meta_title: 'Professional Website Creation for Bakeries & Pastry Shops | Local SEO',
    meta_description:
      'Specialized in creating websites for bakeries and pastry shops. Attract more customers with a professional online presence and local SEO.',
    keywords: [
      'bakery website creation',
      'pastry shop website',
      'local bakery SEO',
      'bakery online presence',
    ],
    hero: {
      badge: 'Bakery Specialists',
      title: 'Professional Websites for Bakeries & Pastry Shops',
      description:
        'Attract more customers and increase your sales with a website designed specifically for artisan bakers.',
      benefits: [
        'Showcase your delicious products',
        'Attract new local customers',
        'Online ordering system',
        'Google Maps optimization',
      ],
      cta_primary: 'Get my website',
      cta_secondary: 'View examples',
      image_alt: 'Beautiful bakery website example',
    },
    problems: {
      title: 'Common Challenges for Bakeries',
      subtitle: 'Are you facing these problems?',
      pain_points: [
        {
          icon: 'eye-off',
          title: 'Lack of online visibility',
          description:
            "Your bakery doesn't appear in Google searches when customers look for fresh bread nearby.",
        },
        {
          icon: 'users',
          title: 'Difficulty attracting new customers',
          description: 'You rely only on foot traffic and word of mouth to get customers.',
        },
        {
          icon: 'clock',
          title: 'Time lost answering calls',
          description:
            'You spend hours on the phone answering questions about prices, hours, and availability.',
        },
      ],
    },
    solution: {
      title: 'Our Specialized Solutions',
      description: 'We create websites specifically designed for bakeries and pastry shops.',
      features: [
        {
          icon: 'search',
          title: 'Local SEO optimization',
          description: 'Appear first when customers search for bakeries in your area.',
        },
        {
          icon: 'shopping-cart',
          title: 'Online ordering system',
          description: 'Let customers order their favorite pastries online for pickup.',
        },
        {
          icon: 'image',
          title: 'Product showcase',
          description: "Beautiful photo galleries to make your customers' mouths water.",
        },
        {
          icon: 'map-pin',
          title: 'Store locator',
          description: 'Help customers easily find your bakery with integrated maps.',
        },
        {
          icon: 'calendar',
          title: 'Hours and availability',
          description: 'Display your hours, special schedules, and product availability.',
        },
        {
          icon: 'star',
          title: 'Customer reviews',
          description: 'Show testimonials and reviews to build trust with new customers.',
        },
      ],
    },
    process: {
      title: 'Our Creation Process',
      description: 'A proven method specifically for bakeries',
      steps: [
        {
          title: 'Analysis of your bakery',
          description: 'We study your products, target audience, and local competition.',
        },
        {
          title: 'Custom design',
          description:
            'We create a unique design that reflects your brand and appeals to your customers.',
        },
        {
          title: 'Technical development',
          description: 'We develop a fast, secure website optimized for search engines.',
        },
        {
          title: 'Launch and training',
          description: 'We put your site online and train you to manage it independently.',
        },
      ],
    },
    portfolio: {
      title: 'Our Bakery Projects',
      subtitle: 'Discover our work for local bakeries',
      projects: [
        {
          name: 'Artisan Bakery',
          type: 'Showcase Website',
          image: 'boulangerie-artisan.webp',
          results: ['+60% Google Maps visibility', '+40% new customers'],
        },
        {
          name: 'Gourmet Pastry',
          type: 'E-commerce Website',
          image: 'patisserie-gourmande.webp',
          results: ['+80% online orders', '+25% revenue'],
        },
        {
          name: 'Golden Bread',
          type: 'Multilingual Website',
          image: 'pain-dore.webp',
          results: ['International clientele', '+50% reservations'],
        },
      ],
    },
    testimonials: {
      title: 'What Our Bakery Clients Say',
      subtitle: 'Real testimonials from satisfied bakers',
      reviews: [
        {
          name: 'Marie Dubois',
          position: 'Owner',
          boulangerie: 'Boulangerie des Délices',
          location: 'Lyon',
          content:
            "Since launching our website, we've seen a 40% increase in our clientele. Online orders have revolutionized our business!",
          rating: 5,
          image: 'marie-dubois.webp',
        },
        {
          name: 'Pierre Martin',
          position: 'Master Baker',
          boulangerie: 'Au Pain Doré',
          location: 'Toulouse',
          content:
            'Professional, efficient, and understanding of our business. Our site perfectly showcases our artisanal products.',
          rating: 5,
          image: 'pierre-martin.webp',
        },
        {
          name: 'Sophie Laurent',
          position: 'Pastry Chef',
          boulangerie: 'Pâtisserie Gourmande',
          location: 'Nice',
          content:
            'The online ordering system has simplified our organization and increased our sales. I highly recommend it!',
          rating: 5,
          image: 'sophie-laurent.webp',
        },
      ],
    },
    pricing: {
      title: 'Packages Tailored for Bakeries',
      description: 'Transparent pricing adapted to your needs and budget',
      packages: [
        {
          name: 'Showcase',
          price: '€899',
          period: 'one-time',
          description: 'Perfect for presenting your bakery and attracting local customers',
          delivery_time: '2 weeks',
          features: [
            'Professional showcase website',
            'Photo gallery of your products',
            'Contact information and hours',
            'Google Maps integration',
            'Mobile optimization',
            '1 year of maintenance included',
          ],
        },
        {
          name: 'Professional',
          price: '€1,499',
          period: 'one-time',
          description: 'Complete solution with online ordering',
          delivery_time: '3 weeks',
          is_popular: true,
          features: [
            'Everything in Showcase',
            'Online ordering system',
            'Inventory management',
            'Customer account area',
            'Local SEO optimization',
            'Integration with social media',
            '1 year of maintenance and support',
          ],
        },
        {
          name: 'Premium',
          price: '€2,299',
          period: 'one-time',
          description: 'Complete solution for multiple locations',
          delivery_time: '4 weeks',
          features: [
            'Everything in Professional',
            'Multi-location management',
            'Advanced analytics',
            'Marketing automation',
            'Custom mobile application',
            'Priority support',
            '2 years of maintenance included',
          ],
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about creating a bakery website',
      questions: [
        {
          question: 'How long does it take to create a bakery website?',
          answer:
            'Depending on the chosen package, it takes between 2 to 4 weeks to create and launch your website. We work with you to define a delivery schedule that suits you.',
        },
        {
          question: 'Can I manage my website content myself?',
          answer:
            'Absolutely! We create user-friendly websites with an intuitive administration interface. We also provide training so you can update your products, prices, and content independently.',
        },
        {
          question: 'Is the online ordering system secure?',
          answer:
            "Yes, we use the latest security technologies to protect your customers' data and transactions. All payments are processed securely through certified platforms.",
        },
        {
          question: 'What happens if I have technical problems?',
          answer:
            'We provide technical support included in all our packages. You can contact us by email or phone, and we respond within 24 hours maximum.',
        },
        {
          question: 'Can you help with product photography?',
          answer:
            'Yes, we can recommend professional photographers specialized in food photography, or guide you to take quality photos of your products yourself.',
        },
        {
          question: 'Is the website optimized for mobile phones?',
          answer:
            'All our websites are 100% responsive and optimized for mobile phones and tablets. More than 60% of your customers will visit your site from their phone.',
        },
        {
          question: 'Do you handle local SEO?',
          answer:
            'Yes, local SEO is included in our Professional and Premium packages. We optimize your site to appear in local searches and on Google Maps.',
        },
        {
          question: 'Can I integrate my social media accounts?',
          answer:
            'Absolutely! We can integrate your Facebook, Instagram accounts and other social media to increase your online visibility.',
        },
      ],
    },
    cta: {
      title: "Ready to boost your bakery's sales?",
      description:
        'Join the hundreds of bakers who have transformed their business with a professional website.',
      primary_button: 'Get my free quote',
      secondary_button: 'Call us now',
      features: ['Free consultation', 'Custom quote within 24h', 'No commitment'],
    },
  },
  barbershop_landing: {
    meta_title: 'Professional Website Creation for Barbershops | Male Grooming Specialist',
    meta_description:
      'Custom websites for barbershops and male grooming salons. Modern design, online booking, local SEO. Attract more clients!',
    keywords: [
      'barbershop website creation',
      'barber website',
      'male grooming website',
      'barbershop web development',
    ],
    hero: {
      badge: 'Barbershop Specialists',
      title: 'Professional Websites for Barbershops',
      description:
        'Give your barbershop a unique and professional online presence that attracts more clients.',
      benefits: [
        '24/7 online booking',
        'Optimized local visibility',
        'Modern masculine design',
        'Simplified client management',
      ],
      cta_primary: 'Get my website',
      cta_secondary: 'View our work',
      image_alt: 'Modern barbershop website example',
    },
    problems: {
      title: 'Common Barbershop Challenges',
      subtitle: 'Are you facing these problems?',
      pain_points: [
        {
          icon: 'eye-off',
          title: 'Lack of online visibility',
          description:
            "Your barbershop doesn't appear when clients search for a male groomer near them.",
        },
        {
          icon: 'users',
          title: 'Difficulty attracting new clients',
          description: 'You rely only on word-of-mouth and walk-ins to get customers.',
        },
        {
          icon: 'clock',
          title: 'Time lost on phone calls',
          description: 'You spend hours answering calls for appointments and information.',
        },
      ],
    },
    solution: {
      title: 'Our Specialized Solutions',
      description:
        'We create websites specifically designed for barbershops and male grooming salons.',
      features: [
        {
          icon: 'search',
          title: 'Local SEO optimization',
          description: 'Appear first when clients search for a barber in your area.',
        },
        {
          icon: 'calendar',
          title: 'Online booking system',
          description: 'Let your clients book their slots online, even outside business hours.',
        },
        {
          icon: 'scissors',
          title: 'Service showcase',
          description: 'Present your cuts, beard care and services in a professional gallery.',
        },
        {
          icon: 'map-pin',
          title: 'Salon location',
          description: 'Help your clients find you easily with integrated maps.',
        },
        {
          icon: 'clock',
          title: 'Hours and availability',
          description: 'Display your hours, special schedules and real-time availability.',
        },
        {
          icon: 'star',
          title: 'Customer reviews',
          description: 'Show testimonials and reviews to reassure new clients.',
        },
      ],
    },
    process: {
      title: 'Our Creation Process',
      description: 'A proven method specifically for barbershops',
      steps: [
        {
          title: 'Salon analysis',
          description: 'We study your style, target clientele and local competition.',
        },
        {
          title: 'Custom design',
          description:
            'We create a unique design that reflects the masculine atmosphere of your barbershop.',
        },
        {
          title: 'Technical development',
          description: 'We develop a fast, secure website optimized for search engines.',
        },
        {
          title: 'Launch and training',
          description: 'We put your site online and train you to manage it independently.',
        },
      ],
    },
    portfolio: {
      title: 'Our Barbershop Projects',
      subtitle: 'Discover our work for barbers',
      projects: [
        {
          name: 'Vintage Barbershop',
          type: 'Showcase Website',
          image: 'barbershop-vintage.webp',
          results: ['+70% online bookings', '+45% new clients'],
        },
        {
          name: 'Urban Cuts',
          type: 'E-booking Website',
          image: 'urban-cuts.webp',
          results: ['+85% booking rate', '+30% revenue'],
        },
        {
          name: 'Classic Barber',
          type: 'Multilingual Website',
          image: 'classic-barber.webp',
          results: ['International clientele', '+60% Google visibility'],
        },
      ],
    },
    testimonials: {
      title: 'What Our Barber Clients Say',
      subtitle: 'Authentic testimonials from satisfied barbers',
      reviews: [
        {
          name: 'Antoine Moreau',
          position: 'Owner',
          barbershop: 'Vintage Barbershop Paris',
          location: 'Paris 11th',
          content:
            'Since launching our site, we have 70% online bookings. No more constant calls! The design perfectly reflects our vintage atmosphere.',
          rating: 5,
          image: 'antoine-moreau.webp',
        },
        {
          name: 'Karim Benali',
          position: 'Master Barber',
          barbershop: 'Urban Cuts',
          location: 'Lyon Part-Dieu',
          content:
            'Modern and efficient site. My clients love being able to book with just a few clicks. The team perfectly understood our urban universe.',
          rating: 5,
          image: 'karim-benali.webp',
        },
        {
          name: 'Marco Silva',
          position: 'Barber',
          barbershop: 'Classic Barber',
          location: 'Marseille Old Port',
          content:
            'The booking system has revolutionized our organization. No more misunderstandings, everything is clear and professional. Thank you!',
          rating: 5,
          image: 'marco-silva.webp',
        },
      ],
    },
    pricing: {
      title: 'Packages Tailored for Barbershops',
      description: 'Transparent pricing adapted to your needs and budget',
      packages: [
        {
          name: 'Showcase',
          price: '€590',
          period: 'one-time',
          description: 'Perfect for presenting your barbershop and attracting local clients',
          delivery_time: '2 weeks',
          features: [
            'Professional showcase website',
            'Photo gallery of your cuts',
            'Contact information and hours',
            'Google Maps integration',
            'Mobile optimization',
            '1 year of maintenance included',
          ],
        },
        {
          name: 'Professional',
          price: '€1,699',
          period: 'one-time',
          description: 'Complete solution with online booking',
          delivery_time: '3 weeks',
          is_popular: true,
          features: [
            'Everything in Showcase',
            'Online booking system',
            'Slot management',
            'Automatic notifications',
            'Local SEO optimization',
            'Social media integration',
            '1 year of maintenance and support',
          ],
        },
        {
          name: 'Premium',
          price: '€2,499',
          period: 'one-time',
          description: 'High-end solution for multi-barber salons',
          delivery_time: '4 weeks',
          features: [
            'Everything in Professional',
            'Multi-barber management',
            'Loyalty system',
            'Advanced analytics',
            'Custom mobile app',
            'Priority support',
            '2 years of maintenance included',
          ],
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about creating a barbershop website',
      questions: [
        {
          question: 'How long does it take to create a barbershop website?',
          answer:
            'Depending on the chosen package, it takes between 2 to 4 weeks to create and launch your website. We work with you to define a delivery schedule that suits you.',
        },
        {
          question: 'Can I manage my website content myself?',
          answer:
            'Absolutely! We create user-friendly websites with an intuitive administration interface. We also provide training so you can update your services, prices, and content independently.',
        },
        {
          question: 'Is the booking system secure?',
          answer:
            "Yes, we use the latest security technologies to protect your clients' data and their bookings. All information is processed securely.",
        },
        {
          question: 'What happens if I have technical problems?',
          answer:
            'We provide technical support included in all our packages. You can contact us by email or phone, and we respond within 24 hours maximum.',
        },
        {
          question: 'Can you help with photography?',
          answer:
            'Yes, we can recommend professional photographers specialized in the barbershop universe, or guide you to take quality photos of your salon.',
        },
        {
          question: 'Is the website optimized for mobile phones?',
          answer:
            'All our websites are 100% responsive and optimized for mobile phones and tablets. More than 70% of your clients will visit your site from their phone.',
        },
        {
          question: 'Do you handle local SEO?',
          answer:
            'Yes, local SEO is included in our Professional and Premium packages. We optimize your site to appear in local searches and on Google Maps.',
        },
        {
          question: 'Can I integrate my social media accounts?',
          answer:
            'Absolutely! We can integrate your Instagram, Facebook and other social media accounts to increase your online visibility.',
        },
      ],
    },
    cta: {
      title: 'Ready to boost your barbershop?',
      description:
        'Join the hundreds of barbers who have transformed their business with a professional website.',
      primary_button: 'Get my free quote',
      secondary_button: 'Call us now',
      features: ['Free consultation', 'Custom quote within 24h', 'No commitment'],
    },
  },
  freelance_landing: {
    meta_title: 'Freelance Website Creation | Professional Online Presence',
    meta_description:
      'Custom websites for freelancers and independent professionals. Portfolio, blog, SEO optimized. Attract more clients with a professional digital presence.',
    keywords: [
      'freelance website creation',
      'independent consultant website',
      'freelance portfolio',
      'freelance web development',
      'freelance showcase site',
    ],
    hero: {
      badge: 'Freelance Specialists',
      title: 'Professional Websites for Freelancers',
      description:
        'Give your freelance business a professional and visible showcase that attracts new clients.',
      benefits: [
        'Professional online portfolio',
        'Qualified lead generation',
        'Client credibility and trust',
        'Autonomy and independence',
      ],
      cta_primary: 'Get my website',
      cta_secondary: 'View our work',
      image_alt: 'Modern freelance website example',
    },
    problems: {
      title: 'Common Freelancer Challenges',
      subtitle: 'Do you face these difficulties?',
      pain_points: [
        {
          icon: 'eye-off',
          title: 'Lack of online visibility',
          description:
            "Your prospects can't find you when they search for your services on Google.",
        },
        {
          icon: 'users',
          title: 'Platform dependency',
          description: 'You depend entirely on marketplaces that take significant commissions.',
        },
        {
          icon: 'briefcase',
          title: 'Lack of credibility',
          description: 'Without a professional site, you inspire less trust than your competitors.',
        },
      ],
    },
    solution: {
      title: 'Our Specialized Solutions',
      description:
        'We create custom websites tailored to the needs of freelancers and independent professionals.',
      features: [
        {
          icon: 'search',
          title: 'SEO Optimization',
          description: 'Appear on the first page of Google for your professional keywords.',
        },
        {
          icon: 'briefcase',
          title: 'Professional portfolio',
          description: 'Showcase your achievements and projects in a modern and impactful gallery.',
        },
        {
          icon: 'file-text',
          title: 'Optimized blog',
          description: 'Publish your expertise and advice to attract organic traffic.',
        },
        {
          icon: 'calendar',
          title: 'Appointment booking',
          description: 'Online booking system for consultations and training.',
        },
        {
          icon: 'smartphone',
          title: 'Responsive design',
          description: 'Site optimized for all screens, mobile-first and fast.',
        },
        {
          icon: 'star',
          title: 'Client testimonials',
          description: 'Highlight your reviews to reassure prospects.',
        },
      ],
    },
    process: {
      title: 'Our Creation Process',
      description: 'A proven method specially for freelancers',
      steps: [
        {
          title: 'Business analysis',
          description: 'We study your sector, your services and your competitive positioning.',
        },
        {
          title: 'Custom design',
          description:
            'We create a unique visual identity that reflects your expertise and values.',
        },
        {
          title: 'Optimized development',
          description: 'Modern, fast and SEO-optimized site with the latest technologies.',
        },
        {
          title: 'Launch and training',
          description: 'Go-live and complete training to manage your site independently.',
        },
      ],
    },
    portfolio: {
      title: 'Our Freelance Projects',
      subtitle: 'Discover our achievements for independents',
      projects: [
        {
          name: 'Sarah Developer',
          type: 'Portfolio + Blog',
          image: 'developer-freelance.webp',
          results: ['+150% project requests', '+80% conversion rate'],
        },
        {
          name: 'Marc Consultant',
          type: 'Showcase Site + Booking',
          image: 'consultant-freelance.webp',
          results: ['+200% consultations', '+60% rates charged'],
        },
        {
          name: 'Julie Photographer',
          type: 'Creative Portfolio',
          image: 'photographer-freelance.webp',
          results: ['+300% Instagram visibility', '+45% shoot bookings'],
        },
      ],
    },
    testimonials: {
      title: 'What our freelance clients say',
      subtitle: 'Authentic testimonials from satisfied independents',
      reviews: [
        {
          name: 'Sarah Martin',
          position: 'Freelance Developer',
          company: 'SarahDev',
          location: 'Lyon',
          content:
            'Thanks to my site designed by Sidikoff Digital, I tripled my quote requests in just a few weeks. Clients find me directly on Google!',
          rating: 5,
          image: 'sarah-martin.webp',
        },
        {
          name: 'Marc Dubois',
          position: 'Marketing Consultant',
          company: 'MD Consulting',
          location: 'Paris',
          content:
            'Professional site that inspires confidence. My rates increased by 60% since I have my own web showcase. Excellent investment!',
          rating: 5,
          image: 'marc-dubois.webp',
        },
        {
          name: 'Julie Petit',
          position: 'Photographer',
          company: 'Julie Photo',
          location: 'Bordeaux',
          content:
            'My online portfolio attracts high-end clients. No more prospecting needed, they come to me thanks to natural referencing.',
          rating: 5,
          image: 'julie-petit.webp',
        },
      ],
    },
    pricing: {
      title: 'Packages Adapted to Freelancers',
      description: 'Transparent pricing according to your activity and objectives',
      packages: [
        {
          name: 'Showcase',
          price: '€799',
          period: 'one-time',
          description: 'Perfect for presenting your services and attracting prospects',
          delivery_time: '2 weeks',
          features: [
            'Professional showcase site',
            'Services and pricing presentation',
            'Contact form',
            'Mobile optimization',
            '1 year hosting included',
            'Management training',
          ],
        },
        {
          name: 'Pro',
          price: '€1,299',
          period: 'one-time',
          description: 'Complete solution with portfolio and blog',
          delivery_time: '3 weeks',
          is_popular: true,
          features: [
            'Everything from Showcase package',
            'Professional portfolio',
            'SEO optimized blog',
            'Online booking',
            'Social media integration',
            'Analytics and tracking',
            '1 year support included',
          ],
        },
        {
          name: 'Expert',
          price: '€1,899',
          period: 'one-time',
          description: 'Premium solution for established freelancers',
          delivery_time: '4 weeks',
          features: [
            'Everything from Pro package',
            'Integrated e-commerce',
            'Private client area',
            'Automated newsletter',
            'Advanced video training',
            'Priority support',
            '2 years maintenance included',
          ],
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about creating a freelance site',
      questions: [
        {
          question: 'How long does it take to create a freelance site?',
          answer:
            'Depending on the package chosen, it takes between 2 to 4 weeks to create and launch your site. We adapt the schedule according to your constraints and needs.',
        },
        {
          question: 'Can I update my site myself?',
          answer:
            'Absolutely! All our sites include complete training so you can add your projects, articles and modify your content independently.',
        },
        {
          question: 'Will my site be visible on Google?',
          answer:
            'Yes, we optimize your site for natural referencing with your professional keywords and your location to attract qualified clients.',
        },
        {
          question: 'What happens after delivery?',
          answer:
            'We remain available for technical support, updates and your questions. Hosting and maintenance are included according to your package.',
        },
        {
          question: 'Can I sell my services online?',
          answer:
            'Yes, our Pro and Expert packages include online booking and payment systems for your consultations, training or digital products.',
        },
        {
          question: 'Will the site work on mobile?',
          answer:
            'All our sites are 100% responsive and mobile-first optimized. More than 70% of your visitors browse from their smartphone.',
        },
        {
          question: 'Can I have a blog for my expertise?',
          answer:
            "Yes, the blog is included in our Pro and Expert packages. It's an excellent way to attract organic traffic and demonstrate your expertise.",
        },
        {
          question: 'Do you manage hosting and security?',
          answer:
            'Yes, secure hosting, automatic backups and security updates are included in all our packages.',
        },
      ],
    },
    cta: {
      title: 'Ready to boost your freelance business?',
      description:
        'Join the hundreds of freelancers who have developed their business with a professional website.',
      primary_button: 'Get my free quote',
      secondary_button: 'Call us',
      features: ['Free consultation', 'Personalized quote within 24h', 'No commitment'],
    },
  },
}
