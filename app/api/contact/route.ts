import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, maxLength: number) => typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const submission = { name: clean(body.name, 100), email: clean(body.email, 254), phone: clean(body.phone, 40), company: clean(body.company, 120), challenge: clean(body.challenge, 2_000) };
    if (!submission.name || !emailPattern.test(submission.email) || !submission.challenge) return NextResponse.json({ success: false, error: "Please provide your name, a valid email, and a short message." }, { status: 400 });
    // Connect a mail provider or CRM here (for example, Resend, HubSpot, or a database) before production launch.
    console.info("CannumX contact enquiry", { ...submission, receivedAt: new Date().toISOString() });
    return NextResponse.json({ success: true });
  } catch { return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 }); }
}
