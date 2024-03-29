"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";

const ShoppingCart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="block aspect-[1/1] w-auto h-auto p-2">
          <ShoppingBagIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="mt-4">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
