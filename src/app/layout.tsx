import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import React from "react";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Gestaltcoach Cathrine Gåre Opstad",
  description: "Gestaltcoach Cathrine Gåre Opstad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
