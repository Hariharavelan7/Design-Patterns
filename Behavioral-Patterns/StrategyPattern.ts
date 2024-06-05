interface PaymentStrategy {
  pay(name: string, amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  // private name: string;
  private cardNumber: string;

  constructor(name: string, cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(name: string, amount: number): void {
    console.log(`Paid ${amount} via Credit Card by ${name}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  // private name
  private email: string;
  
  constructor(email: string) {
    this.email = email;
  }

  pay(name: string, amount: number): void {
    console.log(`Paid ${amount} via PayPal: ${this.email}`);
  }
}

class PaymentMethod {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  executePayment(name: string, amount: number): void {
    this.strategy.pay(name, amount);
  }
}

const creditCardPayment = new CreditCardPayment("Harihara velan", "1234-5678-9810-1112");
const payPalPayment = new PayPalPayment("khariharavelan@gmail.com");

const paymentMethod = new PaymentMethod(creditCardPayment);
paymentMethod.executePayment("Harihara velan",1000);

paymentMethod.setStrategy(payPalPayment);
paymentMethod.executePayment("Harihara velan", 2000);