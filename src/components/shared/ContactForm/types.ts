export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}