"use client";

import { useEffect } from "react";

interface AdSenseSlotProps {
  slotId: string;
  style?: React.CSSProperties;
  className?: string;
  format?: "auto" | "rectangle" | "leaderboard" | "skyscraper";
  label?: string;
}

// Your AdSense publisher ID — replace with yours from Google AdSense
const PUBLISHER_ID = "ca-pub-7407560506101366";

export default function AdSenseSlot({
  slotId,
  className = "",
  format = "auto",
  label = "Advertisement",
}: AdSenseSlotProps) {
  useEffect(() => {
    try {
      // Push ad after component mounts
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      // silently ignore in dev
    }
  }, []);

  // In development, show a placeholder so you can see the layout
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    return <AdPlaceholder label={label} className={className} />;
  }

  return (
    <div className={`overflow-hidden text-center ${className}`}>
      <p className="text-[10px] text-gray-400 mb-1 tracking-widest uppercase">{label}</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Visible placeholder shown during development
function AdPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`adsense-slot ${className}`}>
      <div className="text-center">
        <div className="text-slate-400 text-xs tracking-widest uppercase mb-1">
          {label}
        </div>
        <div className="text-slate-300 text-[11px]">Google AdSense — Live in production</div>
      </div>
    </div>
  );
}
