import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FooterNavy from "@/components/FooterNavy";
import AnalyticsProvider from "@/components/AnalyticsProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Dreams Realty | Most Trusted Realtor in Bangalore",
  description: "Buy or rent verified luxury properties in Bangalore with Dreams Realty, the most trusted realtor. Expert guidance to find your perfect home.",
};

import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#F8F5ED] text-[#1F3A5F] antialiased selection:bg-[#A7B8CC] selection:text-[#1F3A5F] min-h-screen`}>
        <SmoothScrollProvider>
          <AnalyticsProvider />
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
          <FooterNavy />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
