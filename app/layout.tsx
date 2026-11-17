import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NTA Lavamos Laundry Shop | Fresh, clean, and cared for',
  description: 'A friendly neighborhood laundry service in Bato, Camarines Sur. Service details and rates are being confirmed.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
