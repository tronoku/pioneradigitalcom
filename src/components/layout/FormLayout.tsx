import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

interface FormLayoutProps {
  children: React.ReactNode;
}

export default function FormLayout({ children }: FormLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-6 sm:py-8">
        <Link to="/" className="flex items-center justify-center space-x-2">
          <Rocket className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">PioneerDigital</span>
        </Link>
      </div>
      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        {children}
      </main>
    </div>
  );
}