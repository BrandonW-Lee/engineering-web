import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-white">
        <div className="flex">
          <Image
            className="mr-6"
            src="/logo.webp"
            width={100}
            height={100}
            alt="the bridge logo footer"
            unoptimized
          />
          <div className="flex flex-col justify-between">
            <Link href="https://www.google.com/maps/place/New+Life+Vision+Church/@34.1306434,-118.2666877,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2b8f02289b76f:0xd7f412546938982d!8m2!3d34.1306434!4d-118.2644937?shorturl=1">
              4226 E. Verdant St. LA, CA 90039
            </Link>
            <div>Worship - 11:30 AM</div>
            <div className="flex gap-4">
              <Link href="https://facebook.com">
                <Image
                  className="bg-white rounded-sm"
                  src="/facebook.svg"
                  alt="facebook logo"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://facebook.com">
                <Image
                  className="bg-white rounded-sm"
                  src="/instagram.svg"
                  alt="instagram logo"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://facebook.com">
                <Image
                  className="bg-white rounded-sm"
                  src="/youtube.svg"
                  alt="youtube logo"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
