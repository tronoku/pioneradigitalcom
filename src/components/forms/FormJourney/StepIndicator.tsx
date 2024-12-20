import React from 'react';
import { Check } from 'lucide-react';
import { FORM_STEPS } from './constants';

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex justify-start mb-4 sm:mb-6 overflow-hidden px-2 sm:px-4">
      <div 
        className="flex items-center transition-all duration-300"
        style={{
          transform: `translateX(${currentStep > 0 ? `-${currentStep * 12}px` : '0px'})`
        }}
      >
        {FORM_STEPS.map((_, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isAfterCurrent = index > currentStep;
          
          // Show current step and next two steps on mobile
          const shouldShow = !isAfterCurrent || index <= currentStep + 2;
          
          return (
            <div 
              key={index} 
              className={`
                flex items-center transition-all duration-300
                ${isAfterCurrent && !shouldShow ? 'hidden sm:flex' : 'flex'}
                ${isAfterCurrent ? 'opacity-50' : 'opacity-100'}
              `}
            >
              <div
                className={`
                  w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                  transition-all duration-300 flex-shrink-0
                  ${isCompleted 
                    ? 'bg-green-500 text-white' 
                    : isCurrent 
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }
                `}
              >
                {isCompleted ? (
                  <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                ) : (
                  <span className="text-xs sm:text-base">{index + 1}</span>
                )}
              </div>
              {index < FORM_STEPS.length - 1 && shouldShow && (
                <div 
                  className={`
                    w-6 sm:w-12 h-1 mx-1.5 sm:mx-4
                    transition-all duration-300
                    ${index < currentStep ? 'bg-green-500' : 'bg-gray-200'}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}