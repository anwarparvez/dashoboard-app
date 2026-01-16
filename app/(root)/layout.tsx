
'use client";'
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 bg-muted/40">
        {/* Page Content */}
        <div className="mt-2">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
