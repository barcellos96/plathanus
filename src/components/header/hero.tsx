import { ChevronRight } from "lucide-react";
import hero from "../../app/assets/hero_header.jpg";
import specification from "../../app/assets/specification.png";
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
      {/* Background Image */}
      <div className="relative h-[617px]">
        <img
          src={hero.src}
          alt="Hero Header"
          className="w-full h-full object-cover object-[center_33%]"
        />
        {/* Gradiente linear sobre a imagem */}
        <div className="absolute inset-0 bg-[#80276C33] " />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#80276C33]" />

        {/* Conteúdo sobreposto */}
        <div className="absolute inset-0 flex flex-col justify-between pl-12 md:pl-20 pt-6">
          {/* Breadcrumb no topo com margin-top */}
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

          {/* Marca de especificação centralizada */}
          <div className="flex items-center h-full">
            <img
              src={specification.src}
              alt="specification mark"
              className="w-[628px] h-[203px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
