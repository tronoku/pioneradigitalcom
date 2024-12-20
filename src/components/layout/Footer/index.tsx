import React from 'react';
import { Rocket } from 'lucide-react';
import FooterLink from './FooterLink';
import FooterContact from './FooterContact';
import { COMPANY_INFO } from '../../../utils/constants/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">{COMPANY_INFO.name}</span>
            </div>
            <p className="mt-4 text-gray-500">
              Transform your digital presence with cutting-edge marketing strategies. 
              We help businesses grow through innovative digital solutions.
            </p>
            <FooterContact />
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Services</h3>
            <div className="mt-4 space-y-3">
              <div><FooterLink to="/services/ppc-marketing">PPC Marketing</FooterLink></div>
              <div><FooterLink to="/services/pr-strategy">PR Strategy</FooterLink></div>
              <div><FooterLink to="/services/social-media">Social Media</FooterLink></div>
              <div><FooterLink to="/services/content-marketing">Content Marketing</FooterLink></div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <div className="mt-4 space-y-3">
              <div><FooterLink to="/about">About</FooterLink></div>
              <div><FooterLink to="/case-studies">Case Studies</FooterLink></div>
              <div><FooterLink to="/contact">Contact</FooterLink></div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h3>
            <div className="mt-4 space-y-3">
              <div><FooterLink to="/terms">Terms of Service</FooterLink></div>
              <div><FooterLink to="/privacy">Privacy Policy</FooterLink></div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}