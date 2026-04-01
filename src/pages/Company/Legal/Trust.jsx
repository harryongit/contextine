import React from 'react';
import LegalLayout from './LegalLayout.jsx';

export default function Trust() {
  return (
    <LegalLayout title="Trust & Security" lastUpdated="April 2026">
      <h2>Our Security Promise</h2>
      <p>
        At Contextine, trust is our most valuable asset. We’ve built our platform from the ground up with 
        uncompromising security and privacy at its core. Whether you’re a startup or an enterprise, 
        our commitment to protecting your data is unwavering.
      </p>
      
      <h3>Data Encryption</h3>
      <p>
        All data is encrypted both in transit and at rest using industry-standard AES-256 and TLS 1.3 encryption protocols. 
        We use zero-trust architecture to ensure that your sensitive information remains secure throughout the entire lifecycle.
      </p>
      
      <h3>Global Compliance</h3>
      <p>
        We are SOC 2 Type II certified and maintain constant alignment with ISO 27001, GDPR, and HIPAA standards. 
        Our continuous monitoring engine ensures that no control lapses go unnoticed, providing you with real-time audit readiness.
      </p>

      <h3>Infrastructure Security</h3>
      <p>
        We partner with world-class cloud providers (AWS and GCP) who maintain highest level physical and logical security standards. 
        Our systems are subject to regular third-party penetration tests and vulnerability scans.
      </p>
    </LegalLayout>
  );
}
