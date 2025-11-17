import {
  getArticlesFromStrapi,
  getArticleFromStrapi,
  getArticlesByCategoryFromStrapi,
  searchArticlesFromStrapi,
} from "../services/strapi.js";

export const getArticles = async (req, res) => {
  try {
    const data = await getArticlesFromStrapi({
      populate: "*",
      sort: "publishedAt:desc",
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to load articles" });
  }
};

export const getArticle = async (req, res) => {
  try {
    const data = await getArticleFromStrapi(req.params.slug);
    res.json(data.data?.[0] || null);
  } catch (err) {
    res.status(500).json({ message: "Failed to load article" });
  }
};

export const getArticlesByCategory = async (req, res) => {
  try {
    const data = await getArticlesByCategoryFromStrapi(req.params.slug);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed category filter" });
  }
};

export const searchArticles = async (req, res) => {
  try {
    const q = req.query.q || "";
    const data = await searchArticlesFromStrapi(q);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Search failed" });
  }
};
