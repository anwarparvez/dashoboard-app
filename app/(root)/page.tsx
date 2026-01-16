"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Welcome to the Dashboard Portal
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A centralized platform for monitoring services, managing data,
          and accessing operational insights efficiently.
        </p>

        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 space-y-2">
            <h3 className="font-semibold text-lg">Centralized Monitoring</h3>
            <p className="text-sm text-muted-foreground">
              View service status, KPIs, and operational summaries in one place.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h3 className="font-semibold text-lg">Secure Access</h3>
            <p className="text-sm text-muted-foreground">
              Role-based access control with secure authentication.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <h3 className="font-semibold text-lg">Actionable Insights</h3>
            <p className="text-sm text-muted-foreground">
              Data-driven insights to support faster and better decisions.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Info Section */}
      <section className="bg-background border rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Designed for Reliability & Performance
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Built using modern web technologies to ensure scalability,
          performance, and ease of use across all devices.
        </p>
      </section>
    </div>
  );
}
