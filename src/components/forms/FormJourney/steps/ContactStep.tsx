import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../../shared/ContactForm/FormInput';

interface ContactStepProps {
  name: string;
  email: string;
  marketingConsent: boolean;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onMarketingConsentChange: (value: boolean) => void;
}

export default function ContactStep({
  name,
  email,
  marketingConsent,
  onNameChange,
  onEmailChange,
  onMarketingConsentChange,
}: ContactStepProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <FormInput
        id="name"
        label="Your Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <FormInput
        id="email"
        type="email"
        label="Email Address"
        value={email}
        onChange={onEmailChange}
        required
      />
      
      <div className="space-y-4">
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => onMarketingConsentChange(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-sm text-gray-600">
            I agree to receive marketing emails from PioneerDigital. You can unsubscribe at any time.
          </span>
        </label>

        <p className="text-sm text-gray-500">
          By continuing, you agree to our{' '}
          <Link to="/terms" className="text-indigo-600 hover:text-indigo-700" target="_blank">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-indigo-600 hover:text-indigo-700" target="_blank">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}