import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  path: string;
}

export default function SEO({ title, description, keywords, image, path }: SEOProps) {
  const siteUrl = 'https://pioneerdigital.com'; // Replace with actual domain
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = '/images/seo/default-og.jpg'; // Updated to use local image

  return (
    <Helmet>
      <title>{`${title} | PioneerDigital`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}