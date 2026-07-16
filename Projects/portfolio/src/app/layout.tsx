import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
