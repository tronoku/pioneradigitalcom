import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export default function FormInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  disabled = false,
  error,
}: FormInputProps) {
  const baseClasses = `
    mt-1 block w-full rounded-lg border shadow-sm px-4 py-3
    ${error 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
    }
    disabled:bg-gray-50 disabled:text-gray-500
    transition-colors duration-200
    text-base
  `;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={`${baseClasses} resize-none`}
          required={required}
          disabled={disabled}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      );
    }

    return (
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={baseClasses}
        required={required}
        disabled={disabled}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    );
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {renderInput()}
      {error && (
        <div className="mt-2 flex items-center text-sm text-red-600">
          <AlertCircle className="h-4 w-4 mr-1" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}