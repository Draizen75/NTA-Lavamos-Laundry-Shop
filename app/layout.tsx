import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NTA Lavamos Laundry Shop | Bato, Camarines Sur",
  description: "Find NTA Lavamos Laundry Shop on Poblacion Road in Bato, Camarines Sur. View opening hours, call the shop, and get directions with Google Maps.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
