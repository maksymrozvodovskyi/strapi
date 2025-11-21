"use client";

import { createArticleAction } from "@/app/articles/create/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateArticleForm() {
  return (
    <form action={createArticleAction} className="space-y-6 max-w-xl">
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <Input name="title" required />
      </div>

      <div>
        <label className="block mb-1 font-medium">Content</label>
        <Textarea name="content" rows={6} required />
      </div>

      <Button type="submit" className="w-full">
        Create Article
      </Button>
    </form>
  );
}
