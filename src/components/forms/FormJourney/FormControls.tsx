import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface FormControlsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  isValid: boolean;
}

export default function FormControls({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  isValid,
}: FormControlsProps) {
  return (
    <div className="flex justify-between mt-6 sm:mt-8">
      {currentStep > 0 && (
        <button
          type="button"
          onClick={onBack}
          className="flex items-center px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span className="text-sm sm:text-base">Back</span>
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={!isValid}
        className={`
          flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base
          ${currentStep === 0 ? 'mx-auto' : 'ml-auto'}
          ${isValid
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
          transition-all duration-200
        `}
      >
        <span>{currentStep === totalSteps - 1 ? 'Submit' : 'Next'}</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
      </button>
    </div>
  );
}