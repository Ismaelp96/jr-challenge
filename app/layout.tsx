import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Coffee Listing',
  description: 'Simple coffee listing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>
        
        {children}

      </body>
    </html>
  );
}
