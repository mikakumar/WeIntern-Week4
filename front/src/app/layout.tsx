import type { Metadata } from "next";
import "./globals.css";

import {DM_Serif_Display} from '@next/font/google';
import { ContextProvider } from "../Context";

import Navbar from "@/components/navbar";

const dmSerif = DM_Serif_Display({
  subsets: ['latin'], 
  weight: ['400'], 
  variable: '--font-dm-serif', 
});

export const metadata: Metadata = {
  title: "The Gold App",
  description: "Generated by Mihika + MERN stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable}`}>
        <ContextProvider>
        <Navbar />
        {children}
        </ContextProvider>
      </body>
    </html>
  );
}
