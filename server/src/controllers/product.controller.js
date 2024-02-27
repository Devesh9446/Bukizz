import { apiError } from '../utils/apiError.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import { apiResponse } from '../utils/apiResponse.js';
import {app} from "../firebase.js"
import {doc,collection,query,updateDoc,where,getDocs} from 'firebase/firestore'

const product=asyncHandler(async(req,res)=>{
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

export {
    product,
    productByCategoryId,
    productByproductId,
    productStockUpdate,

}