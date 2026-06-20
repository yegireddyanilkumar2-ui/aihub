"use client";

import { useState } from "react";
import Link from "next/link";
import { industries, type Tool, type Industry } from "@/lib/tools";
import AdSenseSlot from "@/components/AdSenseSlot";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryPage({ params }: PageProps) {
  const { slug } = use(params);
  const industry = industries.find((i) => i.id === slug);
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  if (!industry) {
    return (
      <div className="page-bg min-h-screen flex items-center justify-center text-gray-500">
        Industry not found.{" "}
        <Link href="/" className="ml-2 text-violet-600 underline">Go home</Link>
      </div>
    );
  }

  return (
    <div className="page-bg grid-pattern min-h-screen">

      {/* ── Navbar ── */}
      <nav className="navbar sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-base font-bold shadow-md">
              ✦
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              AI<span className="gradient-text">Hub</span>
            </span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className={`text-sm font-semibold ${industry.textColor}`}>{industry.name}</span>
        </div>
      </nav>

      {/* ── Top Ad ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <AdSenseSlot
          slotId="5678901234"
          format="leaderboard"
          label="Advertisement"
          className="h-[90px] w-full"
        />
      </div>

      {/* ── Industry Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-gray-400 hover:text-violet-600 text-sm mb-4 transition-colors font-medium"
        >
          ← All Industries
        </Link>

        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl ${industry.bgLight} flex items-center justify-center text-4xl shadow-sm`}>
            {industry.icon}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">{industry.name}</h1>
            <p className="text-gray-700 text-sm">{industry.tagline}</p>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="flex gap-6">

          {/* Left: Tool grid + workspace */}
          <div className="flex-1 min-w-0">
            <div className={`flex gap-5 ${activeTool ? "flex-col xl:flex-row" : ""}`}>

              {/* Tool Cards */}
              <div className={activeTool ? "xl:w-[45%]" : "w-full"}>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-3">
                  {industry.tools.length} Tools Available — Click to Open
                </p>
                <div className={`grid gap-3 ${activeTool ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                  {industry.tools.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => setActiveTool(activeTool?.id === tool.id ? null : tool)}
                      className={`text-left rounded-xl p-4 transition-card group border ${
                        activeTool?.id === tool.id
                          ? `${industry.bgLight} ${industry.borderColor} border-2 shadow-md`
                          : "card hover:shadow-md border-transparent"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-2xl">{tool.icon}</span>
                        {activeTool?.id === tool.id && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full bg-white/80 ${industry.textColor} font-bold border ${industry.borderColor}/40`}>
                            OPEN
                          </span>
                        )}
                      </div>
                      <h3 className={`font-bold text-sm mb-1 ${activeTool?.id === tool.id ? industry.textColor : "text-gray-900"}`}>
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{tool.description}</p>
                    </button>
                  ))}
                </div>

                {/* Mid-page Ad inside tool grid area */}
                <div className="mt-5">
                  <AdSenseSlot
                    slotId="6789012345"
                    format="rectangle"
                    label="Advertisement"
                    className="h-[250px] w-full"
                  />
                </div>
              </div>

              {/* Tool Workspace */}
              {activeTool && (
                <div className="xl:w-[55%]">
                  <ToolWorkspace
                    tool={activeTool}
                    industry={industry}
                    onClose={() => setActiveTool(null)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar Ad */}
          <div className="hidden xl:flex flex-col gap-4 w-[160px] flex-shrink-0">
            <AdSenseSlot
              slotId="7890123456"
              format="skyscraper"
              label="Ad"
              className="h-[600px] w-full"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom Ad ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <AdSenseSlot
          slotId="8901234567"
          format="leaderboard"
          label="Advertisement"
          className="h-[90px] w-full"
        />
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200/80 bg-white/50 py-6 text-center">
        <p className="text-gray-400 text-xs">
          AIHub · Powered by open-source AI · Free forever
        </p>
      </footer>

    </div>
  );
}

// ─── Tool Workspace ────────────────────────────────────────────────────────────

function ToolWorkspace({
  tool,
  industry,
  onClose,
}: {
  tool: Tool;
  industry: Industry;
  onClose: () => void;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    const missing = tool.fields.filter((f) => f.required && !values[f.id]);
    if (missing.length > 0) {
      setError(`Please fill in: ${missing.map((f) => f.label).join(", ")}`);
      return;
    }
    setError("");
    setLoading(true);
    setOutput("");

    try {
      const prompt = tool.promptTemplate(values);
      const res = await fetch("/.netlify/functions/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setOutput(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${tool.name.replace(/\s+/g, "-").toLowerCase()}-output.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setValues({});
    setOutput("");
    setError("");
  };

  return (
    <div className="sticky top-20">
      {/* Workspace header */}
      <div className={`bg-gradient-to-r ${industry.gradient} rounded-t-2xl p-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-2xl">
            {tool.icon}
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">{tool.name}</h3>
            <p className="text-white/70 text-xs">{tool.description}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white/80 hover:text-white transition-colors text-sm"
        >
          ✕
        </button>
      </div>

      {/* Form + output */}
      <div className="card rounded-b-2xl border-t-0 p-5 space-y-4 max-h-[70vh] overflow-y-auto">
        {tool.fields.map((field) => (
          <div key={field.id}>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">
              {field.label}
              {field.required && <span className="text-red-400 ml-1 normal-case font-normal">required</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                value={values[field.id] || ""}
                onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                placeholder={field.placeholder}
                rows={4}
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 rounded-xl resize-none"
                style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid #e2e8f0" }}
              />
            ) : field.type === "select" ? (
              <select
                value={values[field.id] || ""}
                onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 rounded-xl"
                style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid #e2e8f0" }}
              >
                <option value="">Select an option...</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={values[field.id] || ""}
                onChange={(e) => setValues({ ...values, [field.id]: e.target.value })}
                placeholder={field.placeholder}
                className="w-full px-3.5 py-2.5 text-sm text-gray-900 rounded-xl"
                style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid #e2e8f0" }}
              />
            )}
          </div>
        ))}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-xs">
            ⚠️ {error}
          </div>
        )}

        {/* Buttons row */}
        <div className="flex gap-2">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`flex-1 py-3 rounded-xl font-bold text-white text-sm transition-all bg-gradient-to-r ${industry.gradient} hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md`}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              "✦ Generate with AI"
            )}
          </button>
          <button
            onClick={handleClear}
            className="px-3 py-3 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 text-sm transition-colors border border-gray-200"
          >
            Clear
          </button>
        </div>

        {/* Output */}
        {output && (
          <div className="mt-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                ✨ AI Output
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors font-medium"
                >
                  {copied ? "✓ Copied!" : "Copy"}
                </button>
                <button
                  onClick={handleDownload}
                  className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors font-medium"
                >
                  Download
                </button>
              </div>
            </div>
            <div
              className="rounded-xl p-4 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap border border-gray-100"
              style={{ background: "rgba(248, 250, 255, 0.9)" }}
            >
              {output}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
