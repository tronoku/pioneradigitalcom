import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './services.data';

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.href} service={service} />
      ))}
    </div>
  );
}