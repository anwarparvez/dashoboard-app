"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default  function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
<>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Content Area */}
        <div className="flex-1 md:ml-64">
          <main className="p-4 md:p-6 bg-muted/40 min-h-[calc(100vh-4rem)]">
            {/* Breadcrumb ABOVE content */}
            <Breadcrumbs />

            {/* Page Content */}
            <div className="mt-2">{children}</div>
          </main>
        </div>
</>
  );
}
