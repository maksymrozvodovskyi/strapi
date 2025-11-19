"use server";

import api from "@/lib/axios";
import { createArticleSchema } from "@/lib/validators/article";
import { redirect } from "next/navigation";
import { getAuthToken } from "@/lib/auth/cookies";
import { slugify } from "@/lib/utils";

export async function createArticleAction(formData: FormData) {
  const raw = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const parsed = createArticleSchema.safeParse(raw);
  if (!parsed.success) {
    console.error("VALIDATION ERROR:", parsed.error.flatten());
    throw new Error("Validation failed");
  }

  const jwt = await getAuthToken();
  if (!jwt) throw new Error("Unauthorized — no JWT");

  const slug = slugify(parsed.data.title);

  const res = await api.post(
    "/articles",
    {
      data: {
        title: parsed.data.title,
        content: parsed.data.content,
        slug,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  console.log("ARTICLE CREATED:", res.data);

  redirect("/articles");
}
