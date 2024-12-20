import React from 'react';
import SEO from '../../components/shared/SEO';
import PageHeader from '../../components/shared/PageHeader';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for PioneerDigital's website and services"
        keywords="terms of service, legal, terms and conditions"
        path="/terms"
      />
      <PageHeader 
        title="Terms of Service" 
        description="Please read these terms carefully before using our services"
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-indigo max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information
            or software) on PioneerDigital's website for personal, non-commercial transitory viewing only.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on PioneerDigital's website are provided on an 'as is' basis.
            PioneerDigital makes no warranties, expressed or implied, and hereby disclaims
            and negates all other warranties including, without limitation, implied warranties
            or conditions of merchantability, fitness for a particular purpose, or non-infringement
            of intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall PioneerDigital or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or due to
            business interruption) arising out of the use or inability to use the materials
            on PioneerDigital's website.
          </p>
        </div>
      </div>
    </>
  );
}