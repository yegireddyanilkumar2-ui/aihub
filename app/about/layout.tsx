import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AIHub — Free AI Tools for Every Industry",
  description:
    "Learn about AIHub — a free platform offering 110+ AI tools organized by industry. No login, no credit card, powered by open-source AI models.",
  alternates: { canonical: "https://aihub.vercel.app/about" },
  openGraph: {
    title: "About AIHub — Free AI Tools for Every Industry",
    description: "AIHub offers 110+ free AI tools for Real Estate, Education, Restaurants, Marketing, Healthcare and more. Learn about our mission.",
    url: "https://aihub.vercel.app/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
