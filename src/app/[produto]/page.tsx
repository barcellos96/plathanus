import { products } from "@/components/data/mock";
import DefaultPage from "@/components/defaultPage";
import Product from "@/components/product";
import { Metadata } from "next";

interface ProdutoPageProps {
  searchParams: { id: string };
}

// Metadados dinâmicos
export async function generateMetadata({
  searchParams,
}: ProdutoPageProps): Promise<Metadata> {
  const { id } = await searchParams;

  const produto = products.find((p) => p.id === id);

  if (!produto) {
    return {
      title: "Produto não encontrado",
      description: "Produto solicitado não foi encontrado.",
    };
  }

  return {
    title: produto.name.toUpperCase(),
  };
}

// Página principal
export default async function ProductPage({ searchParams }: ProdutoPageProps) {
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
