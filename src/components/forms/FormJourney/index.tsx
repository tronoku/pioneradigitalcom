import React, { useState } from 'react';
import { FORM_STEPS } from './constants';
import StepIndicator from './StepIndicator';
import FormControls from './FormControls';
import BusinessStep from './steps/BusinessStep';
import GoalsStep from './steps/GoalsStep';
import BudgetStep from './steps/BudgetStep';
import ContactStep from './steps/ContactStep';
import SuccessMessage from '../../shared/ContactForm/SuccessMessage';
import type { FormData } from './types';

export default function FormJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    industry: '',
    goals: [],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    marketingConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep === FORM_STEPS.length - 1) {
      setIsSubmitted(true);
      return;
    }
    setDirection('forward');
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection('back');
    setCurrentStep((prev) => prev - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return true;
      case 1:
        return formData.businessName.trim() !== '' && formData.industry.trim() !== '';
      case 2:
        return formData.goals.length > 0;
      case 3:
        return formData.budget !== '' && formData.timeline !== '';
      case 4:
        return formData.name.trim() !== '' && formData.email.trim() !== '';
      default:
        return false;
    }
  };

  const renderStep = () => {
    const animationClass = direction === 'forward' ? 'animate-slideLeft' : 'animate-slideRight';

    switch (currentStep) {
      case 1:
        return (
          <div className={animationClass}>
            <BusinessStep
              businessName={formData.businessName}
              industry={formData.industry}
              onBusinessNameChange={(value) => setFormData({ ...formData, businessName: value })}
              onIndustryChange={(value) => setFormData({ ...formData, industry: value })}
            />
          </div>
        );
      case 2:
        return (
          <div className={animationClass}>
            <GoalsStep
              selectedGoals={formData.goals}
              onGoalsChange={(goals) => setFormData({ ...formData, goals })}
            />
          </div>
        );
      case 3:
        return (
          <div className={animationClass}>
            <BudgetStep
              budget={formData.budget}
              timeline={formData.timeline}
              onBudgetChange={(value) => setFormData({ ...formData, budget: value })}
              onTimelineChange={(value) => setFormData({ ...formData, timeline: value })}
            />
          </div>
        );
      case 4:
        return (
          <div className={animationClass}>
            <ContactStep
              name={formData.name}
              email={formData.email}
              marketingConsent={formData.marketingConsent}
              onNameChange={(value) => setFormData({ ...formData, name: value })}
              onEmailChange={(value) => setFormData({ ...formData, email: value })}
              onMarketingConsentChange={(value) => setFormData({ ...formData, marketingConsent: value })}
            />
          </div>
        );
      default:
        return (
          <div className="animate-fadeIn text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {FORM_STEPS[0].title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {FORM_STEPS[0].description}
            </p>
          </div>
        );
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <StepIndicator currentStep={currentStep} />
      
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            {FORM_STEPS[currentStep].title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {FORM_STEPS[currentStep].description}
          </p>
        </div>

        {renderStep()}

        <FormControls
          currentStep={currentStep}
          totalSteps={FORM_STEPS.length}
          onNext={handleNext}
          onBack={handleBack}
          isValid={isStepValid()}
        />
      </div>
    </div>
  );
}