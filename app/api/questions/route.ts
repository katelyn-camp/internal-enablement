import { NextResponse } from "next/server";

// "Submitted Questions" table in the appYeKEx7Sspa121K base — anonymous
// questions submitted from the floating question button on every page.
const TABLE_ID = "tbld5n6uYsEopCjAf";

export async function POST(request: Request) {
  let body: { question?: unknown; pageUrl?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { question, pageUrl } = body;
  if (typeof question !== "string" || question.trim().length === 0) {
    return NextResponse.json({ error: "A question is required" }, { status: 400 });
  }

  const fields: Record<string, string> = {
    Question: question.trim(),
    "Submitted At": new Date().toISOString(),
  };
  if (typeof pageUrl === "string" && pageUrl.trim().length > 0) {
    fields["Page URL"] = pageUrl.trim();
  }

  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!baseId || !apiKey) {
    console.error("Question submit: missing AIRTABLE_BASE_ID/AIRTABLE_API_KEY");
    return NextResponse.json({ error: "Server is not configured to save submissions" }, { status: 500 });
  }

  const airtableResponse = await fetch(`https://api.airtable.com/v0/${baseId}/${TABLE_ID}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ records: [{ fields }] }),
  });

  if (!airtableResponse.ok) {
    const errorBody = await airtableResponse.text();
    console.error("Question submit: Airtable write failed", airtableResponse.status, errorBody);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
