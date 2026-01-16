"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "../auth/logout-button";
import { useSession } from "next-auth/react";

export function Header({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full h-16 border-b border-border bg-background">
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-md hover:bg-muted"
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}

          <Link href="/" className="flex items-center gap-3 min-w-0">
            <Image
              src="/images/logo.svg"
              alt="Dashboard App Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Auth Button */}
          {status === "loading" ? null : session ? (
            <LogoutButton />
          ) : (
            <Button asChild size="sm">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
