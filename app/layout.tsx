import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--mono-font",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--display-font",
});

export const metadata: Metadata = {
  title: "Anmol Gupta - Full Stack Engineer & Data Analyst",
  description:
    "Portfolio of Anmol Gupta, full-stack engineer, backend systems builder, and data analyst.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}