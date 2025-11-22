class Product {
    sku: string;
    name: string;
    price: number;
}

function displayDetails(){
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
}

function getPriceWithTax(rate: number){
    let tax = this.price * rate;
    let finalPrice = this.price + tax;
    return finalPrice;
}
