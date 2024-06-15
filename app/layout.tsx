import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/ui/globals.css';
import Image from 'next/image';

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
        <header className="flex justify-between bg-accent p-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </header>

        <main className="min-h-screen px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
