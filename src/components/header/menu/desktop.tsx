"use client";

import { Search } from "lucide-react";
import Logo from "./logo";
import Informations from "./information";

export default function MenuDesktop() {
  const menuItems = [
    { id: 1, name: "Produtos", link: "#" },
    { id: 2, name: "Sobre nós", link: "#" },
    { id: 3, name: "Contato", link: "#" },
    { id: 4, name: "Catálogos", link: "#" },
  ];

  return (
    <header className="w-full ">
      <div className="px-20 xl:px-20  container mx-auto flex justify-between items-center">
        <Logo hidden="hidden lg:block" />
        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-6 items-center text-[#4C4D4C]">
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

            <div className="flex items-center cursor-pointer bg-[#F8F8F8] rounded-full h-8 w-8 p-2">
              <Search strokeWidth={1.2} className="h-4 w-4" />
            </div>
          </ul>
        </nav>
        <Informations hidden="hidden lg:flex" />
      </div>
    </header>
  );
}
