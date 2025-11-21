import { getArticle } from "@/lib/api/articles";
import Link from "next/link";

interface PageProps {
  params: Promise<{ documentId: string }>;
}

export default async function ArticleDetailsPage({ params }: PageProps) {
  const { documentId } = await params;

  const article = await getArticle(documentId);

  if (!article) {
    return <p className="text-red-500">Article not found</p>;
  }

  const preview = article.content?.[0]?.children?.[0]?.text ?? "";

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{article.title}</h1>

        <Link
          href={`/articles/${article.documentId}/edit`}
          className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Edit
        </Link>
      </div>

      <p className="text-gray-500 text-sm">
        {new Date(article.publishedAt).toLocaleDateString("en-US")}
      </p>

      <p className="text-lg leading-relaxed whitespace-pre-line">{preview}</p>
    </div>
  );
}
