import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white/50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          My App
        </Link>

        <nav className="flex gap-6 text-sm text-gray-700">
          <Link href="/articles">Articles</Link>
          <Link href="/articles/create">Create</Link>
        </nav>
      </div>
    </header>
  );
}
