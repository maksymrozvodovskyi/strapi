"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { createArticleSchema } from "@/lib/validators/article";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { createArticleAction } from "@/app/articles/create/actions";
import { useTransition } from "react";

export default function CreateArticleForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof createArticleSchema>>({
    resolver: zodResolver(createArticleSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (data: z.infer<typeof createArticleSchema>) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content || "");

      await createArticleAction(formData);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 max-w-xl"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Write content..." rows={6} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Creating..." : "Create Article"}
        </Button>
      </form>
    </Form>
  );
}
