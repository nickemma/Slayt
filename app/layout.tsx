import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slayt.app"),

  title: {
    default: "Family Chore App | SLAYT Turns Chores into Adventures",
    template: "%s | SLAYT",
  },

  description:
    "Family chore app that makes responsibilities fun for the whole family. Assign tasks, track progress in real time, reward kids, and start a free trial today.",

  keywords: [
    "family chore app",
    "kids responsibility app",
    "task management for families",
    "chore tracker",
    "reward system for kids",
    "parenting app",
  ],

  authors: [{ name: "SLAYT" }],
  creator: "SLAYT",
  publisher: "SLAYT",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "j9Q3L3d6Ugxp7ZSJF6JrFaQ3bOJuYkKPPCeh4iPvbHI",
  },

  openGraph: {
    type: "website",
    url: "https://slayt.app",
    title: "Family Chore App | SLAYT Turns Chores into Adventures",
    description:
      "Assign tasks, track progress in real time, reward kids, and turn daily chores into meaningful habits.",
    siteName: "SLAYT",
    images: [
      {
        url: "/og-image.png", // create this in /public
        width: 1200,
        height: 630,
        alt: "SLAYT Family Chore App",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Family Chore App | SLAYT",
    description:
      "Turn chores into habits kids actually follow. Assign tasks, reward progress, and build responsibility.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
