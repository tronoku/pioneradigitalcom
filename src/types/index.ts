export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  results: {
    metric: string;
    value: string;
  }[];
  href: string;
}