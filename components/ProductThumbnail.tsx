"use client";

import Image from "next/image";

const ProductThumbnail = ({ image, title = "" }: { image: string; title?: string }) => {
  return (
    <div className="aspect-[1/1] border relative rounded">
      <Image className="p-1" src={image} alt={title} fill style={{ objectFit: "contain" }} />
    </div>
  );
};

export default ProductThumbnail;
