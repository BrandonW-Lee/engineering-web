"use client";
import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import ListItem from "./ListItem";

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href='/about'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href='/services'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href='/blog'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href='/contact'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
