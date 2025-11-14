import type { Metadata } from "next";
import {Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Reason8",
  description: " Reason8 Media Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${lexend.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
