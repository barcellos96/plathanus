import { CardFamily } from "@/components/content/card/family/family-card";
import Header from "@/components/header";
import Hero from "@/components/header/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="px-12 md:px-20 border-b border-[#EBEBEB]">
        <CardFamily />
      </div>
    </div>
  );
}
