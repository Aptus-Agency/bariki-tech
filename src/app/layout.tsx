import type { Metadata } from "next";
import { Goldman, Open_Sans, Hubot_Sans } from "next/font/google";
import "./globals.css";

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const sans = Hubot_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${sans.variable} ${goldman.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
