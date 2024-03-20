"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

const QuantityButtons = () => {
  return (
    <div className="flex items-center justify-between w-[150px] border rounded">
      <Button variant="ghost" className="border-r bg-gray-100 rounded-none p-0 aspect-[1/1]">
        <MinusIcon size={12} />
      </Button>
      <p className="flex items-center justify-center font-semibold overflow-hidden select-none">99</p>
      <Button variant="ghost" className="border-l bg-gray-100 rounded-none p-0 aspect-[1/1]">
        <PlusIcon size={12} />
      </Button>
    </div>
  );
};

export default QuantityButtons;
