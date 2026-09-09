import { NextResponse } from "next/server";
import {
  KnowledgeCheckQuestion,
  M1_KNOWLEDGE_CHECK,
  M2_KNOWLEDGE_CHECK,
  M3_MANAGED_SERVICES_KNOWLEDGE_CHECK,
  M4_MANAGED_SERVICES_KNOWLEDGE_CHECK,
  M5_MANAGED_SERVICES_KNOWLEDGE_CHECK,
  M6_MANAGED_SERVICES_KNOWLEDGE_CHECK,
  M7_MANAGED_SERVICES_KNOWLEDGE_CHECK,
  M9_PROMPT_TAXONOMY_KNOWLEDGE_CHECK,
  M10_COMPETITIVE_POSITIONING_KNOWLEDGE_CHECK,
  M11_EXTERNAL_CONTENT_KNOWLEDGE_CHECK,
  M3_SALES_KNOWLEDGE_CHECK,
  M4_SALES_KNOWLEDGE_CHECK,
  M5_SALES_KNOWLEDGE_CHECK,
  M6_SALES_KNOWLEDGE_CHECK,
  M7_SALES_KNOWLEDGE_CHECK,
  M8_SALES_KNOWLEDGE_CHECK,
} from "@/app/components/curriculum/lessons/knowledge-check-data";

/**
 * Maps each KnowledgeCheckButton `id` to its question set and the Airtable table it
 * grades into. Table IDs are from the "appYeKEx7Sspa121K" base's "M# [DT]" (delivery-team)
 * and "M# [Sales]" tables, whose fields (Q1..Qn, "Q# Correct", "Score") are index-aligned
 * with each question array below by design.
 */
const KNOWLEDGE_CHECKS: Record<string, { tableId: string; questions: KnowledgeCheckQuestion[] }> = {
  m1: { tableId: "tblbUJLGZF06PJBPJ", questions: M1_KNOWLEDGE_CHECK },
  m2: { tableId: "tbl4EGX9ZDIXfadZB", questions: M2_KNOWLEDGE_CHECK },
  "m2-sales": { tableId: "tbl4S1iJgyER0nRBx", questions: M2_KNOWLEDGE_CHECK },
  "m3-managed-services": { tableId: "tblc1CFcNwvGz6oZK", questions: M3_MANAGED_SERVICES_KNOWLEDGE_CHECK },
  "m4-managed-services": { tableId: "tblypIKVjyrftCcAx", questions: M4_MANAGED_SERVICES_KNOWLEDGE_CHECK },
  "m5-managed-services": { tableId: "tbl9BJhwCmawAUbSk", questions: M5_MANAGED_SERVICES_KNOWLEDGE_CHECK },
  "m6-managed-services": { tableId: "tblG6lrlLW7vhDzC4", questions: M6_MANAGED_SERVICES_KNOWLEDGE_CHECK },
  "m7-managed-services": { tableId: "tblwUEWV6i97wydUS", questions: M7_MANAGED_SERVICES_KNOWLEDGE_CHECK },
  "m9-prompt-taxonomy": { tableId: "tbl2MwJ2uD9eulCxz", questions: M9_PROMPT_TAXONOMY_KNOWLEDGE_CHECK },
  "m10-competitive-positioning": { tableId: "tblyUiWhXSe65N2Of", questions: M10_COMPETITIVE_POSITIONING_KNOWLEDGE_CHECK },
  "m11-external-content": { tableId: "tblq14kVUu0UQJwWf", questions: M11_EXTERNAL_CONTENT_KNOWLEDGE_CHECK },
  "m3-sales": { tableId: "tblpEGPAiuScuinib", questions: M3_SALES_KNOWLEDGE_CHECK },
  "m4-sales": { tableId: "tblRD6WDgcz5Srixs", questions: M4_SALES_KNOWLEDGE_CHECK },
  "m5-sales": { tableId: "tblgz4RrROcJm5Ko9", questions: M5_SALES_KNOWLEDGE_CHECK },
  "m6-sales": { tableId: "tblomIyj8lM2eC8Dz", questions: M6_SALES_KNOWLEDGE_CHECK },
  "m7-sales": { tableId: "tblk3zLIJMqthebYd", questions: M7_SALES_KNOWLEDGE_CHECK },
  "m8-sales": { tableId: "tblGqt36XHPNMGk3N", questions: M8_SALES_KNOWLEDGE_CHECK },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { checkId?: unknown; email?: unknown; answers?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { checkId, email, answers } = body;

  if (typeof checkId !== "string" || !(checkId in KNOWLEDGE_CHECKS)) {
    return NextResponse.json({ error: "Unknown knowledge check" }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }
  const { tableId, questions } = KNOWLEDGE_CHECKS[checkId];
  if (!Array.isArray(answers) || answers.length !== questions.length) {
    return NextResponse.json({ error: "Answers don't match this knowledge check" }, { status: 400 });
  }

  const fields: Record<string, string | boolean | number> = {
    Email: email,
    "Submitted At": new Date().toISOString(),
  };

  let score = 0;
  let gradedCount = 0;
  questions.forEach((question, i) => {
    const fieldName = `Q${i + 1}`;
    const answer = answers[i];

    if (question.kind === "free-response") {
      fields[fieldName] = typeof answer === "string" ? answer : "";
      return;
    }

    gradedCount += 1;
    const selectedIndex = typeof answer === "number" ? answer : -1;
    const selectedOption = question.options?.[selectedIndex];
    // Omit the field entirely on a bad/missing index — an empty string isn't a valid
    // Single select choice and Airtable rejects it as an attempt to create a blank option.
    if (selectedOption) fields[fieldName] = selectedOption.label;
    fields[`${fieldName} Correct`] = selectedOption?.correct === true;
    if (selectedOption?.correct) score += 1;
  });
  fields.Score = score;

  const baseId = process.env.AIRTABLE_BASE_ID;
  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!baseId || !apiKey) {
    console.error("Knowledge check submit: missing AIRTABLE_BASE_ID/AIRTABLE_API_KEY");
    return NextResponse.json({ error: "Server is not configured to save submissions" }, { status: 500 });
  }

  const airtableResponse = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ records: [{ fields }] }),
  });

  if (!airtableResponse.ok) {
    const errorBody = await airtableResponse.text();
    console.error("Knowledge check submit: Airtable write failed", airtableResponse.status, errorBody);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, score, total: gradedCount });
}
