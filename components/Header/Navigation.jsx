'use client';
import React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import ListItem from './ListItem';
import { Circle } from 'lucide-react';

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">About</div>
                    <p className="text-sm leading-tight text-muted-foreground"></p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Mission and Vision">
                Receive the truth that Jesus Christ died for you and your sins!
              </ListItem>
              <ListItem href="/docs/installation" title="Pastoral Staff">
                Learn more about our leaders.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Welcome">
                Welcome to The Bridge, a place to connect!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Connect</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">Connect</div>
                    <p className="text-sm leading-tight text-muted-foreground"></p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="/announcements" title="Announcements">
                Stay up-to-date with our latest announcements.
              </ListItem>
              <ListItem href="/bridge-groups" title="Bridge Groups">
                Get plugged in.
              </ListItem>
              <ListItem href="/committees" title="Committees">
                Discover opportunities to serve.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Media</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">Media</div>
                    <p className="text-sm leading-tight text-muted-foreground"></p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="/live" title="Live Stream">
                Join us for worship, Sunday mornings at 11:30am.
              </ListItem>
              <ListItem href="/photos" title="Photos">
                View photos of our awesome English ministry!
              </ListItem>
              <ListItem href="/sermons" title="Sermons">
                Find videos of our previous sermons.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
