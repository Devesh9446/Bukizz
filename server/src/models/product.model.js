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
        this.variation = new Map();
    }
    addSet(set) {
        const existingSetIndex = this.set.findIndex(existingSet => existingSet.name === set.name);
        if (existingSetIndex === -1) {
            this.set.push(set);
        } 
    }
    
    addStream(stream) {
        const existingStreamIndex = this.stream.findIndex(existingStream => existingStream.name === stream.name);
        if (existingStreamIndex === -1) {
            this.stream.push(stream);
        }
    }
    addReviewList(reviewId){
        this.reviewList.push(reviewId);
    }
    addVariation(setIndex, streamIndex, variation) {
        console.log(setIndex);
        console.log(streamIndex);
        console.log(variation);
        if (setIndex >= 0) {
            if (streamIndex >= 0) {
                // if (!this.variation.has(setIndex)) {
                //     this.variation.set(setIndex, new Map());
                //     console.log("Adding set");
                // }
                const data = new Map();
                data.set(streamIndex , JSON.stringify(variation));
                this.variation.set(setIndex, data);

                console.log("Data Added" + JSON.stringify(this.variation.get(setIndex).get(streamIndex)));
            } else {
                throw new apiError(400, "Invalid stream index");
            }
        } else {
            throw new apiError(400, "Invalid set index");
        }
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