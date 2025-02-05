"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Product } from "@/components/product";
interface Props {
  products: Product[];
}

const ProductCard = ({ products }: Props) => {
  const { push } = useRouter();

  return (
    <>
      {products.map((product, index) => (
        <Card
          key={index}
          className="h-[398px] min-w-[300px] border-none shadow-none"
        >
          <CardHeader className="relative p-0 border rounded-lg">
            <img
              src={product.image[0]?.src}
              alt={product.name}
              className="w-[300px] h-[338px] object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300 hover:cursor-pointer rounded-lg"
              onClick={() => push(`${product.name}?id=${product.id}`)}
            />
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-[#9A1A80]/60 text-white px-3 py-1 rounded-md text-sm">
                Lançamento
              </span>
            )}
          </CardHeader>
          <CardContent className="flex flex-col gap-2 px-0 py-2">
            <h3
              className="text-lg font-semibold hover:underline hover:underline-offset-2 hover:cursor-pointer"
              onClick={() => push(`${product.name}?id=${product.id}`)}
            >
              {product.name}
            </h3>
            <p className="text-sm text-gray-600">
              Cód. Produto: {product.code}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ProductCard;
