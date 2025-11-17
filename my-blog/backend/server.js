import express from "express";
import cors from "cors";
import articlesRoutes from "./routes/articlesRoutes.js";

export const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/articles", articlesRoutes);

  app.get("/", (req, res) => {
    res.json({ status: "ok" });
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
