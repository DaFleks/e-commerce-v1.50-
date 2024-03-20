"use client";

import clsx from "clsx";
import { Separator } from "./ui/separator";

const SectionHeader = ({ title, className, textClassName = "text-xl" }: { title: string; className?: string; textClassName?: string }) => {
  return (
    <div className={className}>
      <h3 className={clsx("font-bold mb-2", textClassName)}>{title}</h3>
      <Separator className="bg-gradient-to-r from-gray-300 to-white" />
    </div>
  );
};

export default SectionHeader;
