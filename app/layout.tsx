import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://onirubusinessnetwork.com"),
  title: "ONIRU Business Network - Coming Soon",
  description:
    "ONIRU Business Network is coming soon. Stay tuned for something extraordinary.",
  keywords:
    "ONIRU Business Network, business networking, professional connections, entrepreneurs, startups, business community, collaboration, innovation",
  authors: [{ name: "ONIRU Business Network" }],
  openGraph: {
    title: "ONIRU Business Network - Coming Soon",
    description:
      "ONIRU Business Network is coming soon. Stay tuned for something extraordinary.",
    url: "https://onirubusinessnetwork.com",
    siteName: "ONIRU Business Network",
    images: "/onirubusinessnetwork.jpg",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONIRU Business Network - Coming Soon",
    description:
      "IRU Business Network is coming soon. Stay tuned for something extraordinary.",
    images: ["/onirubusinessnetwork.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
