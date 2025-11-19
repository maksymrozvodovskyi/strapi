import Link from "next/link";
import type { Article } from "@/types/article";

export default function ArticleCard({ article }: { article: Article }) {
  const { title, content } = article.attributes;

  return (
    <Link
      href={`/articles/${article.id}`}
      className="block p-4 border rounded-lg hover:bg-gray-50 transition"
    >
      <h2 className="font-semibold text-lg">{title}</h2>

      {content && <p className="text-gray-600 mt-1 line-clamp-2">{content}</p>}
    </Link>
  );
}
