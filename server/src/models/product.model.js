import { apiError } from "../utils/apiError.js";

class productModel{
    constructor(name,description,price,stockQuantity,categoryId,image,classId,board,salePrice,retailerId,stream,set,reviewIdList){
        if(!name){
            throw new apiError(400,"Product name is required");
        }
        if(!description){
            throw new apiError(400,"description is required");
        }
        if(!price){
            throw new apiError(400,"Price is required");
        }
        if(!stockQuantity){
            throw new apiError(400,"stock quantity is required");
        } 
        if(!categoryId){
            throw new apiError(400,"categoryId is required");
        }
        if(!retailerId){
            throw new apiError(400,"Retailer ID is required");
        }
        if(!image){
            throw new apiError(400,"image is required");
        }
        this.name=name;
        this.description=description;
        this.price=price;
        this.stockQuantity=stockQuantity;
        this.categoryId=categoryId;
        this.image=image;
        this.classId=classId;
        this.board=board;
        this.salePrice=salePrice;
        this.stream=stream;
        this.set=set;
        this.reviewIdList=reviewIdList;
    }
}
export {
    productModel
}