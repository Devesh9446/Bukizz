class SetData{
    constructor(name){
        this.name=name;
        this.image=[];
        this.sku=0;
        this.price=0;
        this.salePrice=0;
    }
    addImage(image){
        this.image.push(image);
    }
}
export {SetData}; 