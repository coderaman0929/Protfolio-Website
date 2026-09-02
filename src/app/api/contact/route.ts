import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const now = Date.now();
    const rateData = ipRequestMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW };

    if (now > rateData.resetTime) {
      rateData.count = 0;
      rateData.resetTime = now + RATE_LIMIT_WINDOW;
    }

    if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    rateData.count++;
    ipRequestMap.set(ip, rateData);

    // 2. Parse Payload
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 3. Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: "Message exceeds maximum allowed length." }, { status: 400 });
    }

    // 4. Sanitize inputs
    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().toLowerCase().slice(0, 100);
    const cleanSubject = (subject || "Portfolio Contact").trim().slice(0, 200);
    const cleanMessage = message.trim().slice(0, 5000);

    // Server log (In production, replace with Nodemailer/Resend/SendGrid)
    console.log(`[CONTACT FORM RECEIVED] From: ${cleanName} <${cleanEmail}> Subject: ${cleanSubject}`);
    console.log(`Message: ${cleanMessage}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process contact request." },
      { status: 500 }
    );
  }
}
