import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from './caseStudies.data';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-indigo-600">{study.industry}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{study.title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{study.description}</p>
        <div className="mt-4">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Services: </span>
            {study.services.join(', ')}
          </div>
          <div className="mt-2 text-sm text-gray-600">
            <span className="font-medium">Key Result: </span>
            {study.results[0]}
          </div>
        </div>
        <Link
          to={study.href}
          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}