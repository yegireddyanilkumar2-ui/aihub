"use client";

import Link from "next/link";
import { industries } from "@/lib/tools";
import AdSenseSlot from "@/components/AdSenseSlot";

export default function HomePage() {
  return (
    <div className="page-bg grid-pattern min-h-screen">

      {/* ── Navbar ── */}
      <nav className="navbar sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-base font-bold shadow-md">
              ✦
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              AI<span className="gradient-text">Hub</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-gray-700 font-semibold">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse inline-block" />
              Free &amp; Open Source
            </span>
            <a
              href="https://huggingface.co/join"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
            >
              Get Free AI Key
            </a>
          </div>
        </div>
      </nav>

      {/* ── Top Leaderboard Ad ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <AdSenseSlot
          slotId="1234567890"
          format="leaderboard"
          label="Advertisement"
          className="h-[90px] w-full"
        />
      </div>

      {/* ── Hero (compact) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 border border-violet-100 rounded-full px-3 py-1 text-xs text-violet-700 font-medium mb-4 shadow-sm">
          <span className="text-emerald-500">●</span>
          100% Free · No Login · Open Source AI
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3 leading-tight">
          Free AI Tools for{" "}
          <span className="gradient-text">Every Industry</span>
        </h1>

        <p className="text-gray-700 text-base max-w-xl mx-auto mb-4">
          Purpose-built AI tools organized by your industry — real estate, education, food, and more.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
          {["No credit card", "No signup needed", "Open-source AI", "Works instantly"].map((t) => (
            <span key={t} className="flex items-center gap-1">
              <span className="text-violet-500 font-bold">✓</span> {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Industry Cards + Sidebar Ad ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex gap-6">

          {/* Industry grid */}
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Choose Your Industry
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industry/${industry.id}`}
                  className="card rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-card group"
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${industry.gradient} opacity-80`}
                    style={{ position: "relative", marginTop: "-24px", marginLeft: "-24px", marginRight: "-24px", borderRadius: "16px 16px 0 0" }}
                  />

                  {/* Icon + badge */}
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-xl ${industry.bgLight} flex items-center justify-center text-3xl shadow-sm`}>
                      {industry.icon}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${industry.bgLight} ${industry.textColor}`}>
                      {industry.tools.length} tools
                    </span>
                  </div>

                  {/* Name + tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-violet-700 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{industry.tagline}</p>
                  </div>

                  {/* Tool pills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {industry.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool.id}
                        className={`text-[11px] px-2 py-0.5 rounded-full ${industry.bgLight} ${industry.textColor} font-medium`}
                      >
                        {tool.icon} {tool.name}
                      </span>
                    ))}
                    {industry.tools.length > 3 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">
                        +{industry.tools.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-1 text-sm font-semibold ${industry.textColor} mt-1`}>
                    Explore tools
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar Ad (desktop only) */}
          <div className="hidden lg:flex flex-col gap-4 w-[160px] flex-shrink-0">
            <AdSenseSlot
              slotId="2345678901"
              format="skyscraper"
              label="Ad"
              className="h-[600px] w-full"
            />
          </div>
        </div>
      </section>

      {/* ── Mid-page Banner Ad ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <AdSenseSlot
          slotId="3456789012"
          format="leaderboard"
          label="Advertisement"
          className="h-[90px] w-full"
        />
      </div>

      {/* ── Stats ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="card rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "110+", label: "AI Tools", icon: "🤖" },
              { value: "11", label: "Industries", icon: "🏢" },
              { value: "$0", label: "Cost Forever", icon: "💚" },
              { value: "100%", label: "Open Source", icon: "🔓" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{stat.icon}</span>
                <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-gray-600 text-xs font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5 text-center">
          How It Works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: "1", icon: "🎯", title: "Pick Your Industry", desc: "Choose from Real Estate, Education, Restaurant, and more industries coming soon." },
            { step: "2", icon: "📝", title: "Fill In the Details", desc: "Answer a few simple questions about your specific task or need." },
            { step: "3", icon: "✨", title: "Get AI Output", desc: "Our open-source AI generates professional content in seconds, completely free." },
          ].map((item) => (
            <div key={item.step} className="card rounded-2xl p-5 flex gap-4 items-start">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <div className="text-xl mb-1">{item.icon}</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom Banner Ad ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <AdSenseSlot
          slotId="4567890123"
          format="leaderboard"
          label="Advertisement"
          className="h-[90px] w-full"
        />
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200/80 bg-white/50 py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold">✦</div>
            <span className="font-bold text-gray-900 text-sm">AIHub</span>
          </div>
          <p className="text-gray-500 text-xs mb-3">Powered by open-source AI · Free forever · No credit card required</p>
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <Link href="/about" className="hover:text-violet-600 transition-colors">About</Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-violet-600 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-violet-600 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
