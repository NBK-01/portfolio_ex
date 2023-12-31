/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../comps/theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Chip } from "@nextui-org/react";
import { toast } from "sonner";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "ReadMe Generator",
    href: "https://github.com/NBK-01/ReadeMe-Generator",
    description: "cli-based nodejs readme file generator",
  },
  {
    title: "Bookworm haven",
    href: "https://github.com/NBK-01/Bookworm-Haven",
    description:
      "an platform where you can discuss, review, and search for novels",
  },
  {
    title: "Prbly V1",
    href: "https://github.com/Probably-xyz/Prbly-Alpha",
    description: "first design & dev of prbly.xyz",
  },
  {
    title: "Mirathi V1",
    href: "https://mirathi-v2-8u7c4dawg-nbk-01.vercel.app/",
    description: "first design and dev of mirathi.io",
  },
  {
    title: "Trail Finder",
    href: "https://jyothybaby.github.io/Trail-Finder/",
    description:
      "search for hiking trails within a selected radius relevant to your location ",
  },
  {
    title: "Employee manager sys",
    href: "https://github.com/NBK-01/Employee-Management-System",
    description:
      "a terminal based CMS app which runs using mainly Inquirer and SQL",
  },
];
function copyFunc() {
  navigator.clipboard.writeText("nbk01.dev@gmail.com");

  toast.success("Email copied to clipboard");
}

export function NavDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger> general </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
              <ListItem href="/about" title="about">
                more about me, my professional experience & what I do
              </ListItem>
              <ListItem href="/blog" title="Blog">
                my take on things; technical, creative, and personal
              </ListItem>
              <div className="block select-none space-y-3 rounded-md p-3 leading-none no-underline outline-none transition-colors">
                <p className="text-sm font-medium italic lowercase leading-none">
                  socials
                </p>
                <div className="flex space-x-5 line-clamp-2 text-sm lowercase leading-snug text-green-500 underline">
                  <Link
                    href="https://x.com/excelsior_stu"
                    target="_blank"
                    className="hover:text-green-900"
                  >
                    twitter/X
                  </Link>
                  <Link
                    href="https://github.com/NBK-01"
                    target="_blank"
                    className="hover:text-green-900"
                  >
                    github
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nayef-kanaan-4aa1b1183/"
                    target="_blank"
                    className="hover:text-green-900"
                  >
                    linkedin
                  </Link>
                  <a
                    className="hover:text-green-900 cursor-pointer"
                    onClick={() => copyFunc()}
                  >
                    email
                  </a>
                </div>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger> projects </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            style={{ cursor: "pointer" }}
            asChild
            className={navigationMenuTriggerStyle()}
          >
            <a href="https://cal.com/excelsior" target="_blank">
              schedule a call
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium italic lowercase leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm lowercase leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto px-16 pt-16 pb-12">
      <div className="flex items-center justify-between mx-auto">
        <NavDropdown />
        <Link href="/">
          <h1 className="italic">excelsior - nayef kanaan</h1>
        </Link>

        <div className="flex space-x-5">
          <Chip className="my-auto items-center" color="warning" variant="dot">
            {" "}
            Home{" "}
          </Chip>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
