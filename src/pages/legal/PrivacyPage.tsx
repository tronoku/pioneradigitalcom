import React from 'react';
import SEO from '../../components/shared/SEO';
import PageHeader from '../../components/shared/PageHeader';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for PioneerDigital's website and services"
        keywords="privacy policy, data protection, privacy"
        path="/privacy"
      />
      <PageHeader 
        title="Privacy Policy" 
        description="How we collect, use, and protect your data"
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-indigo max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including when you
            fill out a form, subscribe to our newsletter, or communicate with us.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            to communicate with you, and to develop new services.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable
            information to third parties. This does not include trusted third parties who
            assist us in operating our website or servicing you.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to maintain the
            security of your personal information and protect it against unauthorized or
            unlawful processing and against accidental loss, destruction, or damage.
          </p>
        </div>
      </div>
    </>
  );
}