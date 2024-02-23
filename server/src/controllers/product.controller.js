import {asyncHandler} from "./utils/asyncHandler";
import {apiResponse} from "../utils/apiResponse";
import {apiError} from "../utils/apiError";
import {doc,getDoc, updateDoc} from "firebase/firestore";
import {app} from "./firebase.js"

const product=asyncHandler(async(_,res)=>{
    try{
        const instance=doc(app,"Category");
        const data=await getDoc(instance)
        if(data.exists()){
            data=data.data();
        }
        else{
            res.status(200).json(new apiResponse(200,{},"No data found"));
        }
        res.status(200).json(new apiResponse(200,data,"data send successfully"));
    }catch(error){
        throw new apiError(400,error)
    }
})
// const productAdd=asyncHandler(async(req,res)=>{
//     const {praductName,Quantity,}=req.body;
// })

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
    productAdd,
    productStockUpdate
}