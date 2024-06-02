// trader.ts
import { StockMediator } from './stockMediator';

export abstract class Trader {
  protected mediator: StockMediator;
  protected name: string;

  constructor(mediator: StockMediator, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  public abstract buy(stock: string, quantity: number): void;
  public abstract sell(stock: string, quantity: number): void;
}