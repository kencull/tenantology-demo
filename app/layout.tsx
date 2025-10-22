import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tenantology Demo",
  description: "Learning Next.js step by step",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {/* Header */}
        <header className="border-b">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <Link href="/" className="font-semibold">
              Tenantology
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="mx-auto max-w-5xl p-6">{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-5xl p-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Tenantology
          </div>
        </footer>
      </body>
    </html>
  );
}
