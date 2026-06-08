const HF_API_URL = "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta";

export async function generateAIResponse(prompt: string): Promise<string> {
  const token = process.env.NEXT_PUBLIC_HF_TOKEN;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const res = await fetch(HF_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        inputs: `<|system|>You are a helpful, professional AI assistant. Provide clear, well-structured responses.</s><|user|>${prompt}</s><|assistant|>`,
        parameters: {
          max_new_tokens: 800,
          temperature: 0.7,
          return_full_text: false,
          do_sample: true,
        },
      }),
    });

    if (res.status === 503) {
      // Model loading — retry once after delay
      await new Promise((r) => setTimeout(r, 8000));
      return generateAIResponse(prompt);
    }

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error || `API error ${res.status}`);
    }

    const data = await res.json();
    const text: string = Array.isArray(data)
      ? data[0]?.generated_text ?? ""
      : data?.generated_text ?? "";

    return text.trim();
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Failed to generate response"
    );
  }
}
