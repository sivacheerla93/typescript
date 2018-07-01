class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    print(): void {
        console.log(this.name);
        console.log(this.price);
    }
}

// for inheritance
class DiscountProduct extends Product {
    protected discountRate: number;
    constructor(name: string, price: number, discountRate: number) {
        super(name, price);
        this.discountRate = discountRate;
    }
    print(): void {
        super.print();
        console.log(this.discountRate);
    }
    getNetPrice(): number {
        return this.price - this.price * this.discountRate / 100;
    }
}

let dp = new DiscountProduct("iPhone7 Plus", 70000, 20);
dp.print();
console.log(dp.getNetPrice());