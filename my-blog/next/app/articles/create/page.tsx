import CreateArticleForm from "@/components/articles/CreateArticleForm";

export default function CreateArticlePage() {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Create Article</h1>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <CreateArticleForm />
        </div>
      </div>
    </div>
  );
}
