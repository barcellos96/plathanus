import { Button } from "@/components/ui/button";
import flag_brazil from "../../../app/assets/flag_brazil.png";
import { ChevronDown } from "lucide-react";

export default function ButtonsInformations({ hidden }: { hidden: string }) {
  return (
    <div className={`${hidden} justify-start items-center space-x-4`}>
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
  );
}
