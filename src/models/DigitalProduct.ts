class DigitalProduct extends Product {
    fileSize: number;
}

getPriceWithTax(rate: number){
    return this.price;
}

getFileSize(){
    return `File Size: ${this.fileSize} MB` ;
}
