import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kongnyuy Sidonne - Web Developer Portfolio',
  description: 'Professional portfolio of Kongnyuy Sidonne Vernyuy - Web Developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'web developer, react, nextjs, typescript, portfolio, cameroon developer',
  authors: [{ name: 'Kongnyuy Sidonne Vernyuy' }],
  openGraph: {
    title: 'Kongnyuy Sidonne - Web Developer Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kongnyuy Sidonne - Web Developer Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}