"use client";

import { useSearchParams } from "next/navigation";
import { products } from "../../../data/mock";
import ProductCard from "./product-card";

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const familyIdsParam = searchParams.get("families");
  const selectedFamilyIds = familyIdsParam
    ? familyIdsParam.split(",").map(Number)
    : [];

  // Filtra os produtos pela família selecionada
  const filteredProducts = selectedFamilyIds.length
    ? products.filter((product) => selectedFamilyIds.includes(product.familyId))
    : products;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full justify-items-center">
      <ProductCard products={filteredProducts} />
    </div>
  );
}
