"use client";

import Link from "next/link";

import NavMenu from "./NavMenu";
import ShoppingCart from "./ShoppingCart";

const Navbar = ({ brandName = "" }: { brandName?: string }) => {
  return (
    <>
      <nav className="fixed w-full h-[75px] shadow-lg z-40 bg-white">
        <div className="h-full xl:w-2/3 xl:px-0 mx-auto flex items-center justify-between">
          <NavMenu />
          <Link href="/" className="font-semibold">
            {brandName}
          </Link>
          <ShoppingCart />
        </div>
      </nav>
      <nav className="h-[75px]"></nav>
    </>
  );
};

export default Navbar;
