"use client";

import { Activity } from "react";
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

export default function CreateArticleForm() {
  const form = useForm<z.infer<typeof createArticleSchema>>({
    resolver: zodResolver(createArticleSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  return (
    <Activity>
      <Form {...form}>
        <form
          action={async (formData: FormData) => {
            await createArticleAction(formData);
          }}
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
                  <Textarea
                    placeholder="Write content..."
                    rows={6}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Activity>
            <Button type="submit" className="w-full relative" aria-busy="false">
              <span className="data-[state=idle]:block data-[state=pending]:hidden">
                Create Article
              </span>

              <span className="data-[state=pending]:block data-[state=idle]:hidden">
                Creating...
              </span>
            </Button>
          </Activity>
        </form>
      </Form>
    </Activity>
  );
}
