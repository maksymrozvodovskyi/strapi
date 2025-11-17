import axios from "axios";

const api = axios.create({
  baseURL: process.env.STRAPI_API,
});

export const getArticlesFromStrapi = (params = {}) =>
  api.get("/articles", { params }).then((res) => res.data);

export const getArticleFromStrapi = (slug) =>
  api
    .get("/articles", {
      params: {
        "filters[slug][$eq]": slug,
        populate: "*",
      },
    })
    .then((res) => res.data);

export const getArticlesByCategoryFromStrapi = (category) =>
  api
    .get("/articles", {
      params: {
        "filters[category][slug][$eq]": category,
        populate: "*",
      },
    })
    .then((res) => res.data);

export const searchArticlesFromStrapi = (q) =>
  api
    .get("/articles", {
      params: {
        "filters[title][$contains]": q,
        populate: "*",
      },
    })
    .then((res) => res.data);
