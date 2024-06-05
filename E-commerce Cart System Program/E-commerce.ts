import * as readline from 'readline';

abstract class Product {
  constructor(public name: string, public price: number, public available: boolean) {}

  abstract clone(): Product;
}

class Electronic extends Product {
  clone(): Product {
    return new Electronic(this.name, this.price, this.available);
  }
}

class Clothing extends Product {
  clone(): Product {
    return new Clothing(this.name, this.price, this.available);
  }
}

class CartItem {
  constructor(public product: Product, public quantity: number) {}
}

class Cart {
  private items: Map<string, CartItem> = new Map();

  addProduct(product: Product, quantity: number = 1) {
    if (product.available) {
      const item = this.items.get(product.name);
      if (item) {
        item.quantity += quantity;
      } else {
        this.items.set(product.name, new CartItem(product.clone(), quantity));
      }
    }
  }

  updateQuantity(productName: string, quantity: number) {
    const item = this.items.get(productName);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.items.delete(productName);
      }
    }
  }

  removeProduct(productName: string) {
    this.items.delete(productName);
  }

  viewCart() {
    const cartContents: string[] = [];
    this.items.forEach((item) => {
      cartContents.push(`${item.quantity} ${item.product.name}(s)`);
    });
    return `You have ${cartContents.join(' and ')} in your cart.`;
  }

  calculateTotal(discountStrategy: DiscountStrategy): number {
    let total = 0;
    this.items.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return discountStrategy.applyDiscount(total);
  }
}

interface DiscountStrategy {
  applyDiscount(amount: number): number;
}

class NoDiscount implements DiscountStrategy {
  applyDiscount(amount: number): number {
    return amount;
  }
}

class PercentageOff implements DiscountStrategy {
  constructor(private percentage: number) {}

  applyDiscount(amount: number): number {
    return amount - (amount * this.percentage) / 100;
  }
}

class BuyOneGetOneFree implements DiscountStrategy {
  applyDiscount(amount: number): number {
    return amount / 2;
  }
}

const products: Product[] = [
  new Electronic('Laptop', 1000, true),
  new Electronic('Headphones', 50, true),
  new Clothing('T-shirt', 20, true),
];

function displayProductList(products: Product[]): void {
  console.log('Available Products:');
  products.forEach(product => {
    console.log(`Name: ${product.name}, Price: $${product.price}, Available: ${product.available}`);
  });
}

function findProductByName(name: string): Product | undefined {
  return products.find(product => product.name === name);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cart = new Cart();

function mainMenu() {
  console.log(`
    1. Display Product List
    2. Add Product to Cart
    3. Update Quantity in Cart
    4. Remove Product from Cart
    5. View Cart
    6. Calculate Total Bill
    7. Exit
  `);

  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        displayProductList(products);
        mainMenu();
        break;
      case '2':
        rl.question('Enter product name to add: ', (productName) => {
          const product = findProductByName(productName);
          if (product) {
            rl.question('Enter quantity: ', (quantity) => {
              cart.addProduct(product, parseInt(quantity));
              console.log(`${quantity} ${productName}(s) added to cart.`);
              mainMenu();
            });
          } else {
            console.log('Product not found.');
            mainMenu();
          }
        });
        break;
      case '3':
        rl.question('Enter product name to update: ', (productName) => {
          rl.question('Enter new quantity: ', (quantity) => {
            cart.updateQuantity(productName, parseInt(quantity));
            console.log(`Updated ${productName} quantity to ${quantity}.`);
            mainMenu();
          });
        });
        break;
      case '4':
        rl.question('Enter product name to remove: ', (productName) => {
          cart.removeProduct(productName);
          console.log(`${productName} removed from cart.`);
          mainMenu();
        });
        break;
      case '5':
        console.log(cart.viewCart());
        mainMenu();
        break;
      case '6':
        console.log(`Your total bill is $${cart.calculateTotal(new NoDiscount())}.`);
        mainMenu();
        break;
      case '7':
        rl.close();
        break;
      default:
        console.log('Invalid option. Please try again.');
        mainMenu();
        break;
    }
  });
}

mainMenu();
