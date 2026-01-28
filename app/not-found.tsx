"use client";

import BrandName from "@/components/shared/header/brand-name";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      {/* Logo */}
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={256}
        height={256}
        priority
      />

      {/* Card */}
      <div className="mt-6 w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-sm">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          Page Not Found
        </h1>

        <p className="text-muted-foreground">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Button
          asChild
          variant="outline"
          className="mt-6"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
