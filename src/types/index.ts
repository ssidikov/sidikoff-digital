

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  url?: string;
  technologies: string[];
  featured: boolean;
  completedAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LegalPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  lastUpdated: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}
