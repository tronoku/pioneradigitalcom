import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../components/sections/Services/services.data';
import SEO from '../components/shared/SEO';
import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/shared/ContactForm';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServiceProcess from '../components/services/ServiceProcess';
import { ppcMarketingDetails } from '../data/services/ppc-marketing';

export default function ServicePage() {
  const { id } = useParams();
  const service = services.find((s) => s.href === `/services/${id}`);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // For now, we'll use PPC marketing details for all services
  const serviceDetails = service.details || ppcMarketingDetails;

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
        keywords={`${service.title.toLowerCase()}, digital marketing, pioneer digital`}
        path={service.href}
      />
      <PageHeader title={service.title} description={service.description} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ServiceFeatures features={serviceDetails.features} />
            <ServiceProcess steps={serviceDetails.process} />
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}