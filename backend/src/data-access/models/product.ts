import { Category } from "../../generated/types";

export interface Product {
  id: string;
  name: string;
  description: string;
  categories: Category[];
}
