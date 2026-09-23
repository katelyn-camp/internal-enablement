import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE = "enablement_auth";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  // Fail closed: a missing SITE_PASSWORD blocks everyone rather than leaving the site open.
  const expected = password ? await sha256Hex(password) : null;
  const cookie = request.cookies.get(AUTH_COOKIE)?.value;
  if (expected && cookie === expected) return NextResponse.next();

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", request.nextUrl.pathname + request.nextUrl.search);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!login|_next/static|_next/image|favicon.ico|first-call-slides/).*)"],
};
