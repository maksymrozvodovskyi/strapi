"use server";

import api from "@/lib/axios";
import { createArticleSchema } from "@/lib/validators/article";
import { redirect } from "next/navigation";

export async function createArticleAction(formData: FormData) {
  const raw = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const parsed = createArticleSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error("Validation failed");
  }

  await api.post("/articles", {
    data: parsed.data,
  });

  redirect("/articles");
}
