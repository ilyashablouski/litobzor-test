import { Inter } from 'next/font/google';

import Header from '@/shared/components/Header';

import type { Metadata } from 'next';

import '@/styles/index.scss';

const interSans = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
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
    <html lang="en" className={`${interSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
