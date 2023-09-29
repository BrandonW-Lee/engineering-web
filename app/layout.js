import '../globals.css';
import { Inter } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NLVC | THE BRIDGE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
      <Script src="https://tithe.ly/widget/v3/give.js?3" />
    </html>
  );
}
