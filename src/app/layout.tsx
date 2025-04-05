import { Geist, Geist_Mono } from 'next/font/google';

import Header from '@/components/Header';

import type { Metadata } from 'next';

import '@/styles/index.scss';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Litobzor test',
  description: 'Test task for Litobzor company',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
