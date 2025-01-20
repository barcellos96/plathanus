"use client";

import { useRouter } from "next/navigation";

export default function Logo({ hidden }: { hidden: string }) {
  const { push } = useRouter();
  return (
    <div
      className={`${hidden} text-2xl text-[#4C4D4C] uppercase`}
      onClick={() => push("/")}
    >
      logo
    </div>
  );
}
