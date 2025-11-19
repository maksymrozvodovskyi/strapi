import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center px-4 py-20">
      <div className="w-full max-w-2xl text-center space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to the Blog
          </h1>
          <p className="text-gray-600 text-lg">
            Create, manage and explore articles powered by Strapi + Next.js.
          </p>
        </div>

        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/articles">Browse Articles</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/articles/create">Create Article</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
