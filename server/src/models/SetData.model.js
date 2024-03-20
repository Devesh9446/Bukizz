class SetData {
  constructor(name, image = [], price = 0,sku=0, salePrice = 0) {
    this.name = name;
    this.image = image;
    this.sku = sku;
    this.price = price;
    this.salePrice = salePrice;
  }

  toJSON() {
    return {
      name: this.name,
      image: this.image,
      sku: this.sku,
      price: this.price,
      salePrice: this.salePrice,
    };
  }
  addImage(image) {
    this.image.push(image);
  }
}
export {SetData}; 