"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { filters } from "../../data/mock";

export default function Filters() {
  const [expandedFilter, setExpandedFilter] = useState<number | null>(null);
  const [selectedFamilies, setSelectedFamilies] = useState<number[]>([]);

  const toggleFilter = (index: number) => {
    setExpandedFilter((prev) => (prev === index ? null : index));
  };

  const handleCheckboxChange = (familyId: number) => {
    setSelectedFamilies(
      (prev) =>
        prev.includes(familyId)
          ? prev.filter((id) => id !== familyId) // Remove o ID se já estiver selecionado
          : [...prev, familyId] // Adiciona o ID se não estiver
    );
  };

  // Atualiza os parâmetros da URL quando `selectedFamilies` mudar
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedFamilies.length > 0) {
      params.set("families", selectedFamilies.join(","));
    }

    // Atualizar a URL sem recarregar a página
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [selectedFamilies]);

  return (
    <div className="rounded-lg border border-[#D5D7D8] min-w-[306px] h-full mb-6 sm:mb-0">
      <div className="flex flex-col justify-between h-full">
        <span className="border-b pt-4 pl-4 pb-4">Filtros</span>
        {filters.map((filter, index) => (
          <div key={index} className="border-b">
            <span
              className="px-4 text-base h-full min-h-[80px] flex justify-between items-center bg-[#F8F8F8] cursor-pointer"
              onClick={() => toggleFilter(index)}
            >
              {filter.type}
              {filter.more && (
                <ChevronDown
                  strokeWidth={1}
                  className={`transition-transform ${
                    expandedFilter === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </span>
            {filter.more && expandedFilter === index && filter.family && (
              <div className="pl-6 bg-gray-100">
                {filter.family.map((item) => (
                  <label key={item.id} className="py-2 flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedFamilies.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    {item.name}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
