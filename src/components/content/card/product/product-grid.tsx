import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { products } from "../../data";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full justify-items-center">
      {products.map((product, index) => (
        <Card
          key={index}
          className="h-[398px] w-[300px] border-none shadow-none"
        >
          <CardHeader className="relative p-0 border rounded-lg">
            <img
              src={product.image?.src}
              alt={product.name}
              className="w-[300px] h-[338px] object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300 hover:cursor-pointer rounded-lg"
            />
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-[#9A1A80]/60 text-white px-3 py-1 rounded-md text-sm">
                Lançamento
              </span>
            )}
          </CardHeader>
          <CardContent className="flex flex-col gap-2 px-0 py-2">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              Cód. Produto: {product.code}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
