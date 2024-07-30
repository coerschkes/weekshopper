import {Market} from "./market";

export interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  market: Market[];
}
