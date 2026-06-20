"use client";
import Link from "next/link";

export default function PrivacyPage() {
  const lastUpdated = "June 2025";
  return (
    <div className="page-bg grid-pattern min-h-screen">
      <nav className="navbar sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-base font-bold">✦</div>
            <span className="text-lg font-bold text-gray-900">AI<span className="gradient-text">Hub</span></span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-500">Privacy Policy</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="card rounded-2xl p-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: {lastUpdated}</p>

          <div className="space-y-6 text-gray-700 leading-relaxed text-sm">

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">1. Introduction</h2>
              <p>Welcome to AIHub ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our website at aiusagetools.com and any associated services (collectively, the "Service").</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">2. Information We Collect</h2>
              <p className="mb-2"><strong>Information you provide:</strong> When you use our AI tools, you input text, data, and other information into our forms. This information is sent to our AI processing service to generate responses.</p>
              <p className="mb-2"><strong>Automatically collected information:</strong> We may automatically collect certain information when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages visited. This is standard web analytics data.</p>
              <p><strong>Cookies:</strong> We use cookies and similar tracking technologies for analytics and to serve advertisements through Google AdSense. You can control cookie settings through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To provide and improve the AI tool services</li>
                <li>To process your inputs through our AI generation API</li>
                <li>To display relevant advertisements via Google AdSense</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">4. Data Sharing & Third Parties</h2>
              <p className="mb-2"><strong>HuggingFace API:</strong> Text you enter into our tools is sent to HuggingFace's inference API to generate AI responses. Their privacy policy applies to this processing.</p>
              <p className="mb-2"><strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out via <a href="https://www.google.com/settings/ads" className="text-violet-600 underline" target="_blank" rel="noopener noreferrer">Google's Ad Settings</a>.</p>
              <p><strong>Analytics:</strong> We may use analytics services to understand how users interact with our site. We do not sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">5. Data Retention</h2>
              <p>We do not permanently store the text you enter into our AI tools on our servers. Inputs are processed in real-time and are not saved to a database. Standard web server logs may be retained for up to 90 days.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">6. Your Rights</h2>
              <p>Depending on your location, you may have the right to access, correct, or delete your personal data. To exercise these rights, contact us at the email below. For EU residents, you have rights under GDPR. For California residents, you have rights under CCPA.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">7. Children's Privacy</h2>
              <p>Our Service is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us immediately.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">8. Security</h2>
              <p>We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at: <strong>privacy@aihub.com</strong></p>
            </section>

          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/" className="text-violet-600 hover:text-violet-800 font-semibold">← Back to all tools</Link>
        </div>
      </div>
    </div>
  );
}
