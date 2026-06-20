import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 30;

const HF_API_URL =
  "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  if (!prompt) return NextResponse.json({ error: "No prompt" }, { status: 400 });

  const token = process.env.HF_TOKEN;
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const body = JSON.stringify({
    inputs: `<|system|>You are a helpful, professional AI assistant. Provide clear, well-structured, practical responses.</s><|user|>${prompt}</s><|assistant|>`,
    parameters: {
      max_new_tokens: 800,
      temperature: 0.7,
      return_full_text: false,
      do_sample: true,
    },
  });

  try {
    let res = await fetch(HF_API_URL, { method: "POST", headers, body });

    if (res.status === 503) {
      await new Promise((r) => setTimeout(r, 3000));
      res = await fetch(HF_API_URL, { method: "POST", headers, body });
    }

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: err?.error || `AI service error (${res.status})` },
        { status: res.status }
      );
    }

    const data = await res.json();
    const text: string = Array.isArray(data)
      ? data[0]?.generated_text ?? ""
      : data?.generated_text ?? "";

    return NextResponse.json({ result: text.trim() });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
