import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import GiveButton from '../GiveButton';
import Navigation from './Navigation';

export default function TopNavigationBar() {
  return (
    <div className="bg-white hidden sticky top-0 sm:block z-10 w-full border-b border-gray-200">
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
  );
}
