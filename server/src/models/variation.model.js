class Variation{
    constructor(price,salePrice,sku,costPerItem){
        this.price=price;
        this.salePrice=salePrice;
        this.sku=sku;
        this.image=[];
        this.costPerItem=costPerItem;
        this.reviewIdList=[];
    }
    addimage(image){
        this.image.push(image);
    }
    addreviewIdList(reviewId){
        this.reviewIdList.push(reviewId);
    }
}

export {Variation}; 