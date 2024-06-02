// concreteTrader.ts
import { Trader } from './trader';
import { StockMediator } from './stockMediator';

export class ConcreteTrader extends Trader {
  constructor(mediator: StockMediator, name: string) {
    super(mediator, name);
  }

  public buy(stock: string, quantity: number): void {
    console.log(`${this.name} wants to buy ${quantity} of ${stock}`);
    this.mediator.buyStock(this, stock, quantity);
  }

  public sell(stock: string, quantity: number): void {
    console.log(`${this.name} wants to sell ${quantity} of ${stock}`);
    this.mediator.sellStock(this, stock, quantity);
  }
}