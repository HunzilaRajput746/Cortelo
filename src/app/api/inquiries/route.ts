import { NextResponse } from "next/server";
import { newId, saveInquiry, type InquiryRecord } from "@/lib/server/store";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { checkContact, clean, clientIp, isBot, rateLimited } from "@/lib/server/guard";
import { notifyInquiry } from "@/lib/server/notify";

export const dynamic = "force-dynamic";

/** A project brief or a contact message. */
export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json({ error: "Too many requests. Try again in a few minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (isBot(body)) return NextResponse.json({ ok: true, id: "ok" });

  const { name, email, errors } = checkContact(body);
  const message = clean(body.message, 5000);
  if (message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const record: InquiryRecord = {
    id: newId("msg"),
    createdAt: new Date().toISOString(),
    kind: body.kind === "brief" ? "brief" : "contact",
    name,
    email,
    company: clean(body.company, 160) || undefined,
    service: clean(body.service, 160) || undefined,
    budget: clean(body.budget, 80) || undefined,
    timeline: clean(body.timeline, 80) || undefined,
    message,
    page: clean(body.page, 200) || undefined,
  };

  try {
    await saveInquiry(record);
  } catch (err) {
    console.error("[inquiries]", err);
    return NextResponse.json(
      { error: `We couldn't save your message right now. Please try again in a minute, or email ${FOUNDER_DATA.agencyEmail}.` },
      { status: 503 },
    );
  }
  await notifyInquiry(record);
  return NextResponse.json({ ok: true, id: record.id });
}
