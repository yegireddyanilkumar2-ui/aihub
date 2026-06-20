exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let prompt;
  try {
    ({ prompt } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  if (!prompt) {
    return { statusCode: 400, body: JSON.stringify({ error: "No prompt" }) };
  }

  const HF_API_URL =
    "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta";

  const token = process.env.HF_TOKEN;
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const body = JSON.stringify({
    inputs: `<|system|>You are a helpful, professional AI assistant. Provide clear, practical responses.</s><|user|>${prompt}</s><|assistant|>`,
    parameters: {
      max_new_tokens: 600,
      temperature: 0.7,
      return_full_text: false,
      do_sample: true,
    },
  });

  try {
    let res = await fetch(HF_API_URL, { method: "POST", headers, body });

    if (res.status === 503) {
      await new Promise((r) => setTimeout(r, 4000));
      res = await fetch(HF_API_URL, { method: "POST", headers, body });
    }

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: err?.error || `AI service error (${res.status})` }),
      };
    }

    const data = await res.json();
    const text = Array.isArray(data)
      ? data[0]?.generated_text ?? ""
      : data?.generated_text ?? "";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ result: text.trim() }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
    };
  }
};
