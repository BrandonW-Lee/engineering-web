import React from 'react';

import { Mail, Menu } from 'lucide-react';

import { Button } from '../ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '../ui/sheet';
import { TypographyH2 } from '../ui/typography/TypographyH2';
import Link from 'next/link';
import GiveButton from '../GiveButton';

export default function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-6">
          <TypographyH2>About</TypographyH2>
        </div>
        <SheetClose asChild>
          <Link href="/mission" passHref className="w-full mt-2">
            <Button variant="link">Mission and Vision</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/leadership" passHref className="w-full mt-2">
            <Button variant="link">Leadership</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/welcome" passHref className="w-full mt-2">
            <Button variant="link">Welcome</Button>
          </Link>
        </SheetClose>
        <div className="mt-6">
          <TypographyH2>Connect</TypographyH2>
        </div>
        <SheetClose asChild>
          <Link href="/announcements" passHref className="w-full mt-2">
            <Button variant="link">Announcements</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/bridge-groups" passHref className="w-full mt-2">
            <Button variant="link">Bridge Groups</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/committees" passHref className="w-full mt-2">
            <Button variant="link">Committees</Button>
          </Link>
        </SheetClose>
        <div className="mt-6">
          <TypographyH2>Media</TypographyH2>
        </div>
        <SheetClose asChild>
          <Link href="/live" passHref className="w-full mt-2">
            <Button variant="link">Live Stream</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/photos" passHref className="w-full mt-2">
            <Button variant="link">Photos</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href="https://www.youtube.com/@nlvcbridge/playlists"
            target="_blank"
            passHref
            className="w-full mt-2"
          >
            <Button variant="link">Sermons</Button>
          </Link>
        </SheetClose>
        <div className="mt-6">
          <SheetFooter>
            <div className="flex gap-2 w-full">
              <SheetClose asChild>
                <Link href="/contact" passHref>
                  <Button>Contact</Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="https://tithe.ly/give_new/www/#/tithely/give-one-time/411909"
                  passHref
                >
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Give
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
