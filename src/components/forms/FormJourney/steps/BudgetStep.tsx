import React from 'react';
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from '../constants';

interface BudgetStepProps {
  budget: string;
  timeline: string;
  onBudgetChange: (value: string) => void;
  onTimelineChange: (value: string) => void;
}

export default function BudgetStep({
  budget,
  timeline,
  onBudgetChange,
  onTimelineChange,
}: BudgetStepProps) {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      <div>
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
          What's your monthly budget?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {BUDGET_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onBudgetChange(option)}
              className={`
                p-3 sm:p-4 rounded-lg border-2 text-center
                transition-all duration-200
                ${budget === option
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                  : 'border-gray-200 text-gray-700 hover:border-indigo-200'
                }
              `}
            >
              <span className="text-sm sm:text-base">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
          When would you like to start?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {TIMELINE_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onTimelineChange(option)}
              className={`
                p-3 sm:p-4 rounded-lg border-2 text-center
                transition-all duration-200
                ${timeline === option
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                  : 'border-gray-200 text-gray-700 hover:border-indigo-200'
                }
              `}
            >
              <span className="text-sm sm:text-base">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}