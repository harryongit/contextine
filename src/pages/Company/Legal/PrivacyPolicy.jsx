import React from 'react';
import LegalLayout from './LegalLayout.jsx';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 2026">
      <h2>1. Your Privacy is Paramount</h2>
      <p>
        At Contextine, we are committed to being transparent about how we collect, use, 
        and protect your personal data. This policy explains our practices in plain English.
      </p>

      <h2>2. What We Collect</h2>
      <p>
        We collect data necessary to provide a high-quality GRC experience, including but 
        not limited to:
      </p>
      <ul>
        <li>Account Information (name, email, job title)</li>
        <li>System Usage Statistics</li>
        <li>Integration Metadata</li>
        <li>Communication History</li>
      </ul>

      <h2>3. How We Use Data</h2>
      <p>
        Data is primarily used to provide, maintain, and improve our services. We also use 
        aggregated, anonymized data for research to enhance our security automation algorithms.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        We never sell your data. We only share data with trusted third-party service providers 
        (e.g., AWS, Stripe) necessary to operate our business, or as required by law.
      </p>

      <h2>5. Your Rights (GDPR/CCPA)</h2>
      <p>
        You have the right to access, rectify, or delete your personal data at any time. 
        Please contact our Data Protection Officer (DPO) for any such requests.
      </p>

      <h2>6. Security Measures</h2>
      <p>
        We employ technical and organizational measures including encryption, access controls, 
        and regular security audits to safeguard your information.
      </p>
    </LegalLayout>
  );
}
