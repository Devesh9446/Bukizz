class Variation{
    constructor(price,salePrice,sku,costPerItem){
        this.price=price;
        this.salePrice=salePrice;
        this.sku=sku;
        this.image=[];
        this.costPerItem=costPerItem;
        this.reviewIdList=[];
    }
    toJSON(){
        return {
            price:this.price,
            salePrice:this.salePrice,
            sku:this.sku,
            image:this.image,
            costPerItem:this.costPerItem,
            reviewIdList:this.reviewIdList,
        }
    }
    addimage(image){
        this.image.push(image);
    }
    addreviewIdList(reviewId){
        this.reviewIdList.push(reviewId);
    }
}

export {Variation}; 