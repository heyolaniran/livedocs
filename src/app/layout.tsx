import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Satoshi = localFont({
  src: "./fonts/SatoshiBold.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen ${Satoshi.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
