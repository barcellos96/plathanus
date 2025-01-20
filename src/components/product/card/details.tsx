import { Circle, MoveDiagonal2 } from "lucide-react";
import { Product } from "..";
import { Button } from "@/components/ui/button";

interface Props {
  details: Product;
}

export default function CardDetails({ details }: Props) {
  return (
    <div className="flex flex-col">
      <span className="text-[#4C4D4C] mb-2">
        Hidrolight Neo
        <sup className=" text-xs ml-0.5">®</sup>
      </span>
      <h1 className="w-max inline-block capitalize bg-[#80276C] text-5xl text-white font-semibold p-2 rounded">
        {details.name}
      </h1>
      <span className="text-[#707372] py-4">
        Código SKU {details.code} Lado direito / Código SKU {details.code} Lado
        esquerdo
      </span>
      <div className="flex flex-col py-4 space-y-4">
        <span>Descrição</span>
        <span className="text-[#4C4D4C] max-w-[720px]">
          A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush, com
          propriedades isolantes térmicas e um acabamento elegante em plush.
          Possui ampla capacidade de ajuste devido à aderência do tecido. Em
          repouso, a órtese já está pré-ajustada, com fechamento do polegar e
          uma membrana elástica que funciona como um bolso, facilitando a
          colocação pelo próprio paciente. As talas internas são facilmente
          ajustáveis para se adaptarem à mão desejada. São fornecidas duas talas
          removíveis, uma com curvatura ideal para sustentar o punho até a palma
          da mão, e a segunda reta na parte dorsal do punho, impedindo
          movimentos para cima e para baixo. O elástico aderente envolve a
          articulação, proporcionando compressão de acordo com a indicação
          médica e a necessidade do paciente.
        </span>

        <span>Nível 3</span>
        <span className="text-[#4C4D4C]">
          Recuperação e tratamento de lesões GRAVES
        </span>
      </div>

      <div className="border border-[#AEB7B9]" />

      <div className="py-8 space-y-4">
        {/* colors */}
        <div className="flex items-center gap-2">
          Cores disponíveis:
          <span className="flex items-center gap-2 text-[#4C4D4C]">
            <Circle className="text-black bg-black rounded-full" size={16} />
            Preto
          </span>
        </div>

        {/* models */}
        <div>
          <span>Modelo:</span>
          <span className="text-[#4C4D4C]"> Bilateral</span>
        </div>

        {/* tam */}
        <div className="flex gap-2 ">
          <span>Tamanhos disponíveis:</span>
          <span className="px-2 bg-[#EBEBEB] text-[#4C4D4C] rounded">
            Unico
          </span>
          <span className="px-2 bg-[#EBEBEB] text-[#4C4D4C] rounded">
            Especial
          </span>
        </div>

        {/* measure */}
        <div className="flex gap-4 ">
          <span className="flex text-[#E57200] gap-1 items-center px-2 hover:cursor-pointer hover:underline hover:underline-offset-4">
            <MoveDiagonal2 size={20} /> Descubra o seu tamanho ideal
          </span>
          <span className="flex gap-1 items-center px-2  text-[#4C4D4C] hover:cursor-pointer hover:underline hover:underline-offset-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8569 7.89874C13.061 7.98249 12.8027 8.12874 12.6598 8.12958C12.5947 8.13825 12.5286 8.13094 12.467 8.10829C12.4054 8.08564 12.3503 8.04832 12.3064 7.99958C12.2625 7.95083 12.2311 7.89211 12.215 7.82851C12.1989 7.76492 12.1985 7.69835 12.2139 7.63458C12.3419 7.27416 12.946 7.12916 13.4169 7.24291C14.0956 7.40749 14.3573 7.96791 14.0994 8.40916C13.761 8.98916 12.7456 9.20749 11.9473 8.96374C10.9539 8.66083 10.5864 7.81291 11.0306 7.14833C11.5639 6.35124 12.9931 6.05999 14.1094 6.43249C15.4135 6.86791 15.8864 8.00208 15.2573 8.88499C14.5356 9.89666 12.6948 10.2608 11.2669 9.76041C9.65436 9.19583 9.07728 7.77708 9.89019 6.67999C10.7964 5.45541 13.0448 5.01916 14.781 5.64583C16.6985 6.33791 17.3789 8.03791 16.3852 9.34833C15.2964 10.7833 12.6435 11.2908 10.6019 10.5392C8.38228 9.72124 7.59894 7.74166 8.77269 6.22083C10.0423 4.57666 13.0969 3.99749 15.4406 4.87416C17.9614 5.81666 18.8469 8.07416 17.4939 9.80374C16.6335 10.9042 14.9964 11.6425 13.2039 11.7654"
                stroke="#121212"
                strokeWidth="0.4375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.2043 11.7654H1.87513V15.5333H13.2335C15.991 15.5333 18.123 13.6958 18.123 11.2945V7.99788M16.0039 14.7325V13.7908M14.591 15.2979V13.4137M13.178 15.5333V14.5916M11.7651 15.5333V13.6491M10.3526 15.5333V14.5916M8.93929 15.5333V13.6491M7.52679 15.5333V14.5916M4.70096 15.5333V14.5916M6.11346 15.5333V13.6491M3.28804 15.5333V13.6491M8.23304 11.7183V7.62122"
                stroke="#121212"
                strokeWidth="0.4375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Tabela de medidas
          </span>
        </div>

        <div className="flex flex-col space-y-4">
          <Button className="rounded-xl mt-6 max-w-min bg-[#E57200] text-white hover:bg-[#E57200]/85 transition duration-300">
            Encontrar lojas online
          </Button>

          <span className="text-[#4C4D4C] underline">
            Gostou dese produto? Seja um vendedor
          </span>
        </div>
      </div>
    </div>
  );
}
