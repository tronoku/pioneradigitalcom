import React from 'react';
import FormInput from '../../../shared/ContactForm/FormInput';

interface BusinessStepProps {
  businessName: string;
  industry: string;
  onBusinessNameChange: (value: string) => void;
  onIndustryChange: (value: string) => void;
}

export default function BusinessStep({
  businessName,
  industry,
  onBusinessNameChange,
  onIndustryChange,
}: BusinessStepProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <FormInput
        id="businessName"
        label="Business Name"
        value={businessName}
        onChange={onBusinessNameChange}
        required
      />
      <FormInput
        id="industry"
        label="Industry"
        value={industry}
        onChange={onIndustryChange}
        required
      />
    </div>
  );
}