import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | FADS Marketing Agency',
  description: 'Cookie policy of FADS marketing agency. Learn how we use cookies on our website.',
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">FADS Marketing Agency Cookie Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
        <p className="mb-4">
          Cookies help us enhance your browsing experience, analyze site usage, and assist in our marketing efforts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies for various purposes, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off.</li>
          <li><strong>Analytical/performance cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
          <li><strong>Functionality cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
          <li><strong>Targeting cookies:</strong> These record your visit to our website, the pages you have visited, and the links you have followed.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
        <p className="mb-4">
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.
        </p>
        <p className="mb-4">
          These include but are not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Google Analytics:</strong> To analyze how users use our website, track user behavior, and collect demographic information. Google Analytics uses cookies to collect information about how you use our website. This information helps us improve our website and services. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Learn more about Google Analytics privacy practices</a>.</li>
          
          <li><strong>Google Tag Manager:</strong> To manage and deploy marketing tags on our website without modifying the code. Google Tag Manager itself doesn&apos;t collect any personal information, but the tags it manages might. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Learn more about Google&apos;s privacy practices</a>.</li>
          
          <li><strong>HubSpot:</strong> For marketing automation, analytics, and customer relationship management. HubSpot uses cookies to track visitor interactions and provide personalized experiences. When you submit forms on our website, your information may be stored in our HubSpot CRM. <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer">Learn more about HubSpot&apos;s privacy practices</a>.</li>
          
          <li><strong>Stripe:</strong> For secure payment processing. Stripe uses cookies to prevent fraud, remember your payment preferences, and improve their services. When you make a payment, your payment information is processed directly by Stripe. We do not store your full payment details. <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Learn more about Stripe&apos;s privacy practices</a>.</li>
          
          <li><strong>Social Media:</strong> To enable you to share content on social media platforms and track the effectiveness of our social media campaigns.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
        <p className="mb-4">
          Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version.
        </p>
        <p className="mb-4">
          You can obtain up-to-date information about blocking and deleting cookies via these links:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
        <p className="mb-4">
          Please note that restricting cookies may impact the functionality of our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to Our Cookie Policy</h2>
        <p className="mb-4">
          We may update our Cookie Policy from time to time. Any changes will be posted on this page and, where appropriate, notified to you by email.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Cookie Policy, please contact us at:
        </p>
        <p className="mb-4">
          Email: info@fads.fi<br />
        </p>
      </section>
    </div>
  );
} 