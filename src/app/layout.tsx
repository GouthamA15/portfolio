import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Masna Goutham Kumar — Portfolio",
  description:
    "Full Stack Developer & AI Systems Engineer building scalable systems at the intersection of AI and elegant interfaces.",
  keywords: ["Masna Goutham Kumar", "Portfolio", "Full Stack Developer", "AI Engineer"],
  authors: [{ name: "Masna Goutham Kumar" }],
  openGraph: {
    title: "Masna Goutham Kumar — Portfolio",
    description: "Full Stack Developer & AI Systems Engineer",
    type: "website",
  },
};

import ScrollProgress from "@/components/layout/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
