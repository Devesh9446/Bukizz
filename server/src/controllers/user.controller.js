import { collection, getDocs, query, where } from "firebase/firestore";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { app } from "../firebase.js";

const getUserDetails = asyncHandler(async(req,res)=>{
    const {userId}=req.body;
    const snapshot = await getDocs(query( collection(app,"userDetails"),where("uid","==",userId)));
    if(!snapshot){
        new apiError(404,'No user found with this id');
    }
    const data = snapshot.docs.map((doc) => doc.data())[0];
    res.status(200).json(new apiResponse(200,{name:data.name,email:data.email},"data send successfully"));
})

export { getUserDetails };