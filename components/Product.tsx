"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";

interface ProductProps {
  _id: string;
  title: string;
  image: string;
  sku: string;
  price: number;
  description: string;
}

const Product = ({ _id, title, image, sku, price, description }: ProductProps) => {
  const padding = {
    animate: { padding: "0.5rem" },
  };

  const view = {
    animate: { opacity: 1, clipPath: "inset(0 0 0 0)" },
  };

  return (
    <motion.article whileHover="animate" className="shadow-[0px_0px_15px_-4px_rgba(0,0,0,0.25)] border border-gray-200">
      <div className="relative w-full aspect-[1/1] bg-gray-100 hover:cursor-pointer">
        <motion.img variants={padding} className="w-full h-full " src={image} alt={title} style={{ objectFit: "contain", padding: "1rem" }} />
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          variants={view}
          transition={{ duration: 0.75 }}
          className="absolute w-full bottom-0 bg-opacity-75"
        >
          <Button className="mb-2 text-amber-600 bg-transparent hover:bg-transparent hover:text-amber-500 transition ease-linear duration-150 font-semibold block ml-auto ">
            <ShoppingBagIcon />
          </Button>

          <Button
            variant="ghost"
            className="w-full bg-amber-600 hover:bg-amber-500 rounded-none text-white hover:text-white transition ease-linear duration-150 font-semibold"
          >
            VIEW
          </Button>
        </motion.div>
      </div>
      <div className="p-4 text-sm xl:text-base space-y-4">
        <Link href="#" className="font-semibold hover:text-amber-600 transition ease-in-out duration-150 block">
          {title}
        </Link>
        <p className="text-xs">{description}</p>
        <p className="text-xs">
          <span className=" font-semibold">SKU:&#160;</span>
          {sku}
        </p>
        <p className="text-base xl:text-lg font-semibold">${price.toFixed(2)}</p>
      </div>
    </motion.article>
  );
};

export default Product;
