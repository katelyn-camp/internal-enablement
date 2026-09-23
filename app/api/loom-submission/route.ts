import { NextResponse } from "next/server";

/** "First Call Loom Submissions" table in the appYeKEx7Sspa121K base. */
const TABLE_ID = "tblrg6TyR8vpBYAoa";

const LOOM_URL_PATTERN = /^https:\/\/(www\.)?loom\.com\/share\/[A-Za-z0-9]+/;

export async function POST(request: Request) {
  let body: { loomUrl?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { loomUrl } = body;

  if (typeof loomUrl !== "string" || !LOOM_URL_PATTERN.test(loomUrl.trim())) {
    return NextResponse.json({ error: "A valid Loom share link is required" }, { status: 400 });
  }

  const fields: Record<string, string> = {
    "Loom Link": loomUrl.trim(),
    "Submitted At": new Date().toISOString(),
  };

  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!baseId || !apiKey) {
    console.error("Loom submission: missing AIRTABLE_BASE_ID/AIRTABLE_API_KEY");
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
    console.error("Loom submission: Airtable write failed", airtableResponse.status, errorBody);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
