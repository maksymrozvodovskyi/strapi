import Link from "next/link";
import type { Article } from "@/types/article";

export default function ArticleCard({ article }: { article: Article }) {
  const preview = article.content?.[0]?.children?.[0]?.text ?? "";
  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/articles/${article.documentId}`}
      className="block p-5 border rounded-xl bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-lg tracking-tight">
          {article.title}
        </h2>

        {article.isFeatured && (
          <span className="text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-700 font-medium">
            Featured
          </span>
        )}
      </div>

      {preview && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{preview}</p>
      )}

      <div className="flex items-center justify-between text-gray-500 text-xs">
        <span>{date}</span>
        <span>{article.views} views</span>
      </div>
    </Link>
  );
}
