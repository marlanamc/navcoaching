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
                <li>Private Discord community access</li>
                <li>Text support between sessions (for session pack clients)</li>
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
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Flexible Cancellation Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p className="mb-4 font-medium text-navy">Life with ADHD is unpredictable — I get it. Here's how we keep it stress-free:</p>
              
              <h3 className="text-lg font-semibold text-navy">Session Cancellation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>24+ hours' notice:</strong> Free reschedule, no penalty</li>
                <li><strong>Same-day cancellations:</strong> Just send me a quick message — we'll try to find a new time that week</li>
                <li><strong>Emergencies:</strong> Let me know, and we'll work it out</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy">No-Show Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No-show with no contact:</strong> You will be charged for the full session</li>
                <li><strong>Communication is key:</strong> A quick message before or after prevents charges</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy">Session Pack Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Session pack validity:</strong> 4-session packs valid for 8 weeks from time of purchase, 8-session bundles valid for 12 weeks from time of purchase</li>
                <li><strong>Extensions available:</strong> If you can't use all sessions within the timeframe, contact us for a reasonable extension</li>
                <li><strong>Unused sessions:</strong> May be refunded on a prorated basis if requested before pack expiration</li>
                <li><strong>No auto-renewals:</strong> You only pay for what you purchase - no surprise charges</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy">Coach-Initiated Cancellation</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Emergency situations:</strong> If we must cancel sessions due to emergency circumstances, we will provide full refunds for any affected sessions</li>
                <li><strong>Advance notice:</strong> We will provide as much advance notice as possible and work with you to reschedule or arrange alternative support</li>
              </ul>
              
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-emerald-800 font-semibold text-center">
                  💚 ADHD-friendly flexibility — communication is all I ask for.
                </p>
              </div>
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
                <li>Drop-in sessions: $60 per session</li>
                <li>4-session pack: $180 (save $60) - valid for 8 weeks from time of purchase</li>
                <li>8-session bundle: $320 (save $160) - valid for 12 weeks from time of purchase</li>
                <li>First session discounted to $25</li>
                <li>No auto-renewals or subscription fees</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy">Refund Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unused sessions may be refunded on a prorated basis upon request</li>
                <li>Refunds must be requested in writing before the end of the billing cycle</li>
                <li>We aim to process all refunds within 10 business days</li>
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
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Text Communication Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>Text support is available for session pack clients as part of our accountability services. To maintain healthy boundaries and ensure quality support for all clients:</p>
              
              <h3 className="text-lg font-semibold text-navy">What's Included</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Gentle reminders:</strong> Optional session reminders and check-ins</li>
                <li><strong>Weekly accountability:</strong> Mid-week progress check-ins related to your goals</li>
                <li><strong>Quick clarifications:</strong> Brief questions about your dashboard or session content</li>
                <li><strong>Scheduling coordination:</strong> Rescheduling requests and session logistics</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mt-6">Reasonable Use Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Frequency:</strong> 1-3 messages per week between sessions is appropriate</li>
                <li><strong>Response time:</strong> We aim to respond within 24-48 hours during business days</li>
                <li><strong>Length:</strong> Keep messages concise - lengthy discussions are better saved for sessions</li>
                <li><strong>Timing:</strong> Respect business hours and time zones - no expectation of immediate responses</li>
                <li><strong>Crisis support:</strong> Text support is not for mental health emergencies - please contact appropriate crisis resources</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mt-6">What's Not Appropriate</h3>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <ul className="list-disc pl-6 space-y-1 text-amber-800">
                  <li>Multiple daily messages or excessive texting</li>
                  <li>Detailed therapy-like conversations (save these for sessions)</li>
                  <li>Urgent or emergency mental health support</li>
                  <li>Personal conversations unrelated to coaching goals</li>
                  <li>Expecting immediate responses outside business hours</li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-tealblue/10 rounded-lg border border-tealblue/30">
                <p className="text-tealblue font-medium text-center">
                  📱 Text support is designed to enhance your accountability between sessions - think quick check-ins, not extended conversations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Discord Community Guidelines</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our Discord community is designed to be a supportive, inclusive space for accountability and peer support. By joining, you agree to:</p>
              
              <h3 className="text-lg font-semibold text-navy">Community Access</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Current clients:</strong> Full access to all channels including active coaching support and body doubling sessions</li>
                <li><strong>Alumni (former clients):</strong> Continued access to community channels and general support - you're always welcome here</li>
                <li><strong>Discord account required:</strong> You must have a Discord account and follow Discord's Terms of Service</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mt-6">Zero Tolerance Policy</h3>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-red-800 font-medium mb-2">The following behaviors will result in immediate removal from the community:</p>
                <ul className="list-disc pl-6 space-y-1 text-red-700">
                  <li>Hate speech, discriminatory language, or slurs of any kind</li>
                  <li>Harassment, bullying, or intimidation of community members</li>
                  <li>Sharing explicit, violent, or inappropriate content</li>
                  <li>Doxxing or sharing personal information without consent</li>
                  <li>Spam, promotional content, or commercial solicitation</li>
                  <li>Impersonation of others or creating fake accounts</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-navy mt-6">Community Standards</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Respect boundaries:</strong> What's shared in sessions stays private unless the person chooses to share</li>
                <li><strong>Be supportive:</strong> This is a judgment-free zone focused on mutual accountability and encouragement</li>
                <li><strong>Stay on topic:</strong> Keep discussions relevant to productivity, ADHD support, and personal growth</li>
                <li><strong>Use appropriate channels:</strong> Body doubling in body doubling channels, general chat in community spaces</li>
                <li><strong>Be mindful of time zones:</strong> Others may be working or sleeping - keep noise levels appropriate</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mt-6">Body Doubling Sessions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Small group focus:</strong> Sessions are designed for intimate, focused work (typically under 25 participants)</li>
                <li><strong>Mute by default:</strong> Keep microphones muted unless speaking to minimize distractions</li>
                <li><strong>Optional cameras:</strong> Video is encouraged but never required - come as you are</li>
                <li><strong>No pressure to participate:</strong> You can work silently or engage as much as feels comfortable</li>
                <li><strong>Respectful interruptions only:</strong> Save non-urgent questions for breaks or text chat</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mt-6">Moderation and Enforcement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Three-step process:</strong> Warning → Temporary timeout → Permanent removal</li>
                <li><strong>Exception for severe violations:</strong> Hate speech, harassment, or safety threats result in immediate removal</li>
                <li><strong>Appeals process:</strong> Contact us directly if you believe you've been removed in error</li>
                <li><strong>Moderator discretion:</strong> Final decisions rest with community moderators and Navigating the Storm staff</li>
              </ul>

              <h3 className="text-lg font-semibold text-navy mt-6">Privacy and Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Discord data:</strong> Subject to Discord's privacy policy in addition to our own</li>
                <li><strong>Message history:</strong> We do not monitor or store private Discord messages</li>
                <li><strong>Voice recordings:</strong> Body doubling sessions are never recorded by us</li>
                <li><strong>Screen sharing:</strong> Only share content you're comfortable with others seeing</li>
              </ul>

              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-emerald-800 font-medium text-center">
                  💚 Our goal is to create the most supportive ADHD community possible - that means everyone deserves respect and safety.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement reasonable measures to protect your information; however, no system can be guaranteed 100% secure. By using our services, you acknowledge and accept the risk that your data may be accessed by unauthorized parties in the event of a breach.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Breach Notification</h2>
            <div className="space-y-4 text-gray-700">
              <p>In the event of a data breach involving your personal information, we will notify you in accordance with applicable laws and take reasonable steps to mitigate any potential harm.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Client Responsibility</h2>
            <div className="space-y-4 text-gray-700">
              <p>Coaching is a collaborative process. Clients are responsible for their own decisions, follow-through, and actions between sessions.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Inclusion and Commitment</h2>
            <div className="space-y-4 text-gray-700">
              <p>We are committed to creating a supportive, inclusive space for neurodivergent clients and clients of all backgrounds.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Termination for Cause</h2>
            <div className="space-y-4 text-gray-700">
              <p>We reserve the right to terminate coaching services immediately if a client:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Engages in inappropriate, harassing, or threatening behavior</li>
                <li>Violates professional boundaries or makes inappropriate requests</li>
                <li>Repeatedly fails to show up for sessions without communication</li>
                <li>Fails to pay for services as agreed</li>
                <li>Violates Discord community guidelines or engages in disruptive behavior in community spaces</li>
                <li>Sends excessive or inappropriate text messages beyond reasonable use guidelines</li>
                <li>Creates an unsafe or uncomfortable environment for the coach or other clients</li>
                <li>Engages in any behavior that, at our sole discretion, is deemed incompatible with a productive coaching relationship</li>
              </ul>
              <p>In cases of termination for cause, no refund will be provided for unused sessions.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Recording Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>Coaching sessions are never recorded by us. Clients may not record sessions without explicit written consent from the coach.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Technology Requirements</h2>
            <div className="space-y-4 text-gray-700">
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing their own reliable internet connection</li>
                <li>Having access to necessary technology for video calls (computer, tablet, or phone)</li>
                <li>Ensuring their technology is functioning properly for scheduled sessions</li>
              </ul>
              <p>We understand that technology can be unpredictable! If you're experiencing technical difficulties, just reach out and we'll work together to reschedule or find an alternative solution. We provide full support for your Notion dashboard setup and troubleshooting. For other tech issues, we'll do our best to help or suggest alternatives - communication is key.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Force Majeure</h2>
            <div className="space-y-4 text-gray-700">
              <p>We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Natural disasters, severe weather, or acts of God</li>
                <li>Government actions, regulations, or restrictions</li>
                <li>Internet outages, platform failures, or widespread technical issues</li>
                <li>Personal illness or family emergencies</li>
                <li>Labor disputes or supply chain disruptions</li>
              </ul>
              <p>In such cases, we will make reasonable efforts to resume services as soon as possible and may offer makeup sessions or prorated refunds as appropriate.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>To the fullest extent permitted by law, Navigating the Storm and its coaches shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues arising out of or related to your use of the services.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">No Guarantee of Results</h2>
            <div className="space-y-4 text-gray-700">
              <p>While our coaching services aim to support your personal growth and productivity, we make no guarantees regarding specific outcomes or results.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Eligibility</h2>
            <div className="space-y-4 text-gray-700">
              <p>By using our services, you confirm that you are at least 18 years of age and legally capable of entering into binding agreements.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700">
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Massachusetts.</p>
              <p>Any disputes shall be resolved through good-faith negotiations. If unresolved, disputes will be submitted to mediation or binding arbitration, as agreed upon by the parties.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Modification of Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>We reserve the right to update or modify these Terms at any time. Continued use of our services after such changes constitutes acceptance of the new Terms.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy mb-4 font-playfair">Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p>All materials provided during sessions (including but not limited to dashboards, tools, and frameworks) are the intellectual property of Navigating the Storm and may not be copied, shared, or reused without express written consent.</p>
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