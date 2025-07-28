import type { Metadata } from "next";
import { Urbanist, Figtree } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
});

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fametonic - Turn Social Media Into a Profitable Career',
  description:
    'Discover your way to success with Fametonic. Start growing your influence right away with easy-to-follow lessons, viral TikToks and Reels, and expert-led courses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${urbanist.variable} ${figtree.variable} antialiased bg-black text-white`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
