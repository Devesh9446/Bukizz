class GeneralProductModel {
  constructor(
    city,
    productId,
    name,
    description,
    deliveryCharge,
    categoryId,
    brand,
    retailerId = "",
    variation = []
  ) {
    if (!name) {
      throw new apiError(400, "Product name is required");
    }
    if (!productId) {
      throw new apiError(400, "Product Id is required");
    }
    if (!description) {
      throw new apiError(400, "description is required");
    }
    if (!categoryId) {
      throw new apiError(400, "categoryId is required");
    }

    this.city = city;
    this.productId = productId;
    this.name = name;
    this.description = description;
    this.categoryId = categoryId;
    this.brand = brand;
    this.retailerId = retailerId;
    this.deliveryCharge = deliveryCharge;
    this.variation = variation;
  }

  toJSON() {
    return {
      city: this.city,
      productId: this.productId,
      name: this.name,
      description: this.description,
      categoryId: this.categoryId,
      brand: this.brand,
      retailerId: this.retailerId,
      deliveryCharge: this.deliveryCharge,
      variation: this.variation,
    };
  }
}


export { GeneralProductModel };