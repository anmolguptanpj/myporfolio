import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--body-font",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--mono-font",
});

export const metadata: Metadata = {
  title: {
    default: "Anmol Gupta | Full-Stack Engineer & Data Analyst",
    template: "%s | Anmol Gupta"
  },
  description: "Portfolio of Anmol Gupta, a Full-Stack Engineer and Data Analyst building high-performance multi-vendor ecommerce platforms, ML systems, and inventory analytics in Delhi, India.",
  keywords: [
    "Anmol Gupta",
    "Full-Stack Engineer",
    "Backend Developer Delhi",
    "Data Analyst",
    "React Developer",
    "Next.js Developer",
    "FastAPI Python Developer",
    "Software Engineer Portfolio",
    "Delhi NCR Software Developer",
    "Ecommerce Platform Builder",
    "ETL Analytics Engineer"
  ],
  authors: [{ name: "Anmol Gupta", url: "https://anmolgupta-two.vercel.app" }],
  creator: "Anmol Gupta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anmolgupta-two.vercel.app",
    title: "Anmol Gupta | Full-Stack Engineer & Data Analyst",
    description: "Portfolio of Anmol Gupta, a Full-Stack Engineer and Data Analyst building high-performance multi-vendor ecommerce platforms, ML systems, and inventory analytics in Delhi, India.",
    siteName: "Anmol Gupta Portfolio",
    images: [
      {
        url: "https://anmolgupta-two.vercel.app/icon.svg",
        width: 512,
        height: 512,
        alt: "Anmol Gupta Portfolio Logo",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Anmol Gupta | Full-Stack Engineer & Data Analyst",
    description: "Full-Stack Software Engineer specializing in scalable backends, database architecture (SQL/NoSQL), and Python ML analytics.",
    images: ["https://anmolgupta-two.vercel.app/icon.svg"],
  },
  alternates: {
    canonical: "https://anmolgupta-two.vercel.app",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anmol Gupta",
  "jobTitle": "Full-Stack Engineer & Data Analyst",
  "url": "https://anmolgupta-two.vercel.app",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi",
    "addressCountry": "India"
  },
  "sameAs": [
    "https://github.com/anmolguptanpj",
    "https://www.linkedin.com/in/itheanmolgupta/",
    "https://anmolgupta-two.vercel.app/"
  ],
  "description": "Full-Stack Engineer building production multi-vendor platforms, ML pipelines, and inventory analytics systems. Experienced in Next.js, FastAPI, Node.js, and SQL/NoSQL databases.",
  "knowsAbout": [
    "Software Engineering",
    "Full-Stack Development",
    "Database Architecture",
    "Data Analytics",
    "Machine Learning",
    "Next.js",
    "React.js",
    "FastAPI",
    "Python",
    "TypeScript",
    "SQL",
    "MongoDB",
    "PostgreSQL"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
