import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/animated/navbar";
import { Footer } from "@/components/sections/footer";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title:
    "Techspire Hub | Empowering Businesses with Scalable Digital Solutions",
  description:
    "Techspire Hub specializes in web development, digital marketing, ERP software, and custom software solutions. We help businesses innovate, scale, and lead through technology.",

  keywords: [
    "web development",
    "digital marketing",
    "ERP software",
    "SAP development",
    "custom software development",
    "third-party integrations",
    "CRM development",
    "Techspire Hub",
    "SaaS development",
    "business automation",
    "enterprise software",
  ],

  authors: { name: "Techspire Hub" },
  creator: "Techspire Hub",
  publisher: "Techspire Hub",

  metadataBase: new URL("https://techspire-hub.vercel.app/"),
  category: "Technology & Digital Services",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <main className="w-full space-y-20">
            <Navbar />
            <div className="min-h-screen pt-32 md:pt-40 space-y-20 md:space-y-40 mx-auto container px-4 md:px-6 lg:px-4">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
