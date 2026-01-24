import type { Metadata } from "next";
import { Kanit, Outfit, Caveat } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GraPow | Modern Thai & Bar",
  description: "Experience the soul of Riverside nightlife. Modern Thai fusion, craft cocktails, and cinematic vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${outfit.variable} ${caveat.variable} antialiased font-[family-name:var(--font-outfit)] bg-[#050505] text-[#f0f0f0]`}
      >
        {children}
      </body>
    </html>
  );
}
