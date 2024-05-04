import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import dynamic from "next/dynamic";
import { PHProvider } from "@/provider/posthog";

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
  verification: {
    google: 'yHCW3PG8xbXFX4lRTKAIe6sz'
  }
};

const PostHogPageView = dynamic(
  () => import("../components/PostHogPageView/PostHogPageViewComponent"),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={` ${archivo.variable} ${inter.className}`} lang="en">
      <PHProvider>
        <body
          className={`bg-gray-950 dark:bg-gray-950 text-gray-50 flex flex-col scroll-smooth`}
        >
          <PostHogPageView />
          <Navbar />
          {children}
          <Footer />
        </body>
      </PHProvider>
      <GoogleAnalytics gaId="G-0JZLQSPGNN" />
    </html>
  );
}
