import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Service } from '../../../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons];

  return (
    <div className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-25 transition-opacity" />
      <div className="relative">
        {Icon && <Icon className="h-8 w-8 text-indigo-600 mb-4" />}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link
          to={service.href}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}