"use server";

import { cookies } from "next/headers";

export async function setAuthCookie(jwt: string) {
  const cookieStore = await cookies();

  cookieStore.set("jwt", jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("jwt");
}

export async function getAuthToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("jwt")?.value;
}
