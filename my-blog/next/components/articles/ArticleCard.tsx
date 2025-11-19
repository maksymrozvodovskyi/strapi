import Link from "next/link";
import type { Article } from "@/types/article";

export default function ArticleCard({ article }: { article: Article }) {
  const preview = article.content?.[0]?.children?.[0]?.text ?? "";

  return (
    <div className="block p-4 border rounded-lg hover:bg-gray-50 transition">
      <h2 className="font-semibold text-lg">{article.title}</h2>

      {preview && <p className="text-gray-600 mt-1 line-clamp-2">{preview}</p>}
    </div>
  );
}
