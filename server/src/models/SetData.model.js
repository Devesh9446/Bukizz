class SetData{
    constructor(name){
        this.name=name;
        this.image=[];
        this.sku=0;
        this.price=0;
        this.salePrice=0;
    }
    toJSON(){
        return {
            name:this.name,
            image:this.image,
            sku:this.sku,
            price:this.price,
            salePrice:this.salePrice,
        }
    }
    addImage(image){
        this.image.push(image);
    }
}
export {SetData}; 