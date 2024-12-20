import React from 'react';

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <div className="space-y-8 mt-12">
      <h2 className="text-2xl font-bold text-gray-900">Our Process</h2>
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="relative pb-12 last:pb-0">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  {index + 1}
                </span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}