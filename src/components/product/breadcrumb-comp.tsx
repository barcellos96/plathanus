import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

interface BreadcrumbCompProps {
  name: string;
}

export default function BreadcrumbComp({ name }: BreadcrumbCompProps) {
  console.log("name", name);
  return (
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
        <BreadcrumbSeparator className="text-sm">
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/#"
            className="text-sm text-[#121212] capitalize"
          >
            {name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
