"use client";

import Image from "next/image";
import ProductThumbnail from "./ProductThumbnail";
import SectionHeader from "./SectionHeader";
import { StarIcon } from "lucide-react";
import QuantityButtons from "./QuantityButtons";
import { Button } from "./ui/button";

import whatsapp from "@/public/images/whatsapp.png";
import messenger from "@/public/images/messenger.png";
import discord from "@/public/images/discord.png";
import instagram from "@/public/images/instagram.png";
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import Modal from "./Modal";
import { useState } from "react";
import { Product } from "@/lib/types";

const Product = ({ product }: { product: Product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen((st) => !st);
  };

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8">
        <div>
          {/* IMAGE */}
          <div className="relative aspect-[4/3] bg-gray-100 mb-4 hover:cursor-pointer" onClick={handleModalOpen}>
            <Image className="p-4" src={product.images[0]} alt={product.title} fill style={{ objectFit: "contain" }} />
          </div>

          {/* IMAGE THUMBNAILS */}
          <div className="grid grid-cols-6 gap-4">
            {product.images.splice(1).map((image, idx: number) => (
              <ProductThumbnail key={product._id + idx} image={image} title={product.title} />
            ))}
          </div>
        </div>

        <div>
          {/* TITLE */}
          <SectionHeader className="mb-4" textClassName="text-2xl" title={product.title} />

          {/* REVIEW STARS */}

          <div className="flex items-center gap-2 mb-4" style={{ color: "gold" }}>
            <StarIcon fill="gold" />
            <StarIcon fill="gold" />
            <StarIcon fill="gold" />
            <StarIcon fill="gold" />
            <StarIcon fill="gold" />
            <p className="text-black">(55)</p>
          </div>

          {/* SKU */}
          <p className="mb-2">
            <span className="font-semibold">SKU:&#160;</span>
            {product.sku}
          </p>

          {/* PLATFORM */}
          <p className="mb-4">
            <span className="font-semibold">Platform:&#160;</span>
            {product.platform}
          </p>

          {/* PRICE */}
          <p className="font-semibold text-3xl mb-4">${product.price.toFixed(2)}</p>

          {/* QTY & ADD TO CART */}
          <div className="grid grid-cols-2 xl:grid-cols-1 gap-4 mb-8">
            <QuantityButtons />
            <Button className="xl:w-1/2">Add to Cart</Button>
          </div>

          <SectionHeader className="mb-4" title="Share" />
          <div className="flex items-center gap-4 w-fit">
            <Button variant="ghost" className="relative aspect-[1/1]">
              <Image className="p-2" src={whatsapp.src} alt="Share to WhatsApp" fill />
            </Button>
            <Button variant="ghost" className="relative aspect-[1/1]">
              <Image className="p-2" src={messenger.src} alt="Share to Messenger" fill />
            </Button>
            <Button variant="ghost" className="relative aspect-[1/1]">
              <Image className="p-2" src={discord.src} alt="Share to Discord" fill />
            </Button>
            <Button variant="ghost" className="relative aspect-[1/1]">
              <Image className="p-2" src={instagram.src} alt="Share to Instagram" fill />
            </Button>
            <Button variant="ghost" className="relative aspect-[1/1]">
              <Image className="p-2" src={facebook.src} alt="Share to Facebook" fill />
            </Button>
            <Button variant="ghost" className="relative aspect-[1/1]">
              <Image className="p-2" src={twitter.src} alt="Share to Twitter" fill />
            </Button>
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="mb-8">
        <SectionHeader className="mb-4" title="Description" />
        <p className="text-sm mb-4">{product.description}</p>
      </div>
      {/* REVIEWS */}
      <div className="mb-8">
        <SectionHeader className="mb-4" title="Reviews" />
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam sequi ipsum, eveniet nobis voluptas repellendus maxime quis, sed
          suscipit, nulla odit perferendis nesciunt iure provident ex molestias accusantium illum.
        </p>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut odio numquam est voluptatibus adipisci id placeat. Illum dolorem odio
          voluptate molestiae! Cumque impedit vel distinctio. Dolorum veritatis blanditiis distinctio dolor!
        </p>
      </div>
      {modalOpen && (
        <Modal open={modalOpen} handler={handleModalOpen} title={product.title}>
          <div className="relative w-full aspect-[4/3]">
            <Image src={product.images[0]} alt={product.title} fill style={{ objectFit: "contain" }} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Product;
