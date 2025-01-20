import { ProductImage } from "..";

interface Props {
  image: ProductImage;
}

export default function CardImages({ image }: Props) {
  console.log("image", image);
  return (
    <div className="mt-6">
      <img
        className="border border-[#D5D7D8] rounded-lg min-w-[684px] max-h-[523px]"
        src={image.src}
        alt="Imagem do produto"
      />
    </div>
  );
}
