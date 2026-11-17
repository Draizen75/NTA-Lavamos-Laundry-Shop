import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NTA Lavamos Laundry Shop | Fresh, clean, and cared for",
  description: "A friendly neighborhood laundry shop concept for NTA Lavamos. Contact the shop to confirm services, rates, and operating hours.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
