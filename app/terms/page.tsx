"use client";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="page-bg grid-pattern min-h-screen">
      <nav className="navbar sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-base font-bold">✦</div>
            <span className="text-lg font-bold text-gray-900">AI<span className="gradient-text">Hub</span></span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-500">Terms of Use</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="card rounded-2xl p-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Terms of Use</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: June 2025</p>

          <div className="space-y-6 text-gray-700 leading-relaxed text-sm">

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
              <p>By accessing and using AIHub ("the Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Service.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">2. Description of Service</h2>
              <p>AIHub provides free AI-powered tools organized by industry to help users generate content, analyze data, and assist with professional tasks. The Service uses open-source AI models to generate responses based on user inputs.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">3. Use of the Service</h2>
              <p className="mb-2">You agree to use AIHub only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the Service to generate illegal, harmful, or abusive content</li>
                <li>Attempt to reverse engineer, scrape, or overload our systems</li>
                <li>Use the Service to violate any person's privacy or rights</li>
                <li>Submit sensitive personal information (passwords, financial account numbers, etc.) into our tools</li>
                <li>Use the Service for spam, phishing, or fraudulent purposes</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">4. AI-Generated Content Disclaimer</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800">
                <p className="font-semibold mb-1">⚠️ Important:</p>
                <p>AI-generated content is provided for informational and productivity purposes only. It is NOT professional advice. Specifically:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Healthcare tools do not provide medical diagnosis or treatment advice</li>
                  <li>Legal tools do not constitute legal advice — consult a licensed attorney</li>
                  <li>Financial tools do not constitute financial or investment advice</li>
                  <li>AI outputs may contain errors, inaccuracies, or outdated information</li>
                </ul>
                <p className="mt-2">Always verify AI-generated content and consult qualified professionals for important decisions.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">5. Intellectual Property</h2>
              <p className="mb-2">The AIHub platform, design, and code are our intellectual property. Content you input remains yours. AI-generated outputs are provided to you for your use, but we make no warranty about their accuracy, originality, or fitness for purpose.</p>
              <p>You are responsible for reviewing and verifying all AI-generated content before using it professionally or commercially.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">6. Advertisements</h2>
              <p>AIHub displays advertisements through Google AdSense to support the free service. By using our Service, you consent to the display of these advertisements. We are not responsible for the content of third-party advertisements.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">7. Limitation of Liability</h2>
              <p>AIHub is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of AI-generated content, including but not limited to direct, indirect, incidental, or consequential damages. Our total liability to you shall not exceed $0 (as the service is provided free of charge).</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">8. Service Availability</h2>
              <p>We strive to keep AIHub available at all times but do not guarantee uninterrupted access. AI generation depends on third-party services and may be subject to rate limits or downtime.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-2">10. Contact</h2>
              <p>Questions about these Terms? Contact us at: <strong>legal@aihub.com</strong></p>
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
