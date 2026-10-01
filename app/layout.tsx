import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujay Ganorkar — Orinex & Software Systems",
  description:
    "Sujay Ganorkar builds software for document-heavy business operations, operational tooling, and human-supervised AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}