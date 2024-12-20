import React from 'react';
import SEO from '../components/shared/SEO';
import PageHeader from '../components/shared/PageHeader';
import { IMAGES } from '../utils/constants/images';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about our mission, values, and the team behind PioneerDigital's success."
        keywords="about us, digital marketing team, company values, mission"
        path="/about"
      />
      <div className="bg-white">
        <PageHeader
          title="About Us"
          description="We're a team of digital marketing experts passionate about helping businesses grow."
        />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At PioneerDigital, we're committed to transforming businesses through innovative digital marketing strategies. Our approach combines data-driven insights with creative excellence to deliver exceptional results for our clients.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We believe in transparency, continuous innovation, and building lasting partnerships with our clients. Our team of experts stays ahead of industry trends to ensure your business maintains a competitive edge in the digital landscape.
              </p>
            </div>
            <div>
              <img
                src={IMAGES.TEAM.WORKING}
                alt="Our team collaborating"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}