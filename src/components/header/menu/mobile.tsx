"use client";

import { Menu, Search } from "lucide-react";
import {
  SheetContent,
  Sheet,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import Logo from "./logo";
import Informations from "./information";

export default function MenuMobile() {
  const menuItems = [
    { id: 1, name: "Produtos", link: "#" },
    { id: 2, name: "Sobre nós", link: "#" },
    { id: 3, name: "Contato", link: "#" },
    { id: 4, name: "Catálogos", link: "#" },
  ];

  return (
    <header className="w-full">
      <div className="container mx-auto flex justify-between items-center px-10">
        <Logo hidden="lg:hidden" />

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Menu de navegação
              </SheetDescription>
            </SheetHeader>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] outline-none"
            >
              <div className="flex items-center cursor-pointer bg-[#F8F8F8] rounded-full h-8 w-8 p-2 ">
                <Search strokeWidth={1.2} className="h-4 w-4" />
              </div>
              <nav className="flex flex-col text-xl gap-4 h-[80vh]">
                <ul className="flex flex-col space-y-4 mt-8 text-[#4C4D4C]">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="hover:opacity-80 hover:underline transition duration-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <Informations hidden="flex lg:hidden" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
