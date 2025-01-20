import { CardFamily } from "@/components/content/card/family/family-card";
import Products from "@/components/content/card/product";
import Filters from "@/components/content/filters";
import DefaultPage from "@/components/defaultPage";
import Hero from "@/components/header/hero";

export default function Home() {
  return (
    <DefaultPage>
      <Hero />
      <div className="mx-8 md:px-14 xl:px-32 border-b border-[#EBEBEB]">
        <CardFamily />
      </div>
      <div className="mx-8 md:px-20 xl:px-36 flex flex-col md:flex-row justify-between gap-4 mt-10">
        <Filters />
        <Products />
      </div>
    </DefaultPage>
  );
}
