import { getArticle } from "@/lib/api/articles";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default async function ArticleDetailsPage({ params }: ArticlePageProps) {
  const article = await getArticle(params.id);

  const { title, content, publishedAt } = article.attributes;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="text-gray-500 text-sm">
        {new Date(publishedAt).toLocaleDateString()}
      </p>

      <p className="text-lg leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
}
