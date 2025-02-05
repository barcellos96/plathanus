//todas as imagens para usar em produto
import prod1 from "@/assets/products/prod1.png";
import prod2 from "@/assets/products/prod2.png";
import prod3 from "@/assets/products/prod3.jpg";
import prod4 from "@/assets/products/prod4.png";
import prod5 from "@/assets/products/prod5.png";
import prod6 from "@/assets/products/prod6.png";
import prod7 from "@/assets/products/prod7.jpg";
import prod8 from "@/assets/products/prod8.png";
import prod9 from "@/assets/products/prod9.png";

import more1 from "@/assets/products/more/more1.jpg";
import more2 from "@/assets/products/more/more2.jpg";
import slug1 from "@/assets/products/more/slug1.png";
import slug2 from "@/assets/products/more/slug2.png";

// Mock data family
export const family = [
  { id: 1, name: "Hidrolight Neo" },
  { id: 2, name: "Comfort Air" },
  { id: 3, name: "Ortho Recovery" },
  { id: 4, name: "Air Flex" },
  { id: 5, name: "Softline" },
  { id: 6, name: "Foot Care" },
  { id: 7, name: "Lean" },
];

// Mock data products
export const products = [
  {
    id: "OR1065-1",
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: [prod1, more1, more2, slug1, slug2],
    isNew: false,
    familyId: 1,
  },
  {
    id: "OR1066-1",
    name: "Órtese Soft Curta sem Polegar",
    code: "OR1066",
    image: [prod2, more1, more2, slug1, slug2],
    isNew: true,
    familyId: 1,
  },
  {
    id: "OR1065-2",
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: [prod4, more1, more2, slug1, slug2],
    isNew: false,
    familyId: 2,
  },
  {
    id: "OR1051-1",
    name: "Órtese Safe Air",
    code: "OR1051",
    image: [prod3, more1, more2, slug1, slug2],
    isNew: true,
    familyId: 3,
  },
  {
    id: "OR1065-3",
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: [prod5, more1, more2, slug1, slug2],
    isNew: false,
    familyId: 3,
  },
  {
    id: "OR1066-2",
    name: "Órtese Soft Curta sem Polegar",
    code: "OR1066",
    image: [prod6, more1, more2, slug1, slug2],
    isNew: true,
    familyId: 4,
  },
  {
    id: "OR1051-2",
    name: "Órtese Safe Air",
    code: "OR1051",
    image: [prod7, more1, more2, slug1, slug2],
    isNew: true,
    familyId: 5,
  },
  {
    id: "OR1065-4",
    name: "Órtese Soft Curta com Polegar",
    code: "OR1065",
    image: [prod8, more1, more2, slug1, slug2],
    isNew: false,
    familyId: 6,
  },
  {
    id: "OR1066-3",
    name: "Órtese Soft Curta sem Polegar",
    code: "OR1066",
    image: [prod9, more1, more2, slug1, slug2],
    isNew: true,
    familyId: 7,
  },
];

//mock data filters
export const filters = [
  {
    type: "Lançamentos",
    more: false,
  },
  {
    type: "Famílias/Tecnologias",
    more: true,
    family: family,
  },
  {
    type: "Produtos",
    more: true,
  },
];
