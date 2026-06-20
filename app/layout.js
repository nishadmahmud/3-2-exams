import Link from "next/link";
import Navigation from "../components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Software Engineering & Design Patterns",
  description: "Study materials and question banks",
  openGraph: {
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--bg)]">
        <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--line)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-base md:text-lg text-[var(--dark)]">
              SE & DP Study
            </Link>
            <Navigation />
          </div>
        </header>
        <main className="flex-1 max-w-5xl w-full mx-auto px-2 sm:px-6 py-4 pb-24 md:pb-6">
          {children}
        </main>
      </body>
    </html>
  );
}
