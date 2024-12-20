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
  title: "Landscaping Services | Security Service & Garden Design",
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
        <title>Landscaping Services | Security Service & Garden Design</title>
        <meta
          name="description"
          content="landscaping and security services. Contact us for expert garden design and 24/7 security solutions in Kerala."
        />
        <meta
          name="keywords"
          content="landscaping, security services, garden design"
        />
        <meta name="robots" content="index, follow" />

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
