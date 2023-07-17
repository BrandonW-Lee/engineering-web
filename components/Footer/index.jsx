import { Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="bg-black py-8 sm:pt-12 sm:pb-6">
      <div className="container mx-auto text-white">
        <div className="flex flex-col sm:flex-row">
          <Image
            className="mr-6"
            src="/logo.webp"
            width={100}
            height={100}
            alt="the bridge logo footer"
            unoptimized
          />
          <div className="flex flex-col justify-between">
            <Link
              className="mt-3 sm:mt-0"
              href="https://www.google.com/maps/place/New+Life+Vision+Church/@34.1306434,-118.2666877,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2b8f02289b76f:0xd7f412546938982d!8m2!3d34.1306434!4d-118.2644937?shorturl=1"
            >
              4226 E. Verdant St. Los Angeles, CA 90039
            </Link>
            <div className="mt-3 sm:mt-0">Worship - 11:30 AM</div>
            <div className="flex gap-4 mt-3 sm:mt-0">
              <Link href="https://facebook.com/nlvcbridge">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/nlvcbridge">
                <Instagram />
              </Link>
              <Link href="https://www.youtube.com/channel/UC3RUcVHeVhXzG9n62yhVL9w">
                <Youtube />
              </Link>
            </div>
          </div>
          <div className="mt-3 sm:justify-self-end sm:self-end sm:ml-auto sm:mt-0">
            &copy; The Bridge 2023
          </div>
        </div>
      </div>
    </div>
  );
}
