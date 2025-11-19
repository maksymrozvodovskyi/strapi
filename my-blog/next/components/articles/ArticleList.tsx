import ArticleCard from "./ArticleCard";
import type { Article } from "@/types/article";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="space-y-4">
      {articles.map((a) => (
        <ArticleCard key={a.id} article={a} />
      ))}
    </div>
  );
}
