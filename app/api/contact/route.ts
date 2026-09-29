import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const recentSubmissions = new Map<string, number[]>();
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  if (typeof fields.website === "string" && fields.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const organization = typeof fields.organization === "string" ? fields.organization.trim() : "";

  if (!name || name.length > 120 || !EMAIL_PATTERN.test(email) || email.length > 254 || !organization || organization.length > 180) {
    return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const port = Number(process.env.SMTP_PORT || 587);

  if (!host || !user || !pass || !from) {
    return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 503 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || "unknown";
  const now = Date.now();
  const recent = (recentSubmissions.get(ip) || []).filter((time) => now - time < 15 * 60 * 1000);
  if (recent.length >= 5) {
    return NextResponse.json({ error: "Please wait before sending another enquiry." }, { status: 429 });
  }
  recent.push(now);
  recentSubmissions.set(ip, recent);

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465,
      auth: { user, pass },
    });
    await transporter.sendMail({
      from,
      to: "contact@zaivis.co.in",
      replyTo: { name, address: email },
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany / university: ${organization}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return NextResponse.json({ error: "We could not send your enquiry right now." }, { status: 502 });
  }
}
