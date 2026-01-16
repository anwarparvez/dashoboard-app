"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import { BtclIcon } from "@/components/brand/btcl-logo";


export function Header({
  onMenuClick,
  title = "Dashboard",
}: {
  onMenuClick?: () => void;
  title?: string;
}) {
  return (
    <header className="sticky top-0 z-50 w-full h-16 border-b border-border bg-background">
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0">
            <BtclIcon className="h-8 w-8 text-primary shrink-0" />

            <div className="leading-tight">
              <span className="font-semibold text-primary">BTCL</span>
              <span className="ml-1 text-muted-foreground hidden sm:inline">
                Dashboard
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button size="sm" variant="outline">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
