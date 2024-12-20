export interface Feature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceDetails {
  features: Feature[];
  process: ProcessStep[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
  details?: ServiceDetails;
}