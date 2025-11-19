"use client";

import { useTransition } from "react";
import { logoutAction } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="outline"
      onClick={() =>
        startTransition(async () => {
          await logoutAction();
          window.location.href = "/login";
        })
      }
      disabled={isPending}
    >
      Logout
    </Button>
  );
}
