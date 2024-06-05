interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(stockSymbol: string, price: number): void;
}

interface Observer {
  update(stockSymbol: string, price: number): void;
}

class StockMarket implements Subject {
  private observers: Observer[] = [];
  private stockPrices: { [symbol: string]: number } = {};

  setStockPrice(symbol: string, price: number): void {
    this.stockPrices[symbol] = price;
    this.notify(symbol, price);
  }

  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  public notify(stockSymbol: string, price: number): void {
    for (const observer of this.observers) {
      observer.update(stockSymbol, price);
    }
  }
}

class MobileApp implements Observer {
  public update(stockSymbol: string, price: number): void {
    console.log(`Mobile App - Stock: ${stockSymbol} Price: ${price}`);
  }
}

class WebApp implements Observer {
  public update(stockSymbol: string, price: number): void {
    console.log(`Web App - Stock: ${stockSymbol} Price: ${price}`);
  }
}

const stockMarket = new StockMarket();
const mobileApp = new MobileApp();
const webApp = new WebApp();

stockMarket.attach(mobileApp);
stockMarket.attach(webApp);

stockMarket.setStockPrice("AMZN", 150);

stockMarket.setStockPrice("NVDA", 2750);

stockMarket.detach(webApp);

stockMarket.setStockPrice("MSFT", 600);
