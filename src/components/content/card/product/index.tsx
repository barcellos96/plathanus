import React from "react";
import { Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGrid from "./product-grid";

const Products = () => {
  return (
    <div className="w-full mt-10 md:mt-0 ">
      <div className="flex justify-between items-center mb-6 px-4 ">
        <div className="flex gap-4 items-center ">
          <span className="font-bold bg-zinc-50 px-2 py-1">86 produtos</span>
          <div className="flex items-center cursor-pointer bg-[#F8F8F8] rounded-full h-8 w-8 p-2">
            <Search strokeWidth={1.2} className="h-4 w-4" />
          </div>
        </div>
        <Button className="text-white font-light bg-[#E57200] hover:bg-[#E57200]/80 transition duration-300">
          <span className="hidden sm:flex">Baixar Catalógo</span>
          <Download className="-mt-1" />
        </Button>
      </div>
      <ProductGrid />
    </div>
  );
};

export default Products;
