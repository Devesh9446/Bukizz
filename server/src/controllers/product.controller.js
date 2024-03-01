import { apiError } from '../utils/apiError.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import { apiResponse } from '../utils/apiResponse.js';
import {app} from "../firebase.js"
import {doc,collection,query,updateDoc,where,getDocs,addDoc} from 'firebase/firestore'
import { SetData } from '../models/SetData.model.js';
import { Stream } from '../models/Stream.model.js';
import { Variation } from '../models/variation.model.js';
import { productModel } from '../models/product.model.js';
import {file} from '../utils/apiFiles.js'

const product=asyncHandler(async(_,res)=>{
    try {
        
        const snapshot = await getDocs(collection(app, "products"));
        const data = snapshot.docs.map((doc) => doc.data());
        console.log(snapshot);
        res.status(200).json(new apiResponse(200, data, "data send successfully"));
      } catch (error) {
        throw new apiError(400, error);
      }
})

const productByCategoryId=asyncHandler(async(req,res)=>{
    const {id}=req.param;
    if(!id){ 
        throw new apiError(404,"category id is required");
    }
    try{
        const q=query(collection(app,"products"),where("categoryId","==",id));
        const data=await getDocs(q);
        if(!data){
            res.status(200).json(new apiResponse(200,{},"no data found"));
        }
        res.status(200).json(new apiResponse(200,data,"data send successfully"));
    }catch(error){
        throw new apiError(400,error);
    }
})

const productByproductId=asyncHandler(async(req,res)=>{
    const {id}=req.param;
    if(!id){ 
        throw new apiError(404,"product id is required");
    }
    try{
        const q=query(collection(app,"products"),where("productsId","==",id));
        const data=await getDocs(q);
        if(!data){
            res.status(200).json(new apiResponse(200,{},"no data found"));
        }
        res.status(200).json(new apiResponse(200,data,"data send successfully"));
    }catch(error){
        throw new apiError(400,error);
    }
})

const productStockUpdate=asyncHandler(async(req,res)=>{
    const {productId,Updated_value}=req.body;
    if(!productId){
        throw new apiError(400,"product ID is required"); 
    }
    if(!Updated_value){
        throw new apiError(400,"Updated Vlaue is requred");
    }
    if(!Updated_value<0){
        throw new apiError(400,"Updated value cannot be negative");
    }

    try{
        const instance=doc(app,"category",productId);
        const updated_data=await updateDoc(instance,{
            stock:Updated_value,
        })
        res.status(200).json(new apiResponse(200,updated_data,"data updated successfully"))
    }catch(error){
        throw new apiError(400,error);
    }
})

const productAdd=asyncHandler(async(req,res)=>{
    console.log(req.body);
    const { productId, name, retailerId, description, categoryId, classId, board, set, city, variation, stream }=req.body;
    if(!(productId,name,description,board)){
        throw new apiError(400,"All fields required");
    }
    if(!categoryId){
        throw new apiError(400,"category Id is required");
    }
    if(!classId){
        throw new apiError(400,"classId is required");
    }
    
    
    // const set1=new SetData(setName);
    // set1.addImage(image);
    // const jsonData1 = JSON.stringify(set1);
    // const  set= JSON.parse(jsonData1);

    // const stream1=new Stream(streamName||0);
    // stream1.addImage(image); 
    // const jsonData2 = JSON.stringify(stream1);
    // const stream = JSON.parse(jsonData2);

    const new_product1 = new productModel({ city, productId, name, description, categoryId, classId, board, set, retailerId, stream, variation });
    // console.log("new_product1",new_product1);
    // new_product1.addSet(set);
    // new_product1.addStream(stream || 0);
    // const setIndex = new_product1.set.findIndex(setData => setData.name === setName);
    // const streamIndex = new_product1.stream.findIndex(streamData => streamData.name === streamName);
    // // console.log("setIndex : ",setIndex,streamIndex);
    // const variation1=new Variation(price,salePrice,sku,image,costPerItem)
    // new_product1.addVariation(setIndex, streamIndex, variation1.toJSON());
    // const new_product = new_product1.toJSON();

    console.log(new_product1);

    const resp = await addDoc(collection(app, "test"),new_product1.toJSON() );
    console.log(resp.id);
    // res.status(200).json(new apiResponse(200,"new_product1","data stored successfully"));
    res.status(200).json(new apiResponse(200,new_product1,"data stored successfully"));
})

export {
    product,
    productByCategoryId,
    productByproductId,
    productStockUpdate,
    productAdd
}