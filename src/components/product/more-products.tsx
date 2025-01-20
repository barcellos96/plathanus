"use client";

import { useRef, useState } from "react";
import ProductCard from "../content/card/product/product-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from ".";

interface Props {
  products: Product[];
  product: Product;
}

export default function MoreProducts({ products, product }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products.filter((item) => item.id !== product.id);

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === products.length - 1;

  const handlePrevious = () => {
    if (!isFirstImage) {
      setCurrentImageIndex((prev) => prev - 1);
    }
    containerRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!isLastImage) {
      setCurrentImageIndex((prev) => prev + 1);
    }
    containerRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
        <span className=" max-w-[340px] text-[#4C4D4C] text-[32px]">
          Conheça também nossos outros produtos
        </span>
        {/* Botão Previous */}
        <div className="flex gap-4">
          <ChevronLeft
            strokeWidth={1}
            size={40}
            onClick={handlePrevious}
            className={` rounded-full transition-colors shadow-md${
              isFirstImage
                ? " text-[#D5D7D8] bg-white/80 cursor-not-allowed"
                : " text-[#4C4D4C] bg-white cursor-pointer"
            }`}
          />

          {/* Botão Next */}
          <ChevronRight
            strokeWidth={1}
            size={40}
            onClick={handleNext}
            className={` rounded-full transition-colors shadow-md ${
              isLastImage
                ? " text-[#D5D7D8] bg-white/80  cursor-not-allowed"
                : " text-[#4C4D4C] bg-white cursor-pointer"
            }`}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex py-6 mb-20 gap-6 overflow-auto lg:overflow-x-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        <ProductCard products={filteredProducts} />
      </div>
    </div>
  );
}
