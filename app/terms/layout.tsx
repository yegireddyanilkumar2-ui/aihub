import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — AIHub",
  description: "AIHub's terms of use. Read our policies on using our free AI tools, AI-generated content disclaimers, and user responsibilities.",
  alternates: { canonical: "https://aiusagetools.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
