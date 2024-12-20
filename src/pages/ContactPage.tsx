import React from 'react';
import SEO from '../components/shared/SEO';
import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/shared/ContactForm/index';
import ContactInfo from '../components/shared/ContactInfo';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with PioneerDigital for your digital marketing needs"
        keywords="contact, digital marketing, get in touch"
        path="/contact"
      />
      <PageHeader
        title="Contact Us"
        description="Let's discuss how we can help transform your digital presence"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <ContactInfo />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}