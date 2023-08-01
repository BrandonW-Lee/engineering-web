import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import GiveButton from '../GiveButton';
import Navigation from './Navigation';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

export default function TopNavigationBar() {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="bg-white hidden sticky top-0 sm:block w-full border-b border-gray-200 z-50">
        <div className="container flex justify-between items-center mx-auto">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="the bridge logo"
              width={75}
              height={75}
            />
          </Link>
          <Navigation />
          <GiveButton />
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="bg-white sticky top-0 sm:hidden w-full border-b border-gray-200 z-50">
        <div className="container flex justify-between items-center mx-auto">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="the bridge logo"
              width={75}
              height={75}
            />
          </Link>
          <Button variant="outline" size="icon">
            <Menu />
          </Button>
        </div>
      </div>
    </>
  );
}
