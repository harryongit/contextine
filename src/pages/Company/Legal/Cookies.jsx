import React from 'react';
import LegalLayout from './LegalLayout.jsx';

export default function Cookies() {
  return (
    <LegalLayout title="Cookies Policy" lastUpdated="April 2026">
      <h2>1. Cookies at Contextine</h2>
      <p>
        We use cookies and similar technologies (like local storage) to provide a better 
        user experience, identify you within our platform, and analyze our traffic.
      </p>

      <h2>2. What are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device when you visit our 
        website. They help us remember your login sessions and preferences.
      </p>

      <h2>3. Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential Cookies:</strong> Required to access and use our platform (e.g., login security).</li>
        <li><strong>Stat/Analytical Cookies:</strong> Help us understand how visitors use the site (e.g., Google Analytics).</li>
        <li><strong>Preference Cookies:</strong> Remember your choices (e.g., dark mode settings).</li>
        <li><strong>Marketing Cookies:</strong> Help us show you more relevant advertisements on third-party sites.</li>
      </ul>

      <h2>4. Managing Your Cookies</h2>
      <p>
        You can disable cookies entirely within your browser settings. However, please note 
        that many parts of the Contextine platform will cease to function properly without them.
      </p>

      <h2>5. Cookie Updates</h2>
      <p>
        We may update this policy periodically to reflect changes in our technology or 
        legal requirements.
      </p>
    </LegalLayout>
  );
}
