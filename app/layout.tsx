'use client'

import "./globals.css";
import { Inter } from 'next/font/google'
import { twMerge } from "tailwind-merge";

import { RecoilRoot } from "recoil";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dukaan UI</title>
      </head>
      <body className={twMerge("bg-background flex relative", inter.className)}>
        <RecoilRoot>
          <Sidebar />
          <div className="w-full">
            <Header />
            {children}
          </div>
        </RecoilRoot>
      </body>
    </html>
  );
}