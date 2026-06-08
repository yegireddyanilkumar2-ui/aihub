"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-bg grid-pattern min-h-screen">
      <nav className="navbar sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-base font-bold">✦</div>
            <span className="text-lg font-bold text-gray-900">AI<span className="gradient-text">Hub</span></span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-500">About</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="card rounded-2xl p-10">
          <div className="text-5xl mb-4">✦</div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">About AIHub</h1>
          <p className="text-violet-600 font-semibold mb-8">Free AI Tools for Every Industry</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>AIHub</strong> is a free, open-source platform that brings the power of artificial intelligence to everyday people — regardless of their technical background or budget.
            </p>
            <p>
              We believe that AI should not be locked behind expensive subscriptions. Every professional — from a real estate agent closing deals to a student cramming for exams, from a restaurant owner managing reviews to a freelancer negotiating rates — deserves access to smart tools that save time and improve results.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">Our Mission</h2>
            <p>
              To make AI practical, accessible, and organized by the way people actually work. Instead of a one-size-fits-all chatbot, AIHub offers purpose-built tools organized by industry, so you get exactly the right AI assistance for your specific daily tasks.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>110+ AI tools</strong> across 11 industries</li>
              <li><strong>Real Estate</strong> — listings, client emails, investment analysis</li>
              <li><strong>Education</strong> — note summaries, quiz makers, essay outlines</li>
              <li><strong>Restaurant & Food</strong> — menu writing, cost estimation, staff training</li>
              <li><strong>Marketing</strong> — social captions, ad copy, campaigns</li>
              <li><strong>Healthcare</strong> — symptom journals, workout plans, nutrition</li>
              <li><strong>Legal</strong> — contract simplification, NDA, dispute letters</li>
              <li><strong>Finance</strong> — budgeting, invoices, debt planning</li>
              <li><strong>HR & Recruitment</strong> — job descriptions, cover letters, reviews</li>
              <li><strong>E-commerce</strong> — product descriptions, abandoned cart, FAQs</li>
              <li><strong>Content Creators</strong> — YouTube scripts, content calendars</li>
              <li><strong>Personal Productivity</strong> — daily planners, goal setting, habits</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 pt-2">Powered by Open-Source AI</h2>
            <p>
              AIHub runs on open-source AI models via the HuggingFace ecosystem — the same technology that powers cutting-edge research labs, made available to everyone for free.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-2">Important Disclaimer</h2>
            <p className="text-sm bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800">
              AI-generated content is for informational and productivity purposes only. It is not a substitute for professional legal, medical, financial, or other licensed advice. Always consult a qualified professional for important decisions.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-violet-600 hover:text-violet-800 font-semibold">← Back to all tools</Link>
        </div>
      </div>
    </div>
  );
}
