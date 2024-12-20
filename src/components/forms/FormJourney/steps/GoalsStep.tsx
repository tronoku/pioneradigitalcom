import React from 'react';
import { Check } from 'lucide-react';
import { GOALS_OPTIONS } from '../constants';

interface GoalsStepProps {
  selectedGoals: string[];
  onGoalsChange: (goals: string[]) => void;
}

export default function GoalsStep({ selectedGoals, onGoalsChange }: GoalsStepProps) {
  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      onGoalsChange(selectedGoals.filter(g => g !== goal));
    } else {
      onGoalsChange([...selectedGoals, goal]);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3 animate-fadeIn">
      {GOALS_OPTIONS.map((goal) => {
        const isSelected = selectedGoals.includes(goal);
        return (
          <button
            key={goal}
            type="button"
            onClick={() => toggleGoal(goal)}
            className={`
              p-3 sm:p-4 rounded-lg border-2 text-left w-full
              transition-all duration-200
              ${isSelected
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
              }
            `}
          >
            <div className="flex items-center">
              <div
                className={`
                  w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0
                  ${isSelected
                    ? 'border-indigo-600 bg-indigo-600'
                    : 'border-gray-300'
                  }
                `}
              >
                {isSelected && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className={`${isSelected ? 'text-indigo-900' : 'text-gray-700'} text-sm sm:text-base`}>
                {goal}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}