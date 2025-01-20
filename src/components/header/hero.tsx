import { ChevronRight, Dot } from "lucide-react";
import hero from "@/assets/hero_header.jpg";
import specification from "@/assets/specification.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Hero() {
  return (
    <div>
      <div className="mt-20 relative h-[617px]">
        <img
          src={hero.src}
          alt="Hero Header"
          className="w-full h-full object-cover object-[center_33%]"
        />
        <div className="absolute inset-0 bg-[#80276C33] " />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#80276C33]" />

        <div className="absolute inset-0 flex flex-col justify-between px-8 md:px-20 xl:px-40 pt-6">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center gap-2 text-[#4C4D4C] mt-6">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-sm">
                  Início
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-sm">
                <ChevronRight />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/#" className="text-sm text-[#121212]">
                  Linha Orthopedic
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col justify-center gap-2 h-full px-4">
            <img
              src={specification.src}
              alt="specification mark"
              className="w-full max-w-[492px] h-[75px]"
            />
            <span className="flex gap-2 text-2xl max-w-[628px]">
              <Dot strokeWidth={12} className="hidden md:block" />
              Produtos desenvolvidos para auxiliar na prevenção e retorno das
              atividades, no tratamento e recuperação de pacientes com lesões
              ortopédicas. s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
