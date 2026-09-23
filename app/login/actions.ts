"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AUTH_COOKIE = "enablement_auth";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function login(formData: FormData) {
  const password = formData.get("password");
  const redirectTo = formData.get("redirect");
  const safeRedirect = typeof redirectTo === "string" && redirectTo.startsWith("/") ? redirectTo : "/";
  const expected = process.env.SITE_PASSWORD;

  if (typeof password !== "string" || !expected || password !== expected) {
    redirect(`/login?error=1&redirect=${encodeURIComponent(safeRedirect)}`);
  }

  (await cookies()).set(AUTH_COOKIE, await sha256Hex(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(safeRedirect);
}
