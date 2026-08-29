import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Noto_Serif_Devanagari } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const notoSans = Noto_Sans_Devanagari({
  variable: "--font-noto-sans",
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSerif = Noto_Serif_Devanagari({
  variable: "--font-noto-serif",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className={`${notoSans.variable} ${notoSerif.variable} scroll-smooth`}>
      <body className="antialiased bg-dark text-light min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
