import { family } from "../../data";

export default function FamilyNav() {
  return (
    <div className="w-full bg-white mt-6">
      <div className="flex items-center space-x-2 ">
        {family.map((family, index) => (
          <div
            key={index}
            className={`flex items-center  ${
              index == 0
                ? "bg-[#80276C] text-white"
                : "bg-zinc-50 text-[#A75897]"
            } px-2 py-1 rounded-md whitespace-nowrap `}
          >
            <span className="font-extralight">{family.name}</span>
            <sup className=" text-xs ml-0.5">®</sup>
          </div>
        ))}
      </div>
    </div>
  );
}
