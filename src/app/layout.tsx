import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientRoot from './clientRoot';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Blog Dashboard',
  description: 'A simple blog dashboard built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}