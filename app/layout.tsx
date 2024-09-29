import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
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
  title: "Travel Website For Your Business",
  description: "Expert guidance and support for Muslims seeking Hijrah and relocation to Muslim-majority countries. Get personalized consultation, visa assistance, relocation planning, cultural orientation, and community connections.",
  keywords: "Hijrah, Muslim relocation, expert support, visa assistance, cultural orientation, Muslim-majority countries, relocation planning, community connections",
  openGraph: {
  title: "Travel Website For Your Business",
    description: "Expert guidance and support for Muslims seeking Hijrah and relocation to Muslim-majority countries. Get personalized consultation, visa assistance, relocation planning, cultural orientation, and community connections.",
    url: "https://the-musaafir.vercel.app/",
    images: "./og.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
