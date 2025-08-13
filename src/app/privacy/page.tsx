import React from 'react';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-4 font-playfair">Privacy Policy</h1>
          <p className="text-gray-600">Effective Date: August 12, 2025</p>
        </div>

        <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <div className="space-y-4 text-gray-700">
              <p>At Navigating the Storm ("we," "us," or "our"), your privacy is important to us. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our services, website, or communicate with us.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">1. What Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, contact details, and scheduling preferences.</li>
                <li><strong>Session Information:</strong> Notes and goals discussed during coaching sessions.</li>
                <li><strong>Platform Usage:</strong> Usage data collected from tools like Notion or Zoom used to deliver services.</li>
                <li><strong>Payment Information:</strong> Billing details via our third-party payment processors (we do not store your credit card data directly).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">2. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and manage coaching services</li>
                <li>Schedule sessions and manage your Notion dashboard</li>
                <li>Communicate with you via email</li>
                <li>Process payments and manage subscriptions</li>
                <li>Improve our services and user experience</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">3. How We Share Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>We do not sell your personal information. We only share it:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>With service providers such as payment processors (e.g., Stripe), scheduling platforms (e.g., Calendly), and collaboration tools (e.g., Notion, Zoom). These providers have their own privacy practices.</li>
                <li>As required by law or to protect rights, safety, or property</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">4. Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement reasonable security measures to protect your personal data. However, no method of transmission over the internet or storage system is completely secure. By using our services, you accept these risks.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">5. Your Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>Depending on your location, you may have rights to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request corrections or deletion of your data</li>
                <li>Object to or restrict certain types of processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>Most of the personal information you provide is stored within your individual Notion dashboard, which you can access, review, and manage directly. If you wish to make changes, request deletion, or withdraw consent to how your data is used within our systems or services, please contact us at: <a href="mailto:marlie@navcoaching.org" className="text-tealblue hover:text-navy underline">marlie@navcoaching.org</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">6. Data Retention</h2>
            <div className="space-y-4 text-gray-700">
              <p>We retain personal information for as long as necessary to provide our services or as required by law. You may request deletion of your data at any time.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">7. Children's Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our services are not intended for children under 13. We do not knowingly collect data from children.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">8. Changes to This Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you via email or on our website.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">9. Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>If you have questions or concerns, contact us at:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Navigating the Storm</strong></p>
                <p><strong>Email:</strong> <a href="mailto:marlie@navcoaching.org" className="text-tealblue hover:text-navy">marlie@navcoaching.org</a></p>
              </div>
            </div>
          </section>

          <section className="bg-freshaqua/10 p-6 rounded-lg border border-freshaqua/30">
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Questions?</h2>
            <p className="text-gray-700 mb-4">
              We believe in transparency and want you to feel comfortable with how we handle your data. If you have any questions or concerns about this Privacy Policy, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-freshaqua text-navy font-bold rounded-lg shadow hover:bg-tealblue hover:text-white transition text-center"
              >
                Contact Us
              </Link>
              <Link 
                href="/" 
                className="inline-block px-6 py-3 bg-white border-2 border-freshaqua text-freshaqua font-bold rounded-lg shadow hover:shadow-lg transition text-center"
              >
                Back to Home
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}