import {Category} from "./category";

export interface Item {
  id: number;
  name: string;
  price: number;
  category: Category[];
}
