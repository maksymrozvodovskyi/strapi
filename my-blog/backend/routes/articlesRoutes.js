import { Router } from "express";
import {
  getArticles,
  getArticle,
  getArticlesByCategory,
  searchArticles,
} from "../controllers/articlesController.js";

const router = Router();

router.get("/", getArticles);
router.get("/:slug", getArticle);
router.get("/filter/category/:slug", getArticlesByCategory);
router.get("/search/all", searchArticles);

export default router;
