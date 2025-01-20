"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaginationDemo } from "./pagination";
import { products } from "@/components/data/mock";
import ProductCard from "./product-card";
import { useSearchParams } from "next/navigation";

const Products = () => {
  const [selectedFamilyIds, setSelectedFamilyIds] = useState<number[]>([]);

  const searchParams = useSearchParams();
  const familiesParam = searchParams.get("families");

  useEffect(() => {
    if (familiesParam) {
      const newSelectedFamilyIds = familiesParam.split(",").map(Number);
      setSelectedFamilyIds(newSelectedFamilyIds);
    } else {
      setSelectedFamilyIds([]);
    }
  }, [familiesParam]);

  const filteredProducts = selectedFamilyIds.length
    ? products.filter((product) => selectedFamilyIds.includes(product.familyId))
    : products;

  return (
    <div className="w-full mt-10 md:mt-0 ">
      <div className="flex justify-between items-center mb-6 px-10">
        <div className="flex gap-4 items-center ">
          <span className="font-bold bg-zinc-50 px-2 py-1">
            {filteredProducts.length} produtos
          </span>
          <div className="flex items-center cursor-pointer bg-[#F8F8F8] rounded-full h-8 w-8 p-2">
            <Search strokeWidth={1.2} className="h-4 w-4" />
          </div>
        </div>
        <Button className="text-white font-light bg-[#E57200] hover:bg-[#E57200]/80 transition duration-300">
          <span className="hidden sm:flex">Baixar Catalógo</span>
          <Download className="-mt-1" />
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full justify-items-center">
        <ProductCard products={filteredProducts} />
      </div>
      <PaginationDemo />
    </div>
  );
};

const SuspendedProducts = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Products />
    </Suspense>
  );
};

export default SuspendedProducts;
