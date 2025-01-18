import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import flag_brazil from "../../app/assets/flag_brazil.png";

export default function Header() {
  const menuItems = [
    { id: 1, name: "Produtos", link: "#" },
    { id: 2, name: "Sobre nós", link: "#" },
    { id: 3, name: "Contato", link: "#" },
    { id: 4, name: "Catálogos", link: "#" },
  ];

  return (
    <header className="w-full ">
      <div className="container mx-auto flex justify-between items-center py-4 px-40">
        <div className="text-2xl text-[#4C4D4C] uppercase">logo</div>
        <nav className="flex items-center">
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
        <div className="flex items-center space-x-4">
          <Button className="text-white bg-[#E57200] hover:bg-[#E57200]/80 transition duration-300">
            Fale conosco
          </Button>
          <div className="flex items-center cursor-pointer">
            <img
              src={flag_brazil.src}
              width={24}
              height={24}
              alt="Bandeira do Brasil"
            />
            <ChevronDown strokeWidth={1.2} />
          </div>
        </div>
      </div>
    </header>
  );
}
