import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/widgtes/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silder",
  description: "Slider",
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black text-gray-400 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
