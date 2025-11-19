import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Articles</h1>

      <Link
        href="/articles"
        className="inline-block px-4 py-2 bg-black text-white rounded-md"
      >
        Go to Articles
      </Link>
    </div>
  );
}
