import { products } from "@/components/data/mock";
import DefaultPage from "@/components/defaultPage";
import Product from "@/components/product";
import { Metadata } from "next";

//Tipagem através da documentação do nextjs
interface Props {
  params: Promise<{ produto: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { id } = await searchParams;

  const produtData = products.find((p) => p.id === id);

  if (!produtData) {
    return {
      title: "Produto não encontrado",
      description: "Produto solicitado não foi encontrado.",
    };
  }

  return {
    title: produtData.name.toUpperCase(),
  };
}

export default async function ProductPage({ searchParams }: Props) {
  const { id } = await searchParams;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <DefaultPage>
        <p>Produto não encontrado</p>
      </DefaultPage>
    );
  }

  return (
    <DefaultPage>
      <Product product={product} />
    </DefaultPage>
  );
}
