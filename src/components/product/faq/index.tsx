import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "..";

interface Props {
  product: Product;
}

export function AccordionFAQ({ product }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-semibold">Detalhes</AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4 pb-10">
          <span className="font-semibold">
            Nível 3- Recuperação e tratamento de lesões GRAVES
          </span>
          <div>
            <span className="font-semibold">Nome Comercial:</span>
            <span className="font-normal"> {product.name}</span>
          </div>
          <div>
            <span className="font-semibold">Linha</span>
            <span className="font-normal"> Orthopedic</span>
          </div>
          <div>
            <span className="font-semibold">
              Cod. Produto (referências/SKU):
            </span>
            <span className="font-normal"> {product.code}</span>
          </div>
          <div>
            <span className="font-semibold">Família de Produtos:</span>
            <span className="font-normal"> Hidrolight Neo</span>
          </div>
          <div>
            <span className="font-semibold">
              Modelos do produto(esquerda/direita–bilateral):
            </span>
            <span className="font-normal"> Bilateral</span>
          </div>
          <div>
            <span className="font-semibold">Composição:</span>
            <span className="font-normal">
              74% borracha de cloropreno, 16% poliamida, 9%poliestireno e 1%PVC.
            </span>
          </div>
          <div>
            <span className="uppercase font-semibold">PRODUTO TÉRMICO</span>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-semibold">
          Especificações técnicas
        </AccordionTrigger>
        <AccordionContent>
          Aqui vem as especificações tecnicas do produto
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-semibold">
          Indicações e Instruções de uso
        </AccordionTrigger>
        <AccordionContent>
          Aqui vem explicação para Indicações e Instrução de uso
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="font-semibold">Garantia</AccordionTrigger>
        <AccordionContent>12 meses de garantia</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
