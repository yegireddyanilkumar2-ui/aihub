import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AIHub — Free AI Tools for Every Industry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f8f4ff 0%, #eef2ff 40%, #f0f9ff 70%, #fff7ed 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            color: "white",
            fontWeight: "bold",
            marginBottom: 28,
          }}
        >
          ✦
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            color: "#1a1a2e",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          AI<span style={{ color: "#7c3aed" }}>Hub</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#4b5563",
            textAlign: "center",
            marginBottom: 36,
            maxWidth: 700,
          }}
        >
          110+ Free AI Tools for Every Industry
        </div>

        {/* Industry pills */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", maxWidth: 900 }}>
          {["🏡 Real Estate", "🎓 Education", "🍽️ Restaurant", "📣 Marketing", "🏥 Healthcare", "💰 Finance"].map((label) => (
            <div
              key={label}
              style={{
                background: "white",
                border: "2px solid #e5e7eb",
                borderRadius: 999,
                padding: "8px 20px",
                fontSize: 18,
                color: "#374151",
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: 36,
            background: "rgba(124,58,237,0.1)",
            border: "2px solid rgba(124,58,237,0.3)",
            borderRadius: 999,
            padding: "10px 28px",
            fontSize: 18,
            color: "#7c3aed",
            fontWeight: 700,
          }}
        >
          ✓ Free Forever · No Login · No Credit Card
        </div>
      </div>
    ),
    { ...size }
  );
}
