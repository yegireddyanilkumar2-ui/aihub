import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AIHub",
  description: "AIHub's privacy policy. Learn how we collect, use, and protect your data when using our free AI tools.",
  alternates: { canonical: "https://aiusagetools.com/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
