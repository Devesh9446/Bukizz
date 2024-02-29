import { apiError } from "../utils/apiError.js";
import { SetData } from "./SetData.model.js";
import { Stream } from "./Stream.model.js";

class productModel{
    constructor({ city, productId, name, description, categoryId, classId, board, set = [], retailerId = "",stream=[],variation={}}){
        if(!name){
            throw new apiError(400,"Product name is required");
        }
        if(!productId){
            throw new apiError(400,"Product Id is required");
        }
        if(!description){
            throw new apiError(400,"description is required");
        }
        
        // if(!stockQuantity){
        //     throw new apiError(400,"stock quantity is required");
        // }  
        if(!categoryId){
            throw new apiError(400,"categoryId is required");
        }
        
        this.city=city;
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
        this.variation = variation;

        set.forEach(element => {
            this.set.push(new SetData(element).toJSON());
        });
        stream.forEach(element => {
            this.set.push(new Stream(element).toJSON());
        });
        
    }
    toJSON(){
         return {
             retailerId:this.retailerId,
            city:this.city,
            productId:this.productId,
            name:this.name,
            description:this.description,
            categoryId:this.categoryId,
            classId : this.classId ,
            board:this.board, 
            retailerId:this.retailerId,
            stream:this.stream,
            set:this.set,
             reviewIdList:this.reviewList,
            variation:this.variation,
         };
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
        if (setIndex >= 0) {
            if (streamIndex >= 0) {
                if (!this.variation.hasOwnProperty(setIndex)) {
                    this.variation[setIndex] = {};
                }
                this.variation[setIndex][streamIndex] = variation;
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