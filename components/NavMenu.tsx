"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

const NavMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="block aspect-[1/1] w-auto h-auto p-2">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mt-4">
          <SheetTitle>NAVIGATION</SheetTitle>
          <Separator className="bg-gradient-to-r from-gray-300 to-white" />

          <ul className="mt-8 text-start font-semibold space-y-4 block">
            <li className="hover:text-amber-600 py-2">
              <Link href="#">HOME</Link>
            </li>
            <li className="hover:text-amber-600 py-2">
              <Link href="#">ACCOUNT</Link>
            </li>
            <li className="hover:text-amber-600 py-2">
              <Link href="#">FIND YOUR ORDER</Link>
            </li>
            <li className="hover:text-amber-600 py-2">
              <Link href="#">FAQs</Link>
            </li>
            <li className="hover:text-amber-600 py-2">
              <Link href="#">CONTACT</Link>
            </li>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
