import './globals.css';
import { Inter } from 'next/font/google';

import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NLVC | THE BRIDGE',
  description: 'Welcome to the Bridge. A place to connect!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-yellow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
