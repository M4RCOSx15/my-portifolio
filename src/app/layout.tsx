import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import {Poppins} from 'next/font/google'
const inter = Poppins({
  subsets: ['latin'],weight:['300','400','500','600']})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M4RCOSx15",
  description: "Marcos is a software developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="PT-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
