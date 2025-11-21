import api from "../axios";

export async function getArticles() {
  try {
    const res = await api.get(`/articles`);
    return res.data.data;
  } catch (err) {
    console.error("GET ARTICLES ERROR:", err);
    return [];
  }
}

export async function getArticle(documentId: string) {
  try {
    const res = await api.get(`/articles/${documentId}`);
    return res.data.data;
  } catch (err) {
    console.error("GET ARTICLE ERROR:", err);
    return null;
  }
}
