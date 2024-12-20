import React from 'react';
import SEO from '../components/shared/SEO';
import PageHeader from '../components/shared/PageHeader';
import { caseStudies } from '../components/sections/CaseStudies/caseStudies.data';
import CaseStudyCard from '../components/sections/CaseStudies/CaseStudyCard';

export default function CaseStudiesPage() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Explore how we've helped our clients achieve their digital marketing goals"
        keywords="case studies, success stories, client results, digital marketing results"
        path="/case-studies"
      />
      <PageHeader
        title="Case Studies"
        description="Real results for real businesses"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </>
  );
}