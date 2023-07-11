import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import GiveButton from '../GiveButton';

export default function TopNavigationBarDesktop() {
  return (
    <div className="hidden sm:block z-10 w-full border-b border-gray-200">
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="the bridge logo"
            width={75}
            height={75}
          />
        </Link>
        <div>
          <Link href="/welcome" className="mx-3 hover:text-yellow">
            Welcome
          </Link>
          <Link href="/mission" className="mx-3 hover:text-yellow">
            Mission
          </Link>
          <Link href="/staff" className="mx-3 hover:text-yellow">
            Staff
          </Link>
          <Link href="/committees" className="mx-3 hover:text-yellow">
            Committees
          </Link>
          <Link href="/worship" className="mx-3 hover:text-yellow">
            Worship
          </Link>
        </div>
        <GiveButton />
      </div>
    </div>
  );
}
