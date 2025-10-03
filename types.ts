import React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface Feature {
  icon: React.ReactElement;
  title: string;
}

export interface PriceTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  primary?: boolean;
}

export interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
