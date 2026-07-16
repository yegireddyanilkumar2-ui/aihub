import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — AI Tips & Guides for Every Industry | AIHub",
  description: "Learn how to use free AI tools to grow your business. Practical guides for real estate, restaurants, marketing, healthcare and more.",
};

const posts = [
  {
    slug: "ai-tools-for-real-estate-agents",
    title: "10 Ways AI Tools Help Real Estate Agents Close More Deals",
    excerpt: "Discover how real estate professionals are using free AI tools to write better listings, respond to clients faster, and analyze neighborhoods in seconds.",
    category: "Real Estate",
    color: "bg-blue-100 text-blue-700",
    icon: "🏡",
    date: "June 20, 2026",
    readTime: "5 min read",
  },
  {
    slug: "free-ai-tools-for-restaurants",
    title: "How Restaurant Owners Use AI to Save Time and Boost Revenue",
    excerpt: "From writing menus to responding to reviews, AI tools are transforming how small restaurant businesses operate — and it's completely free to start.",
    category: "Restaurant",
    color: "bg-amber-100 text-amber-700",
    icon: "🍽️",
    date: "June 19, 2026",
    readTime: "6 min read",
  },
  {
    slug: "ai-marketing-tools-small-business",
    title: "Free AI Marketing Tools Every Small Business Should Be Using",
    excerpt: "You don't need a big marketing budget to compete. These free AI tools help you write ads, social posts, email campaigns and SEO content in minutes.",
    category: "Marketing",
    color: "bg-pink-100 text-pink-700",
    icon: "📣",
    date: "June 18, 2026",
    readTime: "7 min read",
  },
  {
    slug: "ai-tools-for-healthcare-professionals",
    title: "How Healthcare Professionals Are Using AI to Improve Patient Care",
    excerpt: "AI is helping doctors, nurses and clinic managers write patient notes, explain treatments, and handle administrative tasks — saving hours every week.",
    category: "Healthcare",
    color: "bg-rose-100 text-rose-700",
    icon: "🏥",
    date: "June 17, 2026",
    readTime: "6 min read",
  },
  {
    slug: "getting-started-with-free-ai-tools",
    title: "Complete Beginner's Guide to Free AI Tools in 2026",
    excerpt: "Never used AI tools before? This step-by-step guide shows you exactly how to get started with free AI tools — no technical knowledge required.",
    category: "Guide",
    color: "bg-violet-100 text-violet-700",
    icon: "🚀",
    date: "June 16, 2026",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="page-bg grid-pattern min-h-screen">
      {/* Navbar */}
      <nav className="navbar sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-base font-bold shadow-md">
              ✦
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              AI<span className="gradient-text">Hub</span>
            </span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-semibold text-violet-700">Blog</span>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          ✦ AI Tips & Industry Guides
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Learn How to Use AI for Your Business
        </h1>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Practical guides, tips and tutorials to help you get the most out of free AI tools — for every industry.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="card rounded-2xl p-6 hover:shadow-lg transition-all group cursor-pointer border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{post.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${post.color}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <span className="text-xs text-gray-400">· {post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-violet-700 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-violet-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Read article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200/80 bg-white/50 py-6 text-center">
        <p className="text-gray-400 text-xs">
          AIHub · <Link href="/" className="hover:text-violet-600">Back to Tools</Link>
        </p>
      </footer>
    </div>
  );
}
