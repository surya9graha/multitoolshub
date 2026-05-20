require("dotenv").config();
const functions = require("firebase-functions");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Lightweight in-memory rate limiter
const rateLimitStore = {};
function isRateLimited(ip, limit = 10, windowMs = 60000) {
  const now = Date.now();
  if (!rateLimitStore[ip]) {
    rateLimitStore[ip] = [];
  }
  // filter out timestamps older than windowMs
  rateLimitStore[ip] = rateLimitStore[ip].filter(timestamp => now - timestamp < windowMs);
  if (rateLimitStore[ip].length >= limit) {
    return true;
  }
  rateLimitStore[ip].push(now);
  return false;
}

// 1. generateText endpoint (calls Gemini)
exports.generateText = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed. Use POST." });
    return;
  }

  // Rate Limiting: 10 requests per minute
  const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
  if (isRateLimited(ip, 10, 60000)) {
    res.status(429).json({ error: "Too many requests. Please wait a minute before trying again." });
    return;
  }

  try {
    const prompt = req.body.prompt;
    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      res.status(400).json({ error: "Missing or invalid prompt parameter." });
      return;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ result: text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. removeBackground endpoint (calls remove.bg)
exports.removeBackground = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed. Use POST." });
    return;
  }

  // Rate Limiting: 5 requests per minute
  const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
  if (isRateLimited(ip, 5, 60000)) {
    res.status(429).json({ error: "Too many requests. Please wait a minute before trying again." });
    return;
  }

  try {
    const { image, size } = req.body;
    if (!image || typeof image !== "string") {
      res.status(400).json({ error: "Missing or invalid base64 image data." });
      return;
    }

    // Convert base64 to buffer
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    // File size check (5MB limit)
    if (buffer.length > 5 * 1024 * 1024) {
      res.status(400).json({ error: "File size exceeds 5MB limit." });
      return;
    }

    // Call remove.bg API
    const apiFormData = new FormData();
    const blob = new Blob([buffer], { type: "image/png" });
    apiFormData.append("image_file", blob, "image.png");
    apiFormData.append("size", size || "auto");

    const removeBgResponse = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": process.env.REMOVE_BG_API_KEY || ""
      },
      body: apiFormData
    });

    if (!removeBgResponse.ok) {
      let errMsg = "Failed to remove background.";
      try {
        const errJson = await removeBgResponse.json();
        errMsg = errJson.errors?.[0]?.title || errMsg;
      } catch (_) {}
      res.status(removeBgResponse.status).json({ error: errMsg });
      return;
    }

    const arrayBuffer = await removeBgResponse.arrayBuffer();
    const outputBuffer = Buffer.from(arrayBuffer);
    const outputBase64 = outputBuffer.toString("base64");

    res.json({ image: `data:image/png;base64,${outputBase64}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});