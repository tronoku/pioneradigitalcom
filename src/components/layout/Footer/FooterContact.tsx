import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../../utils/constants/company';

export default function FooterContact() {
  const { address, contact } = COMPANY_INFO;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className="mt-6 space-y-2">
      <div className="flex items-center space-x-3 text-gray-500">
        <Mail className="h-5 w-5" />
        <span>{contact.email}</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-500">
        <Phone className="h-5 w-5" />
        <span>{contact.phone}</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-500">
        <MapPin className="h-5 w-5" />
        <span>{fullAddress}</span>
      </div>
    </div>
  );
}