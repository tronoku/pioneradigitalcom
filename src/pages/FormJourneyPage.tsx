import React from 'react';
import FormLayout from '../components/layout/FormLayout';
import FormJourney from '../components/forms/FormJourney';
import SEO from '../components/shared/SEO';

export default function FormJourneyPage() {
  return (
    <FormLayout>
      <SEO
        title="Get Started"
        description="Start your digital transformation journey with PioneerDigital"
        keywords="contact, get started, digital marketing"
        path="/get-started"
      />
      <FormJourney />
    </FormLayout>
  );
}