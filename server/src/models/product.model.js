import { apiError } from "../utils/apiError.js";

class productModel{
    constructor(productId,name,description,price,stockQuantity,categoryId,image,classId,board,retailerId=""){
        if(!name){
            throw new apiError(400,"Product name is required");
        }
        if(!productId){
            throw new apiError(400,"Product Id is required");
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
        if(!image){
            throw new apiError(400,"image is required");
        }
        this.productId=productId;
        this.name=name;
        this.description=description;
        this.categoryId=categoryId;
        this.classId=classId;
        this.board=board;
        this.retailerId=retailerId;
        this.stream=[];
        this.set=[];
        this.reviewList=[];
        this.variation=new Map();
    }
    addSteam(stream){
        this.stream.push(stream);
    }
    addSet(set){
        this.set.push(set);
    }
    addReviewList(reviewId){
        this.reviewList.push(reviewId);
    }
    addVariation(setLength,variation){
        console.log("added");
        if (!this.variation.has(setLength)) {
            this.variation.set(setLength, []);
        }
        this.variation.get(setLength).push(variation);
    }
    streamLength(){
        return this.stream.length;
    }
    setLength(){
        return this.set.length;
    }
}
export {
    productModel
}