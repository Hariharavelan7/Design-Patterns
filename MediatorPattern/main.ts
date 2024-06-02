// main.ts
import { StockExchange } from './stockExchange';
import { ConcreteTrader } from './concreteTrader';

// Create a stock exchange (mediator)
const stockExchange = new StockExchange();

// Create traders
const trader1 = new ConcreteTrader(stockExchange, "Trader 1");
const trader2 = new ConcreteTrader(stockExchange, "Trader 2");
const trader3 = new ConcreteTrader(stockExchange, "Trader 3");

// Add traders to the stock exchange
stockExchange.addTrader(trader1);
stockExchange.addTrader(trader2);
stockExchange.addTrader(trader3);

// Traders perform buy and sell operations
trader1.sell("AAPL", 50); // Trader 1 sells 50 shares of AAPL
trader2.buy("AAPL", 30);  // Trader 2 buys 30 shares of AAPL
trader3.buy("AAPL", 20);  // Trader 3 buys 20 shares of AAPL
trader2.sell("GOOGL", 100); // Trader 2 sells 100 shares of GOOGL
trader1.buy("GOOGL", 100);  // Trader 1 buys 100 shares of GOOGL
