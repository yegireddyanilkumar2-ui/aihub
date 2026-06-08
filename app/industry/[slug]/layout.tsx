import type { Metadata } from "next";
import { industries } from "@/lib/tools";
import { industrySEO } from "@/lib/seo";

const SITE_URL = "https://aihub.vercel.app";

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.id === slug);
  const seo = industrySEO[slug];

  if (!industry || !seo) {
    return {
      title: "Industry AI Tools | AIHub",
      description: "Free AI tools for your industry on AIHub.",
    };
  }

  const pageUrl = `${SITE_URL}/industry/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: pageUrl,
      siteName: "AIHub",
      type: "website",
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: `${industry.name} AI Tools` }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.id }));
}

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
