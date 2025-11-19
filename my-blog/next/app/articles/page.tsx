import { getArticles } from "@/lib/api/articles";
import ArticleList from "@/components/articles/ArticleList";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Articles</h1>

      {!articles.length && <p className="text-gray-600">No articles found.</p>}

      <ArticleList articles={articles} />
    </div>
  );
}
