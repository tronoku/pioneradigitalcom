import React from 'react';
import { Loader2, Send } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  disabled?: boolean;
}

export default function SubmitButton({ isSubmitting, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting || disabled}
      className="
        w-full flex justify-center items-center py-3 px-6
        border border-transparent rounded-lg shadow-sm
        text-base font-medium text-white
        bg-gradient-to-r from-indigo-600 to-indigo-700
        hover:from-indigo-700 hover:to-indigo-800
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
      "
    >
      {isSubmitting ? (
        <>
          <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </>
      )}
    </button>
  );
}