import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Mini-Commerce | Shop Online',
    template: '%s | Mini-Commerce',
  },
  description: 'Shop the latest electronics and accessories at Mini-Commerce. Fast shipping and easy returns.',
  keywords: ['electronics', 'online shopping', 'accessories', 'mini-commerce'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mini-commerce.com',
    title: 'Mini-Commerce | Shop Online',
    description: 'Shop the latest electronics and accessories at Mini-Commerce. Fast shipping and easy returns.',
    siteName: 'Mini-Commerce',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini-Commerce | Shop Online',
    description: 'Shop the latest electronics and accessories at Mini-Commerce. Fast shipping and easy returns.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
