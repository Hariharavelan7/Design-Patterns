interface Product {
    getPrice(): number;
    purchase(): void;
}

class RealProduct implements Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    purchase(): void {
        console.log(`Purchased ${this.name} for $${this.price}`);
    }
}

class ProductProxy implements Product {
    private realProduct: RealProduct | null = null;
    private name: string;
    private price: number;
    private userBalance: number;

    constructor(name: string, price: number, userBalance: number) {
        this.name = name;
        this.price = price;
        this.userBalance = userBalance;
    }

    getPrice(): number {
        return this.price;
    }

    purchase(): void {
        if (this.realProduct === null) {
            this.realProduct = new RealProduct(this.name, this.price);
        }
        if (this.userBalance >= this.price) {
            this.realProduct.purchase();
            this.userBalance -= this.price;
            console.log(`Remaining balance: $${this.userBalance}`);
        } else {
            console.log("Insufficient funds to purchase the product.");
        }
    }
}

let userBalance: number = 1000;

const product: Product = new ProductProxy("Laptop", 800, userBalance);

product.purchase();
