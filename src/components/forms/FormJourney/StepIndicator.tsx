import React from 'react';
import { Check } from 'lucide-react';
import { FORM_STEPS } from './constants';

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-center px-4 relative">
        {/* Connector lines */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200" />
        
        {/* Steps */}
        <div className="flex items-center justify-between relative w-full max-w-2xl">
          {FORM_STEPS.map((_, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full border-2 flex items-center justify-center
                    transition-all duration-300 z-10 bg-white
                    ${isCompleted || isCurrent
                      ? 'border-indigo-600 text-indigo-600' 
                      : 'border-gray-300 text-gray-400'
                    }
                    ${isCurrent ? 'ring-4 ring-indigo-100' : ''}
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}