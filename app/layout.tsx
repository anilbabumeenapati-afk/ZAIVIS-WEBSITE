import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAIVIS — Intelligence, Engineered",
  description:
    "ZAIVIS builds the data platforms, intelligent software, and AI systems behind what comes next.",
  metadataBase: new URL("https://zaivis.com"),
  openGraph: {
    title: "ZAIVIS — Intelligence, Engineered",
    description: "Data. Intelligence. Impact.",
    siteName: "ZAIVIS",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
