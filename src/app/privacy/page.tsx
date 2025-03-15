import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FADS Marketing Agency',
  description: 'Privacy policy of FADS marketing agency. Learn how we process and protect your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">FADS Marketing Agency Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">General</h2>
        <p className="mb-4">
          Your trust and privacy are our priorities. We strive for transparency in the processing of personal data and provide the opportunity for clients to influence their usage. This policy describes how FADS agency processes clients&apos; personal data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Controller and Contact Information</h2>
        <p className="mb-4">
          The controller of the processed personal data is:
        </p>
        <p className="mb-4">
          FADS<br />
          VAT ID: FI33641998<br />
          Email: <a href="mailto:info@fads.fi" className="text-blue-600">info@fads.fi</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What information about me may be processed, and where does it come from?</h2>
        <p className="mb-4">
          We process:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name, phone number, email address;</li>
          <li>IP address, cookie data, site visit data;</li>
          <li>Company information (if applicable);</li>
          <li>Data provided by you when using services or placing orders.</li>
        </ul>
        <p className="mb-4">
          Information is collected directly from clients during registration, inquiries, order placements, website usage, and analysis of user behavior on the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">For what purposes is my personal data used, and on what basis?</h2>
        <p className="mb-4">
          Personal data is used to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide marketing services and process orders;</li>
          <li>Ensure easy and secure website usage;</li>
          <li>Improve recommendations and personalize content;</li>
          <li>Perform analytics and improve service quality;</li>
          <li>Fulfill legal obligations.</li>
        </ul>
        <p className="mb-4">
          Data processing is based on contracts, client consent, legitimate interests of the agency, and legal obligations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How is my information stored and protected?</h2>
        <p className="mb-4">
          Your data is stored in secure data centers within the EU. We employ technical and organizational measures to protect personal data in compliance with GDPR.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How long will my data be stored?</h2>
        <p className="mb-4">
          Your data will be stored only as long as necessary to fulfill processing purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Client data is stored for the duration of the contract and up to 2 years after its termination.</li>
          <li>Information related to marketing campaigns is stored until consent is withdrawn or for 3 years from the last interaction.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What rights do I have?</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Request access to your data;</li>
          <li>Correct inaccurate or incomplete data;</li>
          <li>Request data deletion;</li>
          <li>Restrict or object to data processing;</li>
          <li>Transfer data to another controller;</li>
          <li>Withdraw consent at any time;</li>
          <li>File a complaint with a data protection authority.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How can I influence the use of my data?</h2>
        <p className="mb-4">
          You can manage your data usage by contacting us via email: <a href="mailto:info@fads.fi" className="text-blue-600">info@fads.fi</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Will my personal data be disclosed to third parties?</h2>
        <p className="mb-4">
          We may transfer data to third parties to provide services (e.g., analytics, marketing, order delivery). All partners receiving data are obligated to maintain confidentiality and comply with GDPR requirements. Data may also be disclosed to authorities in cases stipulated by law.
        </p>
        <p className="mb-4">
          Specifically, we use the following third-party services:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Stripe</strong> - For secure payment processing. When you make a payment, your payment information is processed directly by Stripe. We do not store your full payment details. For more information, please see <a href="https://stripe.com/privacy" className="text-blue-600" target="_blank" rel="noopener noreferrer">Stripe&apos;s Privacy Policy</a>.</li>
          <li><strong>HubSpot</strong> - For customer relationship management (CRM) and marketing. When you submit forms on our website, your information may be stored in our HubSpot CRM. For more information, please see <a href="https://legal.hubspot.com/privacy-policy" className="text-blue-600" target="_blank" rel="noopener noreferrer">HubSpot&apos;s Privacy Policy</a>.</li>
          <li><strong>Google Analytics</strong> - For website analytics and performance monitoring. This service uses cookies to collect information about how you use our website. For more information, please see <a href="https://policies.google.com/privacy" className="text-blue-600" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
          <li><strong>Google Tag Manager</strong> - For managing and deploying marketing tags on our website. For more information, please see <a href="https://policies.google.com/privacy" className="text-blue-600" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Do the agency&apos;s websites use cookies, and what are they?</h2>
        <p className="mb-4">
          We use cookies and similar technologies to ensure website functionality, personalize content, conduct analytics, and targeted advertising. You can manage cookie settings through your browser.
        </p>
        <p className="mb-4">
          Our website uses the following types of cookies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Essential cookies</strong> - These are necessary for the website to function properly and cannot be turned off.</li>
          <li><strong>Analytics cookies</strong> - These help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics for this purpose.</li>
          <li><strong>Marketing cookies</strong> - These are used to track visitors across websites. We use HubSpot and Google Tag Manager to deliver more relevant advertisements and to analyze the effectiveness of our marketing campaigns.</li>
          <li><strong>Functional cookies</strong> - These enable enhanced functionality and personalization on our website.</li>
        </ul>
        <p className="mb-4">
          Third-party services like Stripe, HubSpot, Google Analytics, and Google Tag Manager may also set their own cookies when you use our website. Please refer to their respective privacy policies for more information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Can this privacy policy be changed?</h2>
        <p className="mb-4">
          We regularly update this privacy policy due to service developments or legislative changes. Clients will be notified of significant changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who can I contact?</h2>
        <p className="mb-4">
          For questions regarding privacy, personal data processing, or this privacy policy, contact us at: <a href="mailto:info@fads.fi" className="text-blue-600">info@fads.fi</a>.
        </p>
      </section>
    </div>
  );
} 