"use client";

import { useTransition } from "react";
import { loginAction } from "../(auth)/actions";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/lib/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("identifier", data.identifier);
      formData.append("password", data.password);

      const result = await loginAction(formData);

      if (result.success) {
        window.location.href = "/articles";
      } else {
        form.setError("identifier", { message: result.error });
        form.setError("password", { message: result.error });
      }
    });
  };

  return (
    <div className="flex justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-center">
          Welcome back
        </h1>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={isPending}
                className="w-full text-base font-medium"
              >
                {isPending ? "Signing in..." : "Login"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
