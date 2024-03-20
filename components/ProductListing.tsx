"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";

type Product = {
  _id: string;
  title: string;
  sku: string;
  stock: boolean;
  description: string;
  images: [string];
  price: number;
  category: string;
  manufacturer: string;
  platform: string;
  yearReleased: number;
  rating: number;
  amountSold: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

const ProductListing = ({ product }: { product: Product }) => {
  const padding = {
    animate: { padding: "0.5rem" },
  };

  const view = {
    animate: { opacity: 1, clipPath: "inset(0 0 0 0)" },
  };

  return (
    <motion.article whileHover="animate" className="shadow-[0px_0px_15px_-4px_rgba(0,0,0,0.25)] border border-gray-200">
      <div className="relative w-full aspect-[1/1] bg-gray-100 hover:cursor-pointer">
        <motion.img
          variants={padding}
          className="w-full h-full "
          src={product.images[0]}
          alt={product.title}
          style={{ objectFit: "contain", padding: "1rem" }}
        />
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          variants={view}
          transition={{ duration: 0.75 }}
          className="absolute w-full bottom-0 bg-opacity-75"
        >
          <Button className="mb-2 bg-emerald-700 hover:bg-emerald-500 px-3 py-0 transition ease-linear duration-150 font-semibold block ml-auto bg-opacity-80">
            <ShoppingBagIcon size={20} />
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full bg-slate-700 hover:bg-slate-500 rounded-none text-white hover:text-white transition ease-linear duration-150 font-semibold"
          >
            <Link href={`/products/${product._id}`}>VIEW</Link>
          </Button>
        </motion.div>
      </div>
      <div className="p-4 text-sm xl:text-base space-y-4">
        <Link
          href={`/products/${product._id}`}
          className="text-xl xl:text-base font-semibold hover:text-slate-500 transition ease-in-out duration-150 block"
        >
          {product.title}
        </Link>
        <p className="text-xs">{product.description.length > 30 ? product.description.substring(0, 50) + "..." : product.description}</p>
        <p className="text-xs">
          <span className="font-semibold">SKU:&#160;</span>
          {product.sku}
        </p>
        <p className="text-xs">
          <span className="font-semibold">Platform:&#160;</span>
          {product.platform}
        </p>
        <p className="text-xl xl:text-lg font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </motion.article>
  );
};

export default ProductListing;
