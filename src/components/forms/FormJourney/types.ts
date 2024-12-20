export interface FormStep {
  id: string;
  title: string;
  description: string;
}

export interface FormData {
  businessName: string;
  industry: string;
  goals: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  marketingConsent: boolean;
}

export type StepId = 'intro' | 'business' | 'goals' | 'budget' | 'contact' | 'success';