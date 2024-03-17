"use client";

import Link from "next/link";

import NavMenu from "./NavMenu";
import ShoppingCart from "./ShoppingCart";

const Navbar = ({ brandName = "" }: { brandName?: string }) => {
  return (
    <>
      <nav className="fixed w-full h-[75px] p-4 border bg-white shadow flex items-center justify-between">
        <NavMenu />
        <Link href="#" className="font-semibold">
          {brandName}
        </Link>
        <ShoppingCart />
      </nav>
      <nav className="h-[75px]"></nav>
    </>
  );
};

export default Navbar;
