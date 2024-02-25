import {asyncHandler} from "../utils/asyncHandler.js";
import {apiError} from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { addDoc ,collection} from "firebase/firestore";
import {app} from "../firebase.js";

const schoolAdd=asyncHandler(async(req,res)=>{
    const {aboutUs,address,banner,board,city,contactNumber,email,image,logo,mission,name,ourInspiration,pincode,productsId,schoolId,state,website}=req.body;
    console.log(req.body)
    if(!(aboutUs||address||banner||board||city||contactNumber||email||image||logo||mission||name||ourInspiration||pincode||productsId||schoolId||state||website)){
        throw new apiError(404,"All fileds required");
    }
    const data={
        aboutUs:aboutUs||"",
        address:address||"",
        banner:banner||"",
        board:board||"",
        city:city||"",
        contactNumber:contactNumber||"",
        email:email||"",
        image:image||"",
        logo:logo||"",
        mission:mission||"",
        name:name||"",
        ourInspiration:ourInspiration||"",
        pincode:pincode||"",
        productsId:productsId||"",
        schoolId:schoolId||"",
        state:state||"",
        website:website||"",
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
}