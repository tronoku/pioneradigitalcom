import React from 'react';
import SEO from '../components/shared/SEO';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import CaseStudies from '../components/sections/CaseStudies';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Transform Your Digital Presence"
        description="Elevate your brand with cutting-edge digital marketing strategies. We specialize in PR and PPC campaigns that drive real results for your business."
        keywords="digital marketing, PPC, PR, social media, content marketing, SEO"
        path="/"
      />
      <Hero />
      <Services />
      <CaseStudies />
    </>
  );
}