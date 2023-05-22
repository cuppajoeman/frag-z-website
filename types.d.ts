import { StaticImageData } from "next/image";
import { Database } from "./lib/database.types";

export interface Item {
  name: string;
  desc: string;
  price: string;
  img: StaticImageData;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  email: string;
  password: string;
  name: string;
}

export interface FileProps {
  id: number;
  title: string;
  content: string;
  created_at: string;
  authors: string[];
}

export type Profile = Database["public"]["Tables"]["profiles"]["Row"]

