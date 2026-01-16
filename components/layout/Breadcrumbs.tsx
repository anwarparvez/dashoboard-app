"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-4">
      <Link href="/dashboard" className="hover:text-foreground">
        Dashboard
      </Link>

      {segments.slice(1).map((segment, index) => {
        const href = "/dashboard/" + segments.slice(1, index + 2).join("/");

        return (
          <span key={href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link
              href={href}
              className="capitalize hover:text-foreground"
            >
              {segment.replace(/-/g, " ")}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
