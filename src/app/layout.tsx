import type { Metadata } from "next";
import { Goldman, Open_Sans } from "next/font/google";
import "./globals.css";

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bariki Tech",
  description: "Bariki Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${goldman.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
