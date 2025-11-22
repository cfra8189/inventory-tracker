class PhysicalProduct extends Product {
    weight: number;
}

getPriceWithTax(rate: number){
    let rate = 0.10;
    let tax = this.price * rate;
    let finalPrice = this.price + tax;
    return finalPrice;
}

getWeight(){
    return `Weight: ${this.weight} kg` ;
}

