import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

export default function SuccessMessage() {
  return (
    <div className="text-center py-12 px-4">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-green-100 p-4">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Thank You!
      </h3>
      <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
        We've received your message and will get back to you within 24 hours.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
      >
        <Home className="mr-2 h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}