import {asyncHandler} from "../utils/asyncHandler.js";
import {apiError} from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { addDoc ,collection ,getDocs} from "firebase/firestore";
import {app} from "../firebase.js";
import School from "../models/school.model.js";

const school=asyncHandler(async(req,res)=>{
    try {
        const snapshot = await getDocs(collection(app, "schools"));
        const data = snapshot.docs.map((doc) => doc.data());
        console.log(snapshot);
        res.status(200).json(new apiResponse(200, data, "data send successfully"));
      } catch (error) {
        throw new apiError(400, error);
      }
})

const schoolAdd=asyncHandler(async(req,res)=>{
    const {aboutUs,address,banner,board,city,contactNumber,email,image,logo,mission,name,ourInspiration,pincode,state,website,productsId}=req.body;
    console.log(req.body)
    if(!aboutUs){
        throw new apiError(400,"about us is required")
    }
    if(!address){
        throw new apiError(400,"address is required")
    }
    if(!banner){
        throw new apiError(400,"banner is required")
    }
    if(!board){
        throw new apiError(400,"board is required")
    }
    if(!city){
        throw new apiError(400,"city is required")
    }
    if(!contactNumber){
        throw new apiError(400,"contact Number is required")
    }
    if(!email){
        throw new apiError(400,"email is required")
    }
    if(!image){
        throw new apiError(400,"image is required")
    }
    if(!logo){
        throw new apiError(400,"logo is required")
    }
    if(!mission){
        throw new apiError(400,"mission is required")
    }
    if(!name){
        throw new apiError(400,"name is required")
    }
    if(!ourInspiration){
        throw new apiError(400,"our Inspiration is required")
    }
    if(!pincode){
        throw new apiError(400,"pincode is required")
    }
    if(!productsId){
        throw new apiError(400,"productId is required")
    }
    if(!state){
        throw new apiError(400,"state is required")
    }
    if(!website){
        throw new apiError(400,"website is required")
    }

    const data=new School(name,address,city,state,board,pincode,contactNumber,email,website,logo,banner,aboutUs,mission,image,ourInspiration)
    
    if(productsId){
        addProduct(productsId)
    }
    try{
        const instance=collection(app, "schools"); ;
        const add_data=await addDoc(instance,data);
        res.status(200).json(new apiResponse(200,add_data,"school added successfully"));
    }catch(error){
        throw new apiError(400,error);
    }
})


export{
    schoolAdd,
    school
}