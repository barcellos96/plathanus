import phone from "@/assets/telephone.png";
import email from "@/assets/email.png";
import facebook from "@/assets/facebook.png";
import insta from "@/assets/insta.png";
import youtube from "@/assets/youtube.png";

import flag_brazil from "@/assets/flag_brazil.png";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4C4D4C] text-white pt-8">
      <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(253px,0fr))] gap-6 px-20">
        {/* Logo */}
        <div className="text-3xl ">LOGO</div>

        {/* Institucional */}
        <div className="font-extralight">
          <h3 className="font-semibold mb-4">Institucional</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Trabalhe conosco
              </a>
            </li>
          </ul>
        </div>

        {/* Download de Catálogos */}
        <div>
          <h3 className="font-semibold mb-4">Download de Catálogos</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Catálogo geral
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Linha Orthopedic
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Linha Sports
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Linha Special Cares
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Catálogo Foot Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Catálogo Acessibilidade
              </a>
            </li>
          </ul>
        </div>

        {/* Linhas de Produtos */}
        <div>
          <h3 className="font-semibold mb-4">Linhas de produtos</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Orthopedic
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Special Cares
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold mb-4">
            Entre em contato e tire suas dúvidas
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <img src={phone.src} alt="icone telefone" />
              <a href="tel:+554833333333" className="hover:underline">
                +55 48 3333 3333
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={email.src} alt="icone email" />
              <div className="flex flex-col">
                <a
                  href="mailto:sac@loremipsum.com.br"
                  className="hover:underline"
                >
                  sac@loremipsum.com.br
                </a>
                <a
                  href="mailto:rp@loremipsum.com.br"
                  className="hover:underline"
                >
                  rp@loremipsum.com.br
                </a>
              </div>
            </li>
            <li>
              <h3 className="font-semibold mt-4">
                Nos acompanhe também nas redes sociais
              </h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.instagram.com/plathanuss/?hl=pt"
                  target="_blank"
                  className="hover:underline"
                >
                  <img src={insta.src} alt="icone insta" />
                </a>
                <a
                  href="https://www.facebook.com/plathanus"
                  target="_blank"
                  className="hover:underline"
                >
                  <img src={facebook.src} alt="icone facebook" />
                </a>
                <a
                  href="https://www.youtube.com/@plathanustech1918"
                  className="hover:underline"
                  target="_blank"
                >
                  <img src={youtube.src} alt="icone youtube" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center px-20 mt-4 py-6 border-t border-[#707372]">
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between w-full">
          <div className="flex text-sm gap-1 items-center hover:cursor-pointer">
            Selecionar País{" "}
            <img src={flag_brazil.src} alt="Bandeira do Brasil" />
            <ChevronDown strokeWidth={1.2} />
          </div>

          <p className="text-sm text-center md:text-end ">
            &copy; 2023 Lorem Ipsum. Todos os direitos reservados. <br />{" "}
            <br className="sm:hidden" />
            Av dos Búzios, 150 - Florianópolis - SC - Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
