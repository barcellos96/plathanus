import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FamilyNav from "./family-nav";

export function CardFamily() {
  return (
    <Card className="max-w-[814px] border-none shadow-none outline-none">
      <CardHeader>
        <CardTitle className="text-[#4C4D4C] max-w-[360px] font-[500] leading-8">
          Conheça as{" "}
          <strong className="text-[#80276C]">famílias exclusivas </strong>
          da linha Orthopedic
        </CardTitle>
        <CardDescription>
          <FamilyNav />
        </CardDescription>
      </CardHeader>
      <CardContent className="max-w-[510px] text-[#4C4D4C] leading-[22px]">
        Família voltada para extrair os benefícios do Neoprene.{" "}
        <span className="text-[#121212]">
          Propriedades térmicas, compressivas e elásticas:{" "}
        </span>{" "}
        são essas três propriedades que fazem do Neoprene uma ferramenta eficaz
        no tratamento e prevenção de lesões no tratamento ortopédico.
      </CardContent>
    </Card>
  );
}
