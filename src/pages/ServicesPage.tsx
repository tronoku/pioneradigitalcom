import React from 'react';
import SEO from '../components/shared/SEO';
import PageHeader from '../components/shared/PageHeader';
import ServicesGrid from '../components/sections/Services/ServicesGrid';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive digital marketing solutions tailored to your business needs"
        keywords="digital marketing, PPC, PR, social media, content marketing, SEO"
        path="/services"
      />
      <PageHeader
        title="Our Services"
        description="Comprehensive digital marketing solutions tailored to your business needs"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServicesGrid />
      </div>
    </>
  );
}