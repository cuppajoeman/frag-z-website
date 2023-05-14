import { StaticImageData } from "next/image";

export interface Item {
    name: string;
    desc: string;
    price: string;
    img: StaticImageData;
  }