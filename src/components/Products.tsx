import React from "react";
import Image from "next/image";
import { IMG_LINK } from "@/constants/links";

const productData = [
  {
    src: IMG_LINK.evoil,
    alt: "Evoil",
  },
  {
    src: IMG_LINK.session,
    alt: "Session",
  },
  {
    src: IMG_LINK.cmb,
    alt: "CMB",
  },
  {
    src: IMG_LINK.joes,
    alt: "Joes",
  },
  {
    src: IMG_LINK.gantech,
    alt: "Gantech",
  },
];

const Products = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center mt-8 px-10">
      {productData.map((product) => (
        <Image
          key={product.src}
          src={product.src}
          alt={product.alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-28 h-auto max-h-20"
        />
      ))}
    </div>
  );
};

export default Products;
