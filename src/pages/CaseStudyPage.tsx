import React, { Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { caseStudies } from '../components/sections/CaseStudies/caseStudies.data';
import SEO from '../components/shared/SEO';
import PageHeader from '../components/shared/PageHeader';
import PageLoading from '../components/shared/PageLoading';
import { ArrowRight } from 'lucide-react';

export default function CaseStudyPage() {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={study.title}
        description={study.description}
        keywords={`case study, ${study.industry.toLowerCase()}, success story`}
        path={study.href}
        image={study.image}
      />
      <PageHeader title={study.title} description={study.description} />
      
      <Suspense fallback={<PageLoading />}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {study.results.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg font-bold text-indigo-600">{result}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-indigo max-w-none">
            <h2>Industry</h2>
            <p className="text-gray-600">{study.industry}</p>

            <h2>Services</h2>
            <ul className="list-disc pl-4 text-gray-600">
              {study.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>

            <h2>Challenge & Solution</h2>
            <p className="text-gray-600">
              {study.description}
            </p>

            <h2>Results</h2>
            <ul className="list-disc pl-4 text-gray-600">
              {study.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border-t pt-8">
            <a href="/case-studies" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
              <ArrowRight className="mr-2 h-4 w-4" />
              View More Case Studies
            </a>
          </div>
        </div>
      </Suspense>
    </>
  );
}