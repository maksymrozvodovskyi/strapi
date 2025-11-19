"use server";

import { loginRequest } from "@/lib/api/auth";
import { setAuthCookie, removeAuthCookie } from "@/lib/auth/cookies";
import { loginSchema } from "@/lib/validators/auth";

export async function loginAction(formData: FormData) {
  const raw = {
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  };

  const validated = loginSchema.safeParse(raw);
  if (!validated.success) {
    return { success: false, error: "Invalid form data" };
  }

  const data = await loginRequest(
    validated.data.identifier,
    validated.data.password
  );

  if (!data || !data.jwt) {
    return { success: false, error: "Invalid identifier or password" };
  }

  await setAuthCookie(data.jwt);

  return { success: true };
}

export async function logoutAction() {
  await removeAuthCookie();
  return { success: true };
}
