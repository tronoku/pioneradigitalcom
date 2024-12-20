export const FORM_STEPS = [
  {
    id: 'intro',
    title: "Let's Transform Your Digital Presence",
    description: "We'll help you create a tailored digital strategy. It only takes a few minutes.",
  },
  {
    id: 'business',
    title: 'Tell Us About Your Business',
    description: 'Help us understand your business better.',
  },
  {
    id: 'goals',
    title: 'Your Goals',
    description: 'What are you looking to achieve?',
  },
  {
    id: 'budget',
    title: 'Investment & Timeline',
    description: 'Help us understand your budget and timeline expectations.',
  },
  {
    id: 'contact',
    title: 'Almost There',
    description: 'How can we reach you?',
  },
] as const;

export const GOALS_OPTIONS = [
  'Increase Brand Awareness',
  'Generate More Leads',
  'Improve Online Sales',
  'Enhance Social Media Presence',
  'Better Search Engine Rankings',
  'Launch New Product/Service',
] as const;

export const BUDGET_OPTIONS = [
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
] as const;

export const TIMELINE_OPTIONS = [
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
] as const;