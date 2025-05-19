import { ReactNode } from "react";

export interface Translation {
  products: {
    title: string;
    items: {
      name: string;
      description: string;
      price?: number;
      features?: string[];
    }[];
  };
  store: any;
  hero: {
    features: any;
    secondaryCta: ReactNode;
    title: string;
    subtitle: string;
    tagline: string;
    cta: string;
    ctaWhatsapp: string;
    ctaCall: string;
  };
  offers: {
    title: string;
    items: string[];
    quote: string;
    phone: string;
  };
  about: {
    title: string;
    content: string[];
    features: {
      certified: {
        title: string;
        description: string;
      };
      eco: {
        title: string;
        description: string;
      };
    };
  };
  whyUs: {
    title: string;
    description?: string;
    reasons: {
      title: string;
      description?: string;
    }[];
  };
  services: {
    title: string;
    pestControl: {
      title: string;
      description: string;
      items: string[];
    };
    cleaning: {
      title: string;
      description: string;
      items: string[];
    };
  };
  stats: {
    title: string;
    items: {
      value: string;
      label: string;
    }[];
  };
  testimonials: {
    title: string;
    items: {
      content: string;
      author: string;
    }[];
  };
  promotionPopup: {
    title: string;
    description: string;
    price: string;
    year: string;
    cta: string;
    company: string;
    features: {
      title: string;
      items: string[];
    };
  };
  partners: {
    title: string;
    description: string;
    cta: string;
    features: {
      certified: {
        title: string;
        description: string;
      };
      eco: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
    };
    names: string[];
  };
  contact: {
    title: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    emailValue: string;
    location: string;
    locationValue: string;
    website: string;
    websiteValue: string;
  };
  footer: {
    [x: string]: ReactNode;
    copyright: string;
    rights: string;
  };
}

export type Language = 'en' | 'ar';