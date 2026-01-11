import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jefferson Umanzor | About Me",
  description:
    "About Jefferson Umanzor – experience, projects, and interests in computer science, data science, and mathematics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-card/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
              <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Jefferson Umanzor
              </Link>
              <nav className="flex items-center gap-4 text-sm text-muted-foreground">
                <Link className="transition hover:text-white" href="/">Home</Link>
                <Link className="transition hover:text-white" href="/experience">Experience</Link>
                <Link className="transition hover:text-white" href="/project">Projects</Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
