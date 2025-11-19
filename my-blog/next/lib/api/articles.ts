import api from "@/lib/axios";
import type { Article } from "@/types/article";

export async function getArticles(): Promise<Article[]> {
  const res = await api.get("/articles");
  return res.data.data;
}

export async function getArticle(id: string): Promise<Article> {
  const res = await api.get(`/articles/${id}`);
  return res.data.data;
}
