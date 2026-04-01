import React from 'react';
import LegalLayout from './LegalLayout.jsx';

export default function TermsOfUse() {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="April 2026">
      <h2>1. Introduction</h2>
      <p>
        These Terms of Use govern your access to and use of calculations, features, and services 
        offered by Contextine Platform. By accessing or using our services, you agree to be bound 
        by these terms in their entirety.
      </p>

      <h2>2. Use of Service</h2>
      <p>
        You are granted a limited, non-exclusive right to access and use the service in accordance 
        with your subscription. You agree not to misuse the service or help anyone else to do so. 
        Any automated access, reverse engineering, or scraping is strictly prohibited.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        The service and its original content, features, and functionality are and will remain 
        the exclusive property of Contextine Platform. Our trademarks and trade dress may not 
        be used in connection with any product or service without prior written consent.
      </p>

      <h2>4. User Content</h2>
      <p>
        You maintain ownership of all data you upload to the platform. By uploading content, 
        you grant Contextine a worldwide, non-exclusive license to use, store, and process 
        the content solely for the purpose of providing the services.
      </p>

      <h2>5. Termination</h2>
      <p>
        We may terminate or suspend your access to the service immediately, without prior notice, 
        for any reason whatsoever, including without limitation if you breach the Terms.
      </p>
    </LegalLayout>
  );
}
