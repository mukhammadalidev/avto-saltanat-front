"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
        <Toaster position="top-center" />
        <QueryClientProvider client={queryClient}>{children}
        <ReactQueryDevtools initialIsOpen={false} />

        </QueryClientProvider>
        </Theme>
      </body>
    </html>
  );
}