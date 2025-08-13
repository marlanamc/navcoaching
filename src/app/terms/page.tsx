import React from 'react';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-4 font-playfair">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-white/90 rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Agreement to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>By accessing and using the services provided by Navigating the Storm ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms").</p>
              <p>If you do not agree to these Terms, please do not use our services.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Our Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>Navigating the Storm provides ADHD accountability coaching services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Weekly 30-minute coaching sessions</li>
                <li>Personal Notion dashboard setup and support</li>
                <li>Weekly accountability check-ins</li>
                <li>Body doubling sessions</li>
                <li>Goal-setting and progress tracking</li>
                <li>ADHD-focused productivity strategies</li>
              </ul>
            </div>
          </section>

          <section className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h2 className="text-2xl font-bold text-red-700 mb-4 font-playfair">Important Disclaimer</h2>
            <div className="space-y-4 text-red-800">
              <p><strong>Our services are NOT therapy, medical treatment, or mental health services.</strong></p>
              <p>We provide accountability coaching and productivity support. We do not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Diagnose, treat, or cure any medical or psychological conditions</li>
                <li>Provide therapy, counseling, or mental health treatment</li>
                <li>Replace professional medical or mental health care</li>
                <li>Prescribe medication or provide medical advice</li>
              </ul>
              <p><strong>If you are experiencing mental health concerns, please consult qualified healthcare providers.</strong></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Scheduling and Cancellation Policy</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-navy">Cancellation Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>24+ hours notice:</strong> Session can be rescheduled at no charge</li>
                <li><strong>Less than 24 hours:</strong> Session may be charged at full rate</li>
                <li><strong>Emergency exceptions:</strong> We understand life happens, especially with ADHD. Emergency situations will be handled with flexibility and compassion</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy">Service Cancellation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may cancel ongoing coaching services at any time with 1 week notice</li>
                <li>Prepaid sessions will be refunded on a prorated basis</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Payment and Refund Policy</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-navy">Trial Period</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All new clients receive a 2-week trial period</li>
                <li>If you're not satisfied within the trial period, we'll provide a full refund</li>
                <li>Trial period begins with your first paid session</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy">Billing and Pricing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Services are billed at $50/week ($200 every 4 weeks)</li>
                <li>Member rate of $45/week ($180 every 4 weeks) may be available</li>
                <li>First session discounted to $25</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy">Refund Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refunds for unused sessions are provided on a prorated basis</li>
                <li>Refund requests must be made in writing</li>
                <li>Refunds are processed within 10 business days</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Confidentiality</h2>
            <div className="space-y-4 text-gray-700">
              <p>We are committed to protecting your privacy and maintaining confidentiality of all information shared during coaching sessions.</p>
              <p>We will not share your personal information or session content with third parties except:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit written consent</li>
                <li>When required by law</li>
                <li>If there is imminent danger to yourself or others</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>If you have questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> <a href="mailto:marlie@navcoaching.org" className="text-tealblue hover:text-navy">marlie@navcoaching.org</a></p>
                <p><strong>Business:</strong> Navigating the Storm</p>
              </div>
            </div>
          </section>

          <section className="bg-freshaqua/10 p-6 rounded-lg border border-freshaqua/30">
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Questions?</h2>
            <p className="text-gray-700 mb-4">
              We believe in transparency and want you to feel comfortable with our terms. If you have any questions or concerns, please don't hesitate to reach out.
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