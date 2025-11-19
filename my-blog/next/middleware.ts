import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const jwt = request.cookies.get("jwt")?.value;

  const pathname = request.nextUrl.pathname;

  if (pathname === "/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/articles") && !jwt) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
