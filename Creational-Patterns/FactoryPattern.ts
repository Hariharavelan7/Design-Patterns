interface Payment {
  processPayment(amount: number): void;
}

class CreditcardPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class PaypalPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of ${amount}`);
  }
}

class BankTransferPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Processing bank transfer payment of ${amount}`);
  }
}

class PaymentFactory {
  static createPayment(type: string): Payment {
    switch (type) {
      case 'creditCard':
        return new CreditcardPayment();
      case 'paypal':
        return new PaypalPayment();
      case 'bankTransfer':
        return new BankTransferPayment();
      default:
        throw new Error('Invalid payment type');
    }
  }
}

function processOrder(paymentType: string, amount: number) {
  try {
    const payment: Payment = PaymentFactory.createPayment(paymentType);
    payment.processPayment(amount);
  } catch (error) {
    console.error((error as Error).message);
  }
}

processOrder('creditCard', 100);
processOrder('paypal', 200);
processOrder('bankTransfer', 300);
processOrder('bitCoin', 400);