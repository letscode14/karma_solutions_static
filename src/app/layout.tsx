import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MenuProvider } from "./context/MenuContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Professional Landscaping Services | Security Service & Garden Design",
  description:
    "Expert landscaping and security services in Kerala. Contact us for garden design, lawn care, and 24/7 security solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Professional Landscaping Services | Security Service & Garden Design
        </title>
        <meta
          name="description"
          content="Expert landscaping and security services in Kerala. Contact us for garden design, lawn care, and 24/7 security solutions."
        />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
