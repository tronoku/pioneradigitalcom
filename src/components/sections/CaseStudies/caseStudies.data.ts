import { IMAGES } from '../../../utils/constants/images';

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  results: string[];
  industry: string;
  services: string[];
  href: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ppc-saas-growth',
    title: 'SaaS PPC Campaign Optimization',
    description: 'How we optimized PPC campaigns for a B2B SaaS platform, resulting in a significant reduction in CAC and improved ROI.',
    image: IMAGES.CASE_STUDIES.PPC_SAAS,
    results: [
      '65% reduction in customer acquisition cost',
      '185% increase in qualified leads',
      '250% improvement in PPC conversion rate',
    ],
    industry: 'SaaS',
    services: ['PPC Marketing', 'Conversion Optimization', 'Analytics & Reporting'],
    href: '/case-studies/ppc-saas-growth',
  },
  {
    id: 'ppc-finance',
    title: 'Financial Services PPC Success',
    description: 'Scaling PPC campaigns for a fintech company while maintaining efficient cost per acquisition across multiple markets.',
    image: IMAGES.CASE_STUDIES.PPC_FINANCE,
    results: [
      '320% increase in qualified applications',
      '45% reduction in cost per lead',
      '155% improvement in ad quality scores',
    ],
    industry: 'Financial Services',
    services: ['PPC Marketing', 'Market Expansion', 'Lead Generation'],
    href: '/case-studies/ppc-finance',
  },
  {
    id: 'ppc-real-estate',
    title: 'Real Estate PPC Campaign',
    description: 'Developing and scaling targeted PPC campaigns for a real estate agency across multiple cities.',
    image: IMAGES.CASE_STUDIES.PPC_REAL_ESTATE,
    results: [
      '275% increase in property inquiries',
      '40% lower cost per conversion',
      '180% improvement in lead quality',
    ],
    industry: 'Real Estate',
    services: ['PPC Marketing', 'Geographic Targeting', 'Lead Qualification'],
    href: '/case-studies/ppc-real-estate',
  },
  {
    id: 'tech-startup',
    title: 'Tech Startup Growth',
    description: 'How we helped a SaaS startup achieve 300% growth in user acquisition through targeted digital marketing.',
    image: IMAGES.CASE_STUDIES.TECH_STARTUP,
    results: [
      '300% increase in user acquisition',
      '250% boost in organic traffic',
      '45% reduction in customer acquisition cost',
    ],
    industry: 'Technology',
    services: ['PPC Marketing', 'Content Strategy', 'SEO Optimization'],
    href: '/case-studies/tech-startup',
  },
  {
    id: 'retail-brand',
    title: 'Retail Brand Transformation',
    description: 'Transforming a traditional retail brand into a digital-first shopping destination.',
    image: IMAGES.CASE_STUDIES.RETAIL_BRAND,
    results: [
      '200% increase in online sales',
      '150% growth in social media engagement',
      '80% improvement in brand recognition',
    ],
    industry: 'Retail',
    services: ['Social Media Marketing', 'PR Strategy', 'Brand Development'],
    href: '/case-studies/retail-brand',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Success Story',
    description: 'Scaling an e-commerce platform to reach new markets and achieve record-breaking sales.',
    image: IMAGES.CASE_STUDIES.ECOMMERCE,
    results: [
      '400% increase in monthly revenue',
      '350% growth in customer base',
      '65% improvement in customer retention',
    ],
    industry: 'E-commerce',
    services: ['PPC Marketing', 'Email Marketing', 'Analytics & Reporting'],
    href: '/case-studies/ecommerce',
  },
];