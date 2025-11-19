import { getArticles } from "@/lib/api/articles";
import ArticleCard from "@/components/articles/ArticleCard";
import type { Article } from "@/types/article";

export default async function ArticlesPage() {
  const articles: Article[] = await getArticles();

  return (
    <div className="px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">Articles</h1>

        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
