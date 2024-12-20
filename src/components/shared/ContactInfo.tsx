import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants/company';

export default function ContactInfo() {
  const { address, contact } = COMPANY_INFO;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <MapPin className="h-6 w-6 text-indigo-600 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-gray-900">Office</h3>
          <p className="text-gray-600">{fullAddress}</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="h-6 w-6 text-indigo-600 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-gray-900">Phone</h3>
          <p className="text-gray-600">{contact.phone}</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Mail className="h-6 w-6 text-indigo-600 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-gray-900">Email</h3>
          <p className="text-gray-600">{contact.email}</p>
        </div>
      </div>
    </div>
  );
}