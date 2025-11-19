import CreateArticleForm from "@/components/articles/CreateArticleForm";

export default function CreateArticlePage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Create Article</h1>
      <CreateArticleForm />
    </div>
  );
}
