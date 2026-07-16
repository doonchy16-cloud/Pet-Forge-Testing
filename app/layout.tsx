import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pet-forge-testing.vercel.app"),
  title: "Pet Forge — MVP Version for Windows",
  description: "Download the Pet Forge MVP Version for Windows and begin raising extraordinary companions.",
  openGraph: {
    title: "Pet Forge — MVP Version",
    description: "Build a world. Raise a legend. Download Pet Forge for Windows.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 864, alt: "Pet Forge MVP Version — Build a world. Raise a legend." }],
  },
  twitter: { card: "summary_large_image", title: "Pet Forge — MVP Version", description: "Build a world. Raise a legend.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
