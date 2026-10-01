import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujay Ganorkar — Product Builder",
  description:
    "Sujay Ganorkar builds products using AI, product thinking and coding agents.",
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
