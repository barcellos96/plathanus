"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const pagination = Array.from({ length: 10 }, (_, i) => i + 1); // Mock de 10 páginas

export function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPagesToShow = 5; // Máximo de páginas visíveis antes de mostrar `ellipsis`
  const totalPages = pagination.length;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const getVisiblePages = () => {
    if (totalPages <= maxPagesToShow) {
      return pagination;
    }

    const start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const end = Math.min(totalPages, start + maxPagesToShow - 1);
    let visiblePages: (string | number)[] = pagination.slice(start - 1, end);

    if (start > 1) {
      visiblePages = [1, "ellipsis", ...visiblePages.slice(1)];
    }
    if (end < totalPages) {
      visiblePages = [...visiblePages.slice(0, -1), "ellipsis", totalPages];
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination className="my-10 text-[#707372]">
      <PaginationContent>
        <PaginationItem>
          <ChevronLeft
            className="cursor-pointer  hover:text-[#707372]/80"
            onClick={handlePrevious}
          />
        </PaginationItem>

        {visiblePages.map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page} className="hover:cursor-pointer">
              <PaginationLink
                className={`${
                  currentPage === page &&
                  "border rounded-full hover:rounded-full "
                }`}
                isActive={currentPage === page}
                onClick={(e) => {
                  e.preventDefault(); // Evita comportamento padrão
                  setCurrentPage(Number(page));
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <ChevronRight
            className="cursor-pointer hover:text-[#707372]/80"
            onClick={handleNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
