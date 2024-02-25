import {asyncHandler} from "../utils/asyncHandler";
import { apiError } from "../utils/apiError";
import { apiResponse } from "../utils/apiResponse";
import {app} from './firebase.js';
import {doc,getDoc,query,collection,where} from 'fierbase/firestore';

const vendors=asyncHandler(async(_,res)=>{
    try{
        const instance =doc(app,"vendor");
        const data=await getDoc(instance);
        if(data.exist()){
            data=data.data();
        }
        else{
            res.satus(200).json(new apiResponse(200,{},"no data available"));
        }
        res.status(200).josn(new apiResponse(200,data,"data send successfully"));
    }catch(error){
        throw new apiError(400,error);
    }
})
const vendor_orders=asyncHandler(async(req,res)=>{
    const {vendor}=req.param;
    try{
        const q=query(collection(app,"orderDetail"),where("vendor"))
    }
})
export {
    vendors,
    vendor_orders
}