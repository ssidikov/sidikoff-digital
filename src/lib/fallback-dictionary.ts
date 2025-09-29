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
        price: 'from €800',
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
      title: 'What Our Restaurant Clients Say',
      subtitle: 'Authentic testimonials from restaurant owners who transformed their business',
      reviews: [
        {
          name: 'Claire Moreau',
          position: 'Owner',
          restaurant: 'Le Petit Gourmet',
          location: 'Lyon',
          content:
            'Sardor created a beautiful website for our restaurant! He understood exactly what we needed. The work was done on time, very professionally. Thanks to the online reservation system, our bookings increased by 200% in 2 months.',
          rating: 5,
        },
        {
          name: 'Julien Rousseau',
          position: 'Chef & Manager',
          restaurant: "Bistro de l'Olivier",
          location: 'Nice',
          content:
            'Excellent work by Sardor! He delivered a perfect website for our bistro, everything was done with great care and attention to detail. Online orders work perfectly. We highly recommend his services!',
          rating: 5,
        },
        {
          name: 'Marina Blanc',
          position: 'Co-owner',
          restaurant: 'Chez Marina',
          location: 'Marseille',
          content:
            'Sardor exceeded all our expectations! The site is modern, fast and very easy to use. He completed the project ahead of schedule and trained us perfectly. Our turnover increased by 150% since launch.',
          rating: 5,
        },
      ],
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
        price: 'From €800',
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
        price: 'From €800',
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Updates, automatic backups, security and technical support for your website.',
        price: '€100/month',
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
          price: '€800',
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
          price: '€800',
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
  photographer_landing: {
    meta_title: 'Professional Website Creation for Photographers | Premium Portfolio',
    meta_description:
      'Custom websites for professional photographers. High-quality portfolios, dynamic galleries, SEO optimized. Attract more clients with a unique digital showcase.',
    keywords: [
      'photographer website creation',
      'professional photography portfolio',
      'photography website design',
      'online photo gallery',
      'wedding photographer website',
    ],
    hero: {
      badge: 'Photography Specialists',
      title: 'Professional Websites for Photographers',
      description:
        'Give your photos a unique and professional digital showcase that highlights your artistic talent.',
      benefits: [
        'High-quality responsive portfolio',
        'Dynamic and elegant galleries',
        'Advanced local SEO optimization',
        'Integrated booking system',
      ],
      cta_primary: 'Get my website',
      cta_secondary: 'View our work',
      image_alt: 'Modern photographer website example',
    },
    problems: {
      title: 'Common Photographer Challenges',
      subtitle: 'Do you face these difficulties?',
      pain_points: [
        {
          icon: 'eye-off',
          title: 'Lack of online visibility',
          description:
            "Your potential clients can't find your work when they search for a photographer on Google.",
        },
        {
          icon: 'users',
          title: 'Social media dependency',
          description: "Instagram and Facebook limit your reach and you don't own your audience.",
        },
        {
          icon: 'heart',
          title: 'Scattered portfolio',
          description: 'Your best photos are spread across different platforms without coherence.',
        },
      ],
    },
    solution: {
      title: 'Our Specialized Solutions',
      description:
        'We create custom websites that showcase your photographic art and attract your ideal clients.',
      features: [
        {
          icon: 'camera',
          title: 'Professional portfolio',
          description:
            'High-resolution galleries that preserve the quality and visual impact of your shots.',
        },
        {
          icon: 'search',
          title: 'Local SEO optimization',
          description: "Appear first on Google for 'wedding photographer [your city]'.",
        },
        {
          icon: 'calendar',
          title: 'Online booking',
          description: 'Automated appointment and quote system for your sessions.',
        },
        {
          icon: 'smartphone',
          title: 'Responsive design',
          description: 'Site perfectly optimized for all screens and mobile devices.',
        },
        {
          icon: 'award',
          title: 'Service presentation',
          description: 'Clear showcase of your specialties: wedding, portrait, events, studio.',
        },
        {
          icon: 'star',
          title: 'Client testimonials',
          description: 'Dedicated section to reassure prospects with your positive reviews.',
        },
      ],
    },
    process: {
      title: 'Our Creation Process',
      description: 'A proven method specially for photographers',
      steps: [
        {
          title: 'Style analysis',
          description: 'We study your artistic universe and photographic specialties.',
        },
        {
          title: 'Custom design',
          description:
            'Creation of a visual identity that enhances your photos without overshadowing them.',
        },
        {
          title: 'Optimized development',
          description:
            'Fast, SEO-friendly site with high-performance galleries and intelligent compression.',
        },
        {
          title: 'Complete training',
          description: 'Learn to manage your galleries, add your photos and get more clients.',
        },
      ],
    },
    portfolio: {
      title: 'Our Photography Projects',
      subtitle: 'Discover our creations for image professionals',
      projects: [
        {
          name: 'Studio Marie Photographer',
          type: 'Wedding Portfolio + Blog',
          image: 'photographer-wedding.webp',
          results: ['+200% quote requests', '+85% conversion rate'],
        },
        {
          name: 'David Corporate Photos',
          type: 'Showcase Site + Gallery',
          image: 'photographer-wedding-portfolio.webp',
          results: ['+150% business clients', '+70% rates charged'],
        },
        {
          name: 'Clara Art Photography',
          type: 'Artistic Portfolio',
          image: 'photographer-artistic.webp',
          results: ['+300% print sales', '+120% Instagram followers'],
        },
      ],
    },
    testimonials: {
      title: 'What our photographer clients say',
      subtitle: 'Authentic testimonials from satisfied professionals',
      reviews: [
        {
          name: 'Marie Dubois',
          position: 'Wedding Photographer',
          company: 'Studio Marie',
          location: 'Paris',
          content:
            'My site perfectly reflects my photography style. Thanks to SEO, I gained many new clients in just a few months!',
          rating: 5,
          image: 'marie-dubois-photographer.webp',
        },
        {
          name: 'David Laurent',
          position: 'Corporate Photographer',
          company: 'DL Photos',
          location: 'Lyon',
          content:
            'Professional site that inspires confidence in businesses. My rates increased significantly since I have my own web showcase.',
          rating: 5,
          image: 'david-laurent-photographer.webp',
        },
        {
          name: 'Clara Martin',
          position: 'Artistic Photographer',
          company: 'Clara Art',
          location: 'Marseille',
          content:
            'My photographic works are showcased like never before. Collectors find me directly thanks to natural SEO.',
          rating: 5,
          image: 'clara-martin-photographer.webp',
        },
      ],
    },
    pricing: {
      title: 'Packages Adapted to Photographers',
      description: 'Transparent pricing according to your specialty and objectives',
      packages: [
        {
          name: 'Portfolio',
          price: '€899',
          period: 'one-time',
          description: 'Ideal for presenting your best achievements',
          delivery_time: '2 weeks',
          features: [
            'Professional photo gallery',
            'Services and pricing presentation',
            'Contact form',
            'Perfect mobile optimization',
            '1 year hosting included',
            'Management training',
          ],
        },
        {
          name: 'Studio Pro',
          price: '€1,399',
          period: 'one-time',
          description: 'Complete solution with booking and blog',
          delivery_time: '3 weeks',
          is_popular: true,
          features: [
            'Everything from Portfolio package',
            'Multiple organized galleries',
            'SEO optimized photo blog',
            'Booking system',
            'Automated online quotes',
            'Detailed analytics and tracking',
            '1 year support included',
          ],
        },
        {
          name: 'Master',
          price: '€1,999',
          period: 'one-time',
          description: 'Premium solution for established photographers',
          delivery_time: '4 weeks',
          features: [
            'Everything from Studio Pro package',
            'Integrated online store',
            'Secure private client area',
            'Automated newsletter',
            'Advanced video training',
            'Unlimited priority support',
            '2 years maintenance included',
          ],
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about creating a photographer website',
      questions: [
        {
          question: 'Will my photos maintain their quality on the site?',
          answer:
            'Absolutely! We use intelligent compression technologies that preserve visual quality while optimizing loading times.',
        },
        {
          question: 'Can I organize my photos in thematic galleries?',
          answer:
            'Yes, we create galleries organized by specialty: wedding, portrait, events, studio, etc. You can easily manage them.',
        },
        {
          question: 'Will the site be visible on Google?',
          answer:
            'We optimize your site for local SEO with your photography keywords and geographical area to attract qualified clients.',
        },
        {
          question: 'Can I sell my photos online?',
          answer:
            'Yes, our Studio Pro and Master packages include an online sales system for your prints, albums and photography services.',
        },
        {
          question: 'How to manage quote requests?',
          answer:
            'We integrate an automated quote system where your clients can detail their project and receive a personalized estimate.',
        },
        {
          question: 'Will the site work on mobile?',
          answer:
            'All our sites are 100% responsive and mobile-first optimized. Your galleries display perfectly on smartphones and tablets.',
        },
        {
          question: 'Can I have a blog to share my experiences?',
          answer:
            'Yes, the blog is included in our Pro and Master packages. Perfect for telling your shoot stories and attracting organic traffic.',
        },
        {
          question: 'What about hosting and security?',
          answer:
            'Secure hosting, automatic backups and security updates are included in all our packages.',
        },
      ],
    },
    cta: {
      title: 'Ready to elevate your photography online?',
      description:
        'Join hundreds of photographers who have grown their clientele with a professional website.',
      primary_button: 'Get my free quote',
      secondary_button: 'Call us',
      features: ['Free consultation', 'Personalized quote within 24h', 'No commitment'],
    },
  },
  doctor_landing: {
    meta_title: 'Medical Website Creation | Online Appointments | Sidikoff Digital',
    meta_description:
      'Professional website for doctors with online appointment booking. Local SEO, reassuring design, GDPR compliance. Free quote.',
    keywords: [
      'medical website creation',
      'doctor website',
      'online appointment booking',
      'medical site',
      'medical practice',
      'doctor SEO',
      'dentist website',
      'dermatologist',
    ],
    hero: {
      badge: 'Medical Websites',
      title: 'Professional medical website with online appointment booking',
      description:
        'Give your medical practice a modern online presence that facilitates appointment booking and builds patient trust.',
      image_alt: 'Modern medical office with professional equipment',
      benefits: [
        'Optimized local visibility (SEO)',
        'Secure online appointment booking',
        'Reassuring and professional design',
        'GDPR compliance and data security',
      ],
      cta_primary: 'Request free quote',
      cta_secondary: 'View our work',
    },
    problems: {
      title: 'Challenges facing medical practices today',
      description: 'Patients search for doctors online and expect a modern, secure experience.',
      pain_points: [
        {
          icon: 'clock',
          title: 'Time-consuming call management',
          description: 'Your reception spends too much time on the phone managing appointments.',
        },
        {
          icon: 'users',
          title: 'Insufficient local visibility',
          description: 'Potential patients cannot find your practice in local Google searches.',
        },
        {
          icon: 'shield',
          title: 'Difficult to establish trust',
          description:
            'Without professional web presence, new patients hesitate to choose your practice.',
        },
      ],
    },
    solution: {
      title: 'Our specialized solutions for medical practices',
      description:
        'We create medical websites that optimize your management and strengthen your professional credibility.',
      features: [
        {
          icon: 'stethoscope',
          title: 'Medical showcase website',
          description: 'Present your practice, specialties, team and hours with reassuring design.',
        },
        {
          icon: 'calendar',
          title: 'Online appointment booking',
          description:
            'Secure system with interactive calendar, automatic email and SMS notifications.',
        },
        {
          icon: 'search',
          title: 'Optimized local SEO',
          description: 'Appear on first page for "doctor [your city]" and in Google Maps.',
        },
        {
          icon: 'file-text',
          title: 'Medical blog',
          description: 'Publish health advice to strengthen your expertise and improve SEO.',
        },
        {
          icon: 'smartphone',
          title: 'Responsive design',
          description: 'Site perfectly adapted to smartphones, tablets and computers.',
        },
        {
          icon: 'shield',
          title: 'Security and GDPR',
          description: 'Full compliance with medical regulations and patient data protection.',
        },
      ],
    },
    process: {
      title: 'Our specialized creation process',
      description: 'A custom approach adapted to medical sector specificities',
      steps: [
        {
          title: 'Practice analysis',
          description: 'We study your specialty, patient base and specific needs.',
        },
        {
          title: 'Custom medical design',
          description: 'Create reassuring visual identity that inspires trust and professionalism.',
        },
        {
          title: 'Secure development',
          description: 'Fast, GDPR-compliant site with integrated appointment booking system.',
        },
        {
          title: 'Complete training',
          description: 'Learn to manage your site, appointments and attract more patients.',
        },
      ],
    },
    portfolio: {
      title: 'Medical websites we have created',
      description: 'Discover how we helped practitioners grow their patient base online',
      projects: [
        {
          name: 'Dr. Martin General Practice',
          type: 'General Medicine Office',
          image: 'doctor-general-practice.webp',
          results: ['+200% online appointments', '+85% new patients'],
        },
        {
          name: 'Smile Dental Clinic',
          type: 'Aesthetic Dentistry',
          image: 'doctor-dental-clinic.webp',
          results: ['+150% aesthetic consultations', '+120% local visibility'],
        },
        {
          name: 'Dr. Dubois Dermatologist',
          type: 'Specialized Dermatology',
          image: 'doctor-dermatology.webp',
          results: ['+180% private consultations', '+90% reduced booking delay'],
        },
      ],
    },
    testimonials: {
      title: 'What our medical clients say',
      subtitle: 'Authentic testimonials from satisfied practitioners',
      reviews: [
        {
          name: 'Dr. Sophie Martin',
          position: 'General Practitioner',
          company: 'Martin Practice',
          location: 'Paris 15th',
          content:
            'My website created by Sidikoff Digital revolutionized my practice management. Patients book online and I saved enormous time!',
          rating: 5,
          image: 'dr-sophie-martin.webp',
        },
        {
          name: 'Dr. Pierre Lemoine',
          position: 'Dentist',
          company: 'Smile Clinic',
          location: 'Lyon 6th',
          content:
            'Excellent work! The site is professional, reassuring and local SEO works perfectly. I highly recommend.',
          rating: 5,
          image: 'dr-pierre-lemoine.webp',
        },
        {
          name: 'Dr. Marie Dubois',
          position: 'Dermatologist',
          company: 'Dermatology Center',
          location: 'Marseille 8th',
          content:
            'The team perfectly understood my needs. The design inspires confidence and the appointment system is very convenient for patients.',
          rating: 5,
          image: 'dr-marie-dubois.webp',
        },
      ],
    },
    pricing: {
      title: 'Packages adapted to healthcare professionals',
      description: 'Complete solutions with integrated appointment booking and GDPR compliance',
      packages: [
        {
          name: 'Practice Essential',
          price: '€1,299',
          period: 'complete project',
          delivery_time: 'Delivered in 2-3 weeks',
          description: 'Perfect to start your professional online presence',
          features: [
            '5-page showcase site (Home, Services, Team, Hours, Contact)',
            'Reassuring and modern medical design',
            'Secure contact form',
            'Basic optimized SEO',
            'Responsive mobile version',
            'Secure hosting 1 year included',
            'Site management training',
          ],
        },
        {
          name: 'Practice Pro',
          price: '€1,899',
          period: 'complete project',
          delivery_time: 'Delivered in 3-4 weeks',
          is_popular: true,
          description: 'Complete solution with online appointment booking',
          features: [
            'Everything from Essential package',
            'Online appointment booking system',
            'Personalized interactive calendar',
            'Automatic email and SMS notifications',
            'Time slots and specialties management',
            'Unlimited detailed service pages',
            'Advanced local SEO + Google Maps',
            'Integrated medical blog',
            'Complete GDPR compliance',
          ],
        },
        {
          name: 'Practice Master',
          price: '€2,799',
          period: 'complete project',
          delivery_time: 'Delivered in 4-5 weeks',
          description: 'Premium solution for multi-specialty practices',
          features: [
            'Everything from Pro package',
            'Multi-practitioner management',
            'Secure patient portal',
            'Online payment system',
            'Existing practice software integration',
            'Integrated telemedicine',
            'Advanced medical analytics',
            'Complete team training',
            'Priority support 6 months',
            'Maintenance and updates 1 year',
          ],
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      description: 'Answers to most common questions about our medical websites',
      questions: [
        {
          question: 'Will the site comply with medical regulations?',
          answer:
            'Absolutely! All our sites comply with GDPR, Medical Board regulations and health data regulations. Security and confidentiality are our priorities.',
        },
        {
          question: 'How does online appointment booking work?',
          answer:
            'The system allows patients to see your available slots in real time, choose their consultation reason and receive automatic confirmations. You keep total control over your schedule.',
        },
        {
          question: 'Can I integrate my existing practice software?',
          answer:
            'Yes, in our Master package, we offer integration with main medical software (Doctolib, MediClick, etc.) to synchronize your appointments.',
        },
        {
          question: 'Is local SEO really effective?',
          answer:
            'Our medical sites systematically appear on first page for local searches. We optimize your Google My Business listing and presence in medical directories.',
        },
        {
          question: 'What about maintenance and updates?',
          answer:
            'We handle technical maintenance, automatic backups and security updates. Your site stays always performant and secure.',
        },
      ],
    },
    cta: {
      title: 'Ready to modernize your medical practice?',
      description:
        'Join hundreds of practitioners who have grown their patient base with a professional website.',
      button: 'Get my free quote',
    },
  },
  ecommerce_landing: {
    meta_title: 'E-commerce Website Creation | Online Stores & Marketplaces | Sidikoff Digital',
    meta_description:
      'Custom E-commerce websites: online stores, shops and marketplaces. Next.js, React, Shopify, WooCommerce. SEO optimized. Free quote.',
    keywords: [
      'ecommerce website creation',
      'online store',
      'marketplace',
      'online shop',
      'ecommerce France',
      'ecommerce development',
      'Shopify',
      'WooCommerce',
    ],
    hero: {
      badge: 'E-commerce & Online Stores',
      title: 'E-commerce sites: stores, shops and marketplaces',
      description:
        'Give your business a high-performing online presence. We create custom E-commerce sites with professional design and SEO optimization to generate sales.',
      image_alt: 'Modern online store with e-commerce interface',
      benefits: [
        'Custom sites with Next.js, React, Shopify',
        'Secure payments: Credit Card, PayPal, Stripe',
        'SEO optimized for French market',
        'Modern design and optimized UX',
        'Easy product and inventory management',
      ],
      cta_primary: 'Launch my e-commerce',
      cta_secondary: 'View our work',
    },
    problems: {
      title: 'E-commerce challenges today',
      description:
        'E-commerce evolves rapidly and competition is fierce. Your site must stand out.',
      pain_points: [
        {
          icon: 'trending-up',
          title: 'Intense competition',
          description: "Thousands of online stores compete for French consumers' attention.",
        },
        {
          icon: 'users',
          title: 'Complex user experience',
          description: 'Customers abandon their cart if the site is not intuitive and fast.',
        },
        {
          icon: 'search',
          title: 'Insufficient visibility',
          description: 'Without optimized SEO, your store remains invisible in Google results.',
        },
      ],
    },
    solution: {
      title: 'Our high-performing E-commerce solutions',
      description: 'We create online stores that convert visitors into loyal customers.',
      features: [
        {
          icon: 'shopping-cart',
          title: 'Custom stores',
          description:
            'Elegant and modern design to showcase your products with high-resolution images.',
        },
        {
          icon: 'credit-card',
          title: 'Secure payments',
          description:
            'Complete integration with Credit Card, PayPal, Stripe for smooth and secure transactions.',
        },
        {
          icon: 'package',
          title: 'Inventory management',
          description:
            'Intuitive interface to easily manage your products, categories and inventory.',
        },
        {
          icon: 'smartphone',
          title: 'Mobile-first',
          description:
            'Responsive site optimized for smartphones and tablets, where your customers shop.',
        },
        {
          icon: 'search',
          title: 'E-commerce SEO',
          description: 'Specialized optimization so your products appear in Google searches.',
        },
        {
          icon: 'bar-chart-3',
          title: 'Advanced analytics',
          description: 'Detailed dashboards to track your sales and optimize your performance.',
        },
      ],
    },
    process: {
      title: 'Our E-commerce creation process',
      description: 'A proven method to successfully launch your online store',
      steps: [
        {
          title: 'Market analysis',
          description: 'Study of your sector, competitors and optimal e-commerce strategy.',
        },
        {
          title: 'Design & UX',
          description: 'Creating an attractive interface that guides your customers to purchase.',
        },
        {
          title: 'Technical development',
          description: 'Programming with latest technologies: Next.js, React, or specialized CMS.',
        },
        {
          title: 'Testing & launch',
          description: 'Complete testing, management training and launch of your store.',
        },
      ],
    },
    portfolio: {
      title: 'E-commerce sites we have created',
      description: 'Discover how we helped businesses succeed online',
      projects: [
        {
          name: 'Parisian Fashion Boutique',
          type: 'Fashion E-commerce',
          image: 'ecommerce-fashion-boutique.webp',
          results: ['+300% online sales', '+180% conversion rate'],
        },
        {
          name: 'Local Artisans Marketplace',
          type: 'Multi-vendor Marketplace',
          image: 'ecommerce-marketplace-artisans.webp',
          results: ['50+ active vendors', '+250% monthly GMV'],
        },
        {
          name: 'Organic & Natural Store',
          type: 'Food E-commerce',
          image: 'ecommerce-organic-store.webp',
          results: ['+200% online orders', '+150% average basket'],
        },
      ],
    },
    testimonials: {
      title: 'What our E-commerce clients say',
      subtitle: 'Authentic testimonials from entrepreneurs who succeed online',
      reviews: [
        {
          name: 'Sophie Martineau',
          position: 'Founder',
          company: 'Parisian Fashion Boutique',
          location: 'Paris',
          content:
            'Thanks to Sidikoff Digital, our online store became our main sales channel. The site is fast, attractive and our sales tripled!',
          rating: 5,
          image: 'sophie-martineau.webp',
        },
        {
          name: 'Thomas Dubois',
          position: 'CEO',
          company: 'Artisans Marketplace',
          location: 'Lyon',
          content:
            'Our marketplace works perfectly. Vendors easily manage their products and local SEO brings us many customers throughout France.',
          rating: 5,
          image: 'thomas-dubois.webp',
        },
        {
          name: 'Marie Leclerc',
          position: 'Owner',
          company: 'Organic & Natural',
          location: 'Bordeaux',
          content:
            'The team perfectly understood our needs. The site reflects our organic values and online orders exploded since launch.',
          rating: 5,
          image: 'marie-leclerc.webp',
        },
      ],
    },
    pricing: {
      title: 'E-commerce packages adapted to your business',
      description: 'Complete solutions for stores, shops and marketplaces',
      packages: [
        {
          name: 'Store Essential',
          price: '€2,499',
          period: 'complete project',
          delivery_time: 'Delivered in 4-6 weeks',
          description: 'Perfect to launch your first online store',
          features: [
            'Up to 100 products',
            'Responsive e-commerce design',
            'Optimized cart and checkout',
            'Credit Card, PayPal, Stripe payments',
            'Inventory management',
            'Basic optimized SEO',
            'Management training',
            'Secure hosting 1 year',
          ],
        },
        {
          name: 'Commerce Pro',
          price: '€4,299',
          period: 'complete project',
          delivery_time: 'Delivered in 6-8 weeks',
          is_popular: true,
          description: 'Complete solution for ambitious businesses',
          features: [
            'Unlimited products',
            'Everything from Essential package',
            'Advanced promotion system',
            'Customer accounts and loyalty',
            'Detailed e-commerce analytics',
            'Advanced e-commerce SEO',
            'Social media integration',
            'Customer review system',
            'Priority support 6 months',
          ],
        },
        {
          name: 'Marketplace Master',
          price: '€7,999',
          period: 'complete project',
          delivery_time: 'Delivered in 8-12 weeks',
          description: 'Premium solution for multi-vendor marketplaces',
          features: [
            'Everything from Pro package',
            'Multi-vendor management',
            'Automated commission system',
            'Vendor dashboard',
            'Product moderation',
            'Multi-vendor payments',
            'Advanced API and integrations',
            'Scalable architecture',
            'Complete team training',
            'Maintenance 1 year included',
          ],
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      description: 'Answers to most common questions about our E-commerce sites',
      questions: [
        {
          question: 'Which platform do you use for E-commerce sites?',
          answer:
            'We use the best technologies according to your needs: Next.js/React for custom, Shopify for quick, WooCommerce for flexible, or custom solutions for marketplaces.',
        },
        {
          question: 'How do you handle payments and security?',
          answer:
            'We integrate the safest payment solutions (Stripe, PayPal, French banks) with SSL encryption and PCI DSS compliance to protect your transactions.',
        },
        {
          question: 'Will the site be optimized for SEO?',
          answer:
            'Absolutely! Every product page, category and content is optimized for French SEO. We work on speed, keywords and user experience.',
        },
        {
          question: 'Can I manage my inventory and orders easily?',
          answer:
            'Yes, we create an intuitive dashboard where you can manage your products, inventory, orders and customers. Complete training included.',
        },
        {
          question: 'Do you offer maintenance and updates?',
          answer:
            'We handle technical maintenance, backups, security updates and support. Your e-commerce stays always performant and secure.',
        },
      ],
    },
    cta: {
      title: 'Ready to launch your E-commerce success?',
      description:
        'Join businesses that chose excellence for their online store and generate sales 24/7.',
      button: 'Get my free quote',
    },
  },
  travel_agency_landing: {
    meta_title: 'Travel Agency Website Creation - Professional Web Solutions',
    meta_description:
      'Create a professional travel agency website with booking system, destination galleries, and SEO optimization.',
    keywords: [
      'travel agency website',
      'booking system',
      'travel website design',
      'tourism digital solutions',
    ],
    hero: {
      title: 'Professional Website for Your Travel Agency',
      subtitle:
        'Transform your travel expertise into digital success with a custom website that inspires and converts visitors into clients',
      cta_primary: 'Get Free Quote',
      cta_secondary: 'View Our Work',
      stats_title: 'Your Success Starts Here',
      stats_subtitle: 'Complete solutions for your agency',
    },
    pain_points: {
      title: 'Modern Travel Agency Challenges',
      subtitle:
        'In an ultra-competitive market, your agency faces numerous obstacles that hinder growth',
      points: [
        {
          icon: 'globe',
          title: 'Online Platform Competition',
          description:
            'Booking giants dominate searches and capture your potential clients with massive marketing budgets.',
        },
        {
          icon: 'map',
          title: 'Outdated Booking Process',
          description:
            'Modern clients want everything instantly. Slow or complicated booking drives them to competitors.',
        },
        {
          icon: 'compass',
          title: 'Limited Online Visibility',
          description:
            'Without strong digital presence, your expertise remains invisible to 95% of potential clients.',
        },
      ],
    },
    solutions: {
      title: 'Your Complete Digital Solution',
      subtitle: 'Professional website that transforms your travel agency into a digital leader',
      items: [
        {
          icon: 'globe',
          title: 'Premium Digital Presence',
          description:
            'Elegant website reflecting your agency status and inspiring confidence from first visit.',
        },
        {
          icon: 'heart',
          title: 'Integrated Booking System',
          description:
            'Clients book directly online 24/7 with secure payment and automatic confirmation.',
        },
      ],
    },
    features: {
      title: 'Advanced Features for Travel Agencies',
      subtitle: 'Everything needed to digitize and automate your activity',
      items: [
        {
          icon: 'plane',
          title: 'Dynamic Travel Catalog',
          description:
            'Present all tours with detailed descriptions, prices and real-time availability.',
        },
        {
          icon: 'calendar',
          title: 'Availability Calendar',
          description: 'Clients instantly see available dates and book their preferred slots.',
        },
      ],
    },
    benefits: {
      title: 'Concrete Benefits for Your Agency',
      subtitle: 'Measurable results that transform your business from the first weeks',
      items: [
        {
          icon: 'trendingDown',
          title: '+250% Online Visibility',
          description: 'Multiply reach and attract new clients through optimized SEO.',
        },
        {
          icon: 'checkCircle',
          title: '24/7 Bookings',
          description: 'Clients book even nights and weekends, increasing sales by 40% average.',
        },
      ],
    },
    process: {
      title: 'Our 4-Step Creation Process',
      subtitle: 'Proven method to deliver your professional website in 3-4 weeks',
      steps: [
        {
          number: '1',
          title: 'Audit & Strategy',
          description:
            'Activity analysis, objective definition and personalized digital strategy creation.',
        },
        {
          number: '2',
          title: 'Design & Mockups',
          description:
            'Custom design creation and interactive mockups validated before development.',
        },
      ],
    },
    testimonials: {
      title: 'What Our Travel Sector Clients Say',
      subtitle: 'Agencies that transformed their business with new websites',
      items: [
        {
          name: 'Marie Dubois',
          role: 'Director',
          text: 'Since our new site launch, online bookings exploded! Design is magnificent and booking system works perfectly.',
          rating: 5,
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'All answers to your questions about travel agency websites',
      questions: [
        {
          question: 'How much does a travel agency website cost?',
          answer:
            'Price varies by specific needs. Our packages start from €2,500 for showcase sites up to €8,000 for complete platforms.',
        },
      ],
    },
    cta: {
      title: 'Ready to Digitize Your Travel Agency?',
      subtitle:
        'Join agencies that chose digital excellence. Get your personalized quote in 24 hours.',
      primary: 'Get Free Quote',
      secondary: 'View Our Work',
    },
  },
  agence_web_paris_landing: {
    meta_title: 'Web Agency Paris - Website Creation & Next.js Applications',
    meta_description:
      'Web agency in Paris specializing in Next.js/React development and WordPress. High-performance, SEO-optimized website creation.',
    hero: {
      badge: 'Web Agency Paris',
      title: 'Web Agency in Paris – Digital Creation & Innovation',
      description:
        'We build modern, high-performance websites tailored to your business needs with cutting-edge technologies.',
      cta_primary: 'Request Quote',
      cta_secondary: 'View Projects',
      trust_indicators: [
        'Next.js/React Technologies',
        'WordPress Support 24/7',
        'SEO & Performance',
      ],
    },
    services: {
      title: 'Our Web Agency Services',
      subtitle: 'Complete digital solutions for your online presence',
      items: [
        {
          icon: '⚛️',
          title: 'Next.js & React Development',
          description:
            'We create high-performance websites and applications using Next.js and React, technologies trusted by giants like Netflix, Uber, and Airbnb.',
        },
        {
          icon: '🌐',
          title: 'Custom WordPress Websites',
          description: 'Creation, redesign, and full support.',
        },
        {
          icon: '🚀',
          title: 'SEO & Optimization',
          description: 'Google ranking and performance optimization.',
        },
      ],
    },
    about: {
      title: 'Why Choose Our Web Agency?',
      subtitle: 'We specialize in modern web development with unique solutions for each project.',
      items: [
        {
          icon: '🏆',
          title: 'Technical Expertise',
          description: 'Modern technologies and advanced optimization',
        },
        {
          icon: '📍',
          title: 'Local Proximity',
          description: 'Understanding of local challenges and needs',
        },
        {
          icon: '💼',
          title: 'Dedicated Support',
          description: 'Continuous maintenance and technical support',
        },
      ],
    },
    process: {
      title: 'Our 5-Step Process',
      steps: [
        {
          number: '01',
          title: 'Analysis & Strategy',
          description: 'Study needs and define optimal strategy',
        },
        {
          number: '02',
          title: 'Modern Design',
          description: 'Attractive interfaces optimized for conversion',
        },
        {
          number: '03',
          title: 'Development',
          description: 'Development with performant technologies',
        },
        {
          number: '04',
          title: 'SEO Optimization',
          description: 'Performance optimization for search engines',
        },
        {
          number: '05',
          title: 'Continuous Support',
          description: 'Maintenance and permanent technical support',
        },
      ],
    },
    portfolio_teaser: {
      title: 'Our Work',
      description: 'Discover our portfolio of websites and applications.',
      cta: 'View All Projects',
    },
    cta: {
      title: 'Ready to launch your digital project?',
      description: 'Contact our web agency today.',
      button: 'Request Free Quote',
    },
  },
}
