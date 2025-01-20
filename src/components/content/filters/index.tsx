import { ChevronDown } from "lucide-react";
import { filters } from "../../data/mock";

export default function Filters() {
  return (
    <div className="rounded-lg border border-[#D5D7D8] min-w-[306px] max-h-[280px] mb-6 sm:mb-0">
      <div className="flex flex-col justify-between h-full">
        <span className="border-b pt-4 pl-4 pb-4">Filtros</span>
        {filters.map((filter, index) => (
          <span
            key={index}
            className="border-b px-4 text-base h-full min-h-[80px] flex justify-between items-center bg-[#F8F8F8]"
          >
            {filter.type}
            {filter.more && (
              <ChevronDown strokeWidth={1} className="cursor-pointer" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
