import Link from "next/link";
import LogoutButton from "@/components/auth/LogoutButton";
import { getAuthToken } from "@/lib/auth/cookies";

export default async function Header() {
  const jwt = await getAuthToken();
  const isLoggedIn = Boolean(jwt);

  return (
    <header className="border-b bg-white/50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg tracking-tight">
          My App
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-gray-700">
            <Link
              href="/articles"
              className="hover:text-black transition font-medium"
            >
              Articles
            </Link>
            <Link
              href="/articles/create"
              className="hover:text-black transition font-medium"
            >
              Create
            </Link>
          </nav>

          {isLoggedIn && <LogoutButton />}
        </div>
      </div>
    </header>
  );
}
