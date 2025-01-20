import { products } from "../data/mock";
import BreadcrumbComp from "./breadcrumb-comp";
import CardDetails from "./card/details";
import CardImages from "./card/images";
import { AccordionFAQ } from "./faq";
import MoreProducts from "./more-products";
import VideoPlayer from "./video-player";
import hero_prodct from "@/assets/hero-product.png";

export interface ProductImage {
  src: string;
  height?: number;
  width?: number;
  blurDataURL?: string | undefined;
  blurWidth?: number;
}

export interface Product {
  code: string;
  id: string;
  image: ProductImage[];
  isNew: boolean;
  name: string;
  familyId: number;
}

interface ProductProps {
  product: Product;
}
export default function Product({ product }: ProductProps) {
  return (
    <div className="px-6 md:px-20 xl:px-40">
      <BreadcrumbComp name={product.name} />

      <div className="flex flex-col gap-8 mt-10 2xl:flex-row">
        <CardImages isNew={product.isNew} images={product.image} />
        <CardDetails details={product} />
      </div>

      <VideoPlayer thumbnailUrl={product.image[0]} />

      <div className="flex flex-col space-y-4 mt-10 max-w-[451px]">
        <span className="text-[32px] text-[#4C4D4C]">
          Fabricação
          <strong className="text-[#E57200]"> própria </strong>e nacional.
          <strong className="text-[#E57200]"> Qualidade </strong>
          garantida!
        </span>
        <span className="text-[#707372]">
          Antes de utilizar o produto, leia atentamente as precauções e
          Instruções de uso.
        </span>
      </div>

      <img
        src={hero_prodct.src}
        alt="Hero Product"
        className="w-full border-b border-[#AEB7B9] mb-8"
      />

      <AccordionFAQ product={product} />
      <MoreProducts products={products} product={product} />
    </div>
  );
}
