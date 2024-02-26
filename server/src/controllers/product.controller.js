import { apiError } from '../utils/apiError.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import { apiResponse } from '../utils/apiResponse.js';
import {app} from "../firebase.js"
import {doc,collection,query,updateDoc,where} from 'firebase/firestore'
import { Stream } from '../models/Stream.model.js';
import { SetData } from '../models/SetData.model.js';
import { ProductModel } from '../models/product.model.js';

const product=asyncHandler(async(req,res)=>{
    const {id}=req.param;
    if(!id){ 
        throw new apiError(404,"category id is required");
    }
    try{ 
        const q=query(collection(app,"product"),where("categoryId","==",id));
        const data=await getDoc(q);
        if(!data){
            res.status(200).json(new apiResponse(200,{},"no data found"));
        }
        res.status(200).json(new apiResponse(200,data,"data send successfully"));
    }catch(error){
        throw new apiError(400,error);
    }
})

const productAdd=asyncHandler(async(req,res)=>{
    const {name,description,categoryId,classId,board,stream,streamName,price,image,salePrice,sku}=req.body;
    if(!(name||description||classId||stream||board||price||image||salePrice||sku)){
        throw new apiError(400,"All fields required");
    }
    if(!categoryId){
        throw new apiError(400,"category Id is required");
    }
    if(!classId){
        throw new apiError(400,"class Id is required");
    }
    let newStream=null;
    let newSet=null;
    if(stream){
        if(!streamName){
            throw new apiError(400,"streamName is required");
        }
        newStream=new Stream(streamName,price,image,salePrice,sku);
    }else{
        newSet=new SetData(name,image,sku,price,salePrice);
    }
    try{
        const data=new ProductModel(name,description,price,categoryId,classId,board,newStream,retailerId,newSet,reviewIdList);
        req.status(200).json(new apiError(200,data,"data stored successfully"));
    }catch(error){  
        throw new apiError(400,error);
    }
})

const productStockUpdate=asyncHandler(async(req,res)=>{
    const {productId,newStock}=req.body;
    if(productId){
        throw new apiError(400,"productId is required");
    }
    try{
        const docRef=doc(app,"products",productId)      
        const updated_data=await updateDoc(docRef,{
            
        })
        res.status(200).json(new apiResponse(200,updated_data,"data send succesfully"));   
    }catch(error){
        throw new apiError(404,error);
    }
    
})

const productRetailerAdd=asyncHandler(async(req,res)=>{
    const {retailerId,productId}=req.body;
    if(!retailerId){
        throw new apiError(400,"retilerId is required");
    }
    if(!productId){
        throw new apiError(400,"productId is required");
    }
    
    try{
        const docRef=doc(app,"products",productId)      
        const updated_data=await updateDoc(docRef,{
            retailers: firebase.firestore.FieldValue.arrayUnion(retailerId)
        })
        res.status(200).json(new apiResponse(200,updated_data,"data send succesfully"));   
    }catch(error){
        throw new apiError(404,error);
    }

})

export {
    product,
    productAdd,
    productStockUpdate,
    productRetailerAdd,
}