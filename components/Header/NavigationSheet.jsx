import React from "react";

import { Mail, Menu } from "lucide-react";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";
import { TypographyH2 } from "../ui/typography/TypographyH2";
import Link from "next/link";
import GiveButton from "../GiveButton";

export default function NavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='mt-6'>
          <TypographyH2>About</TypographyH2>
        </div>
        <div className='mt-6'>
          <TypographyH2>Connect</TypographyH2>
        </div>
        <div className='mt-6'>
          <TypographyH2>Media</TypographyH2>
        </div>
        <div className='mt-6 rounded-full'>
          <SheetFooter>
            <div className='flex gap-2 w-full'>
              <SheetClose asChild>
                <Link
                  href='/contact'
                  passHref
                >
                  <Button>Contact</Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href='https://tithe.ly/give_new/www/#/tithely/give-one-time/411909'
                  passHref
                >
                  <Button className='rounded h-20'>
                    <Mail className='mr-2 h-4 w-4 ' />
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
