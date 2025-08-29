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
      description: 'Improve your SEO.',
    },
    maintenance: {
      title: 'Maintenance',
      features: [],
      description: 'Website maintenance.',
    },
    cta_banner: {
      background: '',
      description: 'Get in touch for a quote.',
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
    meta_description: 'Create your professional website with our custom development service. Responsive design, SEO optimization, and modern technologies.',
    keywords: ['website creation', 'web development', 'responsive design', 'SEO', 'custom website'],
    hero: {
      badge: 'Custom Development',
      title: 'Create Your Professional Website',
      description: 'Stand out from the competition with a unique and optimized website. Our team creates custom sites that convert visitors into customers.',
      benefits: [
        'Complete custom design and development',
        'Full SEO optimization from launch',
        'Responsive on all devices',
        'Modern and fast technologies',
        'Technical support and training',
        'Performance and security guarantees'
      ],
      cta_primary: 'Get a Free Quote',
      cta_secondary: 'View Our Portfolio',
      image_alt: 'Professional website creation'
    },
    stats: [
      {
        number: '100+',
        title: 'Websites Created',
        description: 'for satisfied clients'
      },
      {
        number: '98%',
        title: 'Client Satisfaction',
        description: 'rating across all projects'
      },
      {
        number: '15 days',
        title: 'Average Delivery',
        description: 'from design to launch'
      }
    ],
    process: {
      title: 'Our Development Process',
      description: 'A proven method to create a website that meets your goals and exceeds your expectations.',
      steps: [
        {
          title: 'Analysis & Strategy',
          description: 'We study your business, target audience, and competition to define the optimal strategy.'
        },
        {
          title: 'Design & UX/UI',
          description: 'Creation of wireframes and custom design focused on user experience and conversion.'
        },
        {
          title: 'Development',
          description: 'Custom coding with modern technologies, ensuring performance and security.'
        },
        {
          title: 'Launch & Support',
          description: 'Site deployment, training, and ongoing support to ensure your success.'
        }
      ]
    },
    features: {
      title: 'Why Choose Our Service?',
      description: 'We create websites that not only look great but also perform exceptionally well.',
      items: [
        {
          icon: 'design',
          title: 'Custom Design',
          description: 'Unique design that reflects your brand identity and stands out from the competition.'
        },
        {
          icon: 'performance',
          title: 'Optimized Performance',
          description: 'Fast loading times and superior performance on all devices.'
        },
        {
          icon: 'seo',
          title: 'SEO Ready',
          description: 'Technical and content optimization for better search engine visibility.'
        },
        {
          icon: 'responsive',
          title: 'Mobile-First',
          description: 'Perfect experience on smartphones, tablets, and desktops.'
        },
        {
          icon: 'security',
          title: 'Security',
          description: 'Advanced security measures to protect your site and user data.'
        },
        {
          icon: 'support',
          title: 'Ongoing Support',
          description: 'Technical assistance and updates to keep your site running smoothly.'
        }
      ]
    },
    cta: {
      title: 'Ready to Launch Your Web Project?',
      description: 'Get a free and personalized quote for your professional website. Free consultation included.',
      primary_button: 'Get a Free Quote'
    }
  },
  web_redesign_landing: {
    meta_title: 'Website Redesign - Professional Modernization and Makeover',
    meta_description: 'Modernize your existing website with our redesign service. Optimized UX/UI, improved performance, doubled conversion. Transform your online presence.',
    keywords: ['website redesign', 'website makeover', 'site modernization', 'UX/UI', 'conversion', 'performance'],
    hero: {
      badge: 'Digital Transformation',
      title: 'Modernize Your Existing Website',
      description: 'Your site doesn\'t convert enough? Our redesign service transforms your online presence into a selling machine. Double your conversions with modern design and optimized UX.',
      benefits: [
        'Complete analysis of your current site',
        'Modern and responsive design',
        'User experience optimization (UX/UI)',
        'Performance and speed improvements',
        'Secure content migration',
        'Training on the new interface'
      ],
      cta_primary: 'Analyze My Site for Free',
      cta_secondary: 'See Our Transformations',
      image_alt: 'Professional website redesign'
    },
    stats: [
      {
        number: '150%',
        title: 'Average Improvement',
        description: 'in conversions after redesign'
      },
      {
        number: '40%',
        title: 'Bounce Rate',
        description: 'reduction on average'
      },
      {
        number: '2-3 wks',
        title: 'Redesign Timeline',
        description: 'for a transformed site'
      }
    ],
    process: {
      title: 'Our Redesign Process',
      description: 'A structured method to transform your existing site into a high-performing conversion tool.',
      steps: [
        {
          title: 'Complete Audit',
          description: 'Technical, UX and performance analysis of your current site to identify improvement opportunities.'
        },
        {
          title: 'UX Strategy',
          description: 'Design of the new user experience based on your goals and visitor expectations.'
        },
        {
          title: 'Redesign',
          description: 'Creation of new modern, responsive design optimized for conversion.'
        },
        {
          title: 'Migration',
          description: 'Secure content migration and launch of your transformed website.'
        }
      ]
    },
    features: {
      title: 'Why Choose Our Redesign Service?',
      description: 'We transform your existing site into a powerful conversion tool with a data-driven approach.',
      items: [
        {
          icon: 'design',
          title: 'Modern Design',
          description: 'Contemporary interface that inspires trust and engages your visitors.'
        },
        {
          icon: 'performance',
          title: 'Boosted Performance',
          description: 'Site 3x faster with optimized loading times.'
        },
        {
          icon: 'responsive',
          title: 'Mobile-First',
          description: 'Perfect experience on all devices, mobile priority.'
        },
        {
          icon: 'seo',
          title: 'SEO Preserved',
          description: 'Migration without SEO loss, even improvement.'
        },
        {
          icon: 'support',
          title: 'Training Included',
          description: 'Support to master your new website.'
        },
        {
          icon: 'security',
          title: 'Secure Migration',
          description: 'Complete backup and risk-free migration.'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Website?',
      description: 'Get a free analysis of your current site and discover its improvement potential.',
      primary_button: 'Analyze My Site for Free'
    }
  },
  seo_optimization_landing: {
    meta_title: 'SEO Optimization & Search Rankings - Guaranteed Results',
    meta_description: 'Professional SEO optimization service. Dominate search rankings and multiply organic traffic. Free audit and personalized strategy.',
    keywords: ['SEO optimization', 'search rankings', 'organic traffic', 'SEO audit'],
    hero: {
      badge: 'SEO Expert',
      title: 'Dominate Search Rankings and Multiply Your Traffic',
      description: 'Transform your website into a traffic generation machine with our proven SEO expertise.',
      benefits: [
        'Complete free SEO audit',
        'Personalized strategy',
        'Real-time tracking',
        'Visible results in 3 months',
        'Expert support'
      ],
      cta_primary: 'Free SEO Audit',
      cta_secondary: 'See Results',
      image_alt: 'Professional SEO optimization'
    },
    stats: [
      {
        number: '300%',
        title: 'Traffic Increase',
        description: 'Average organic traffic growth'
      },
      {
        number: '85%',
        title: 'First Page',
        description: 'Keywords ranked on first page'
      },
      {
        number: '24h',
        title: 'Response Time',
        description: 'Expert support response'
      }
    ],
    process: {
      title: 'Our Proven SEO Method',
      description: 'Data-driven approach for maximum search visibility',
      steps: [
        {
          title: 'Complete SEO Audit',
          description: 'Technical analysis and keyword opportunities'
        },
        {
          title: 'Custom Strategy',
          description: 'Tailored action plan for your industry'
        },
        {
          title: 'On-Page Optimization',
          description: 'Technical improvements and content optimization'
        },
        {
          title: 'Tracking & Reporting',
          description: 'Performance monitoring with detailed reports'
        }
      ]
    },
    features: {
      title: 'Why Choose Our SEO Expertise',
      description: 'Measurable results for your online business growth',
      items: [
        {
          title: 'Technical Audit',
          description: 'Complete site analysis and optimization'
        },
        {
          title: 'Keyword Research',
          description: 'Profitable terms identification'
        },
        {
          title: 'Content Optimization',
          description: 'Converting content creation'
        },
        {
          title: 'Link Building',
          description: 'Authority boosting strategy'
        },
        {
          title: 'Performance Tracking',
          description: 'Real-time monitoring dashboards'
        },
        {
          title: 'Expert Support',
          description: 'Dedicated SEO specialists'
        }
      ]
    },
    cta: {
      title: 'Propel Your Site to First Page',
      description: 'Join clients who multiplied their revenue with our SEO expertise.',
      primary_button: 'Get Free SEO Audit'
    }
  },
  maintenance_landing: {
    meta_title: 'Website Maintenance & Support - 24/7 Premium Service',
    meta_description: 'Professional website maintenance with enhanced security, automatic backups, and 24/7 support. Protect your digital investment.',
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
        '99.9% uptime guarantee'
      ],
      cta_primary: 'Protect My Site',
      cta_secondary: 'View Plans',
      image_alt: 'Professional website maintenance'
    },
    stats: [
      {
        number: '99.9%',
        title: 'Uptime',
        description: 'Guaranteed site availability'
      },
      {
        number: '2h',
        title: 'Response Time',
        description: 'Priority support resolution'
      },
      {
        number: '50+',
        title: 'Sites Maintained',
        description: 'Trusted by clients daily'
      }
    ],
    process: {
      title: 'Our Complete Maintenance Service',
      description: 'Proactive protection for optimal site performance',
      steps: [
        {
          title: 'Continuous Monitoring',
          description: '24/7 availability and security monitoring'
        },
        {
          title: 'Preventive Maintenance',
          description: 'Regular updates and proactive fixes'
        },
        {
          title: 'Priority Support',
          description: 'Immediate assistance when needed'
        },
        {
          title: 'Monthly Reports',
          description: 'Detailed performance reports'
        }
      ]
    },
    features: {
      title: 'Your Website in Total Security',
      description: 'Complete service for peace of mind and performance',
      items: [
        {
          title: 'Automatic Backups',
          description: 'Secure daily backups with one-click restore'
        },
        {
          title: 'Enhanced Security',
          description: 'Anti-malware protection and firewall'
        },
        {
          title: 'Performance Optimization',
          description: 'Speed monitoring and improvements'
        },
        {
          title: 'Regular Updates',
          description: 'CMS and plugins always up to date'
        },
        {
          title: 'Expert Support',
          description: 'Dedicated team available 7/7'
        },
        {
          title: 'Proactive Monitoring',
          description: 'Problem detection before impact'
        }
      ]
    },
    cta: {
      title: 'Protect Your Website Today',
      description: 'Avoid costly outages and focus on your business.',
      primary_button: 'Choose Maintenance Plan'
    }
  },
}
