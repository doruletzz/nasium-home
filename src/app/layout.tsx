import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nasium - Modern Gym Tracking App",
  description: "Gym tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={` ${archivo.variable} ${inter.className} scroll-smooth `}
      lang="en"
    >
      <body
        className={`bg-gray-950 dark:bg-gray-950 text-gray-50 flex flex-col`}
      >
        <Navbar />
        {children}
        <footer className="gap-x-2 gap-y-16 bg-gray-950 xl:mx-48 py-6 pt-12 mx-4 lg:mx-12 md:mx-12 sm:mx-8 border-t border-gray-700 grid sm:grid-cols-4 grid-cols-2">
          <Link
            href="/"
            className="text-2xl font-display italic hover:-translate-y-0.5 duration-300"
          >
            NASIUM
          </Link>
          <div className="flex flex-col gap-4">
            <Link
              target="_blank"
              href="https://play.google.com/store/apps/details?id=coach.nasium.twa"
              className="hover:-translate-y-0.5 duration-300 h-auto"
            >
              <Image
                className="w-24 border shadow-indigo-900 border-gray-700  rounded-lg"
                height={48}
                width={240}
                alt="google-play"
                src="/google-play.webp"
              />
            </Link>
            <Image
              className="w-24 opacity-75 border shadow-indigo-900 border-gray-700  rounded-lg"
              height={48}
              width={240}
              alt="app-store"
              src="/app-store.png"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Link
              className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
              href="/onboarding"
            >
              Onboarding
            </Link>
            <Link
              className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
              href="/onboarding"
            >
              Articles
            </Link>
            <Link
              className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
              href="/onboarding"
            >
              Pricing
            </Link>
            <Link
              className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
              href="/onboarding"
            >
              About
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
              href="/onboarding"
            >
              Term of use
            </Link>
            <Link
              className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
              href="/onboarding"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm opacity-75 hover:opacity-100 hover:-translate-y-0.5"
              href="/onboarding"
            >
              Contact
            </Link>
          </div>

          <span className="sm:col-span-4 col-span-2 text-center text-xs opacity-90">
            Copyright © 2024 NASIUMSOLUTIONS SRL. All rights reserved.
          </span>
        </footer>
      </body>
    </html>
  );
}
