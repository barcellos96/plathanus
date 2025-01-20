import BreadcrumbComp from "./breadcrumb-comp";
import CardDetails from "./card/details";
import CardImages from "./card/images";
import VideoPlayer from "./video-player";

export interface ProductImage {
  src: string;
  height?: number;
  width?: number;
  blurDataURL?: string | undefined; // Permite que seja string ou undefined
  blurWidth?: number;
}

export interface Product {
  code: string;
  id: string;
  image: ProductImage[];
  isNew: boolean;
  name: string;
}

interface ProductProps {
  product: Product; // Definindo que o parâmetro será um objeto do tipo Product
}
export default function Product({ product }: ProductProps) {
  return (
    <div className="md:px-20 xl:px-40">
      <BreadcrumbComp name={product.name} />

      <div className="flex gap-8">
        <CardImages images={product.image} />
        <CardDetails details={product} />
      </div>

      <VideoPlayer thumbnailUrl={product.image[0]} />
    </div>
  );
}
