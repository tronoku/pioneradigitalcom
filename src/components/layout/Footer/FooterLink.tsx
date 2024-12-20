import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <Link 
      to={to} 
      className="text-gray-500 hover:text-indigo-600 transition-colors"
    >
      {children}
    </Link>
  );
}