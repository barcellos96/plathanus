import { CardFamily } from "@/components/content/card/family/family-card";
import Products from "@/components/content/card/product";
import Filters from "@/components/content/filters";
import Header from "@/components/header";
import Hero from "@/components/header/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="mx-8 md:mx-20 border-b border-[#EBEBEB]">
        <CardFamily />
      </div>
      <div className="mx-8 md:mx-28 flex flex-col md:flex-row justify-between gap-4 mt-10">
        <Filters />
        <Products />
      </div>
    </div>
  );
}
