import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/ui/globals.css';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'To-Do App',
  description: 'A simple to-do app built with Next.js and TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header className="flex justify-between bg-accent p-4 md:px-8">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </Link>
        </header>

        <main className="min-h-screen max-w-screen-md mx-auto px-4 py-8 md:px-8 md:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
