"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button size="sm">Logout</Button>
      </div>
    </header>
  );
}
