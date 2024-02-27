import {asyncHandler} from "../utils/asyncHandler.js";
import {apiError} from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { addDoc ,collection ,getDocs} from "firebase/firestore";
import {app} from "../firebase.js";
import general_productModel from "../models/school.model.js";

const general_products=asyncHandler(async(req,res)=>{
    try {
        const snapshot = await getDocs(collection(app, "generalProduct"));
        const data = snapshot.docs.map((doc) => doc.data());
        console.log(snapshot);
        res.status(200).json(new apiResponse(200, data, "data send successfully"));
      } catch (error) {
        throw new apiError(400, error);
      }
})

export {general_products}; 