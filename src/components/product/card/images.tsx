"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { ProductImage } from "..";
import { useState } from "react";

interface Props {
  images: ProductImage[];
  isNew: boolean;
}

export default function ProductGallery({ images, isNew }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === images.length - 1;

  const handlePrevious = () => {
    if (!isFirstImage) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLastImage) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;

    setMousePosition({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <div
          className={`${
            isZoomed && "cursor-zoom-in"
          } relative overflow-hidden rounded-lg border border-gray-200`}
          onMouseMove={handleMouseMove}
        >
          <img
            src={images[currentImageIndex].src}
            alt={"Product image"}
            className={`w-full h-[523px] object-cover transition-transform duration-200 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                  }
                : undefined
            }
          />
          {isNew && (
            <span className="absolute top-6 left-6 bg-[#9A1A80]/60 text-white px-3 py-1 rounded-md text-sm lg:text-lg">
              Lançamento
            </span>
          )}

          <button
            onClick={toggleZoom}
            className="absolute bottom-4 right-4 bg-zinc-500 bg-opacity-60 p-1 rounded-lg shadow-lg hover:bg-zinc-400 transition-colors"
          >
            {isZoomed ? (
              <ZoomOut size={20} strokeWidth={1} color="white" />
            ) : (
              <ZoomIn size={20} strokeWidth={1} color="white" />
            )}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <ChevronLeft
          size={30}
          onClick={handlePrevious}
          className={` rounded-full transition-colors ${
            isFirstImage
              ? " text-[#D5D7D8] bg-transparent cursor-not-allowed"
              : " text-[#4C4D4C] cursor-pointer"
          }`}
        />
        <div className="flex gap-2 overflow-x-auto pb-2 items-center">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 rounded-lg bg-white outline-none overflow-auto cursor-pointer min-w-[90px] ${
                currentImageIndex === index
                  ? "border-b-[#E57200] border-b-4"
                  : "border-none opacity-50"
              }`}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className="max-w-[90px] max-h-[112px] outline-none"
              />
            </div>
          ))}
        </div>
        <ChevronRight
          size={30}
          onClick={handleNext}
          className={` rounded-full transition-colors ${
            isLastImage
              ? " text-[#D5D7D8] bg-transparent cursor-not-allowed"
              : " text-[#4C4D4C] cursor-pointer"
          }`}
        />
      </div>

      <span className="mt-4 flex items-center gap-2 hover:underline hover:underline-offset-4 hover:cursor-pointer text-[#E57200]">
        Baixar Folder do Produto <Download size={16} />
      </span>
    </div>
  );
}
