import React, { useState } from 'react';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import SuccessMessage from './SuccessMessage';
import type { ContactFormData, FormState } from './types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({
      isSubmitting: false,
      isSubmitted: true,
      error: null,
    });
  };

  if (formState.isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        id="name"
        label="Name"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
        required
      />
      
      <FormInput
        id="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
        required
      />
      
      <FormInput
        id="message"
        type="textarea"
        label="Message"
        value={formData.message}
        onChange={(value) => setFormData({ ...formData, message: value })}
        required
      />

      <SubmitButton 
        isSubmitting={formState.isSubmitting}
        disabled={formState.isSubmitting}
      />
    </form>
  );
}