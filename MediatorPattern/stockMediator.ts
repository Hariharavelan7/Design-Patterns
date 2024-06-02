import { Trader } from "./trader";

export interface StockMediator {
  buyStock(trader: Trader, stock: string, quantity: number): void;
  sellStock(trader: Trader, stock: string, quantity: number): void;
}
