import { asyncHandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import { app } from '../firebase.js';
import { collection, query, doc, getDocs, where, updateDoc } from 'firebase/firestore';

const order = asyncHandler(async (_, res) => {
    try {
        const snapshot = await getDocs(collection(app,"orderDetails"));
        const data = snapshot.docs.map((doc) => doc.data());
        // console.log(snapshot);
        if (data) {
            res.status(200).json(new apiResponse(200, data, "data send successfully"));
        } else {
            res.status(200).json(new apiResponse(200,{},"no data found")); 
        }
    } catch (error) {
        throw new apiError(400,error);
    }
});

const fetchDataByStatus = asyncHandler(async (req, res) => {
    const {status}=req.param;
    try {
        const q = query(collection(app, "orderDetails"), where("status", "==", status));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => doc.data());
        res.status(200).json(new apiResponse(200, data, "data sent successfully"));
    } catch (error) {
        new apiError(400,error);
    }
});

const updateOrder=asyncHandler(async(req,res)=>{
    const {orderId}=req.param;
    if(orderId){
        throw new apiError(400,"Order id is required");
    }
    try{
        const docRef=doc(app,"orderDetail",orderId)        
        const updated_data=await updateDoc(docRef,{
            satus:"Cancelled"
        })
        res.status(200).json(new apiResponse(200,updated_data,"data send succesfully"));
    }catch(error){
        throw new apiError(400,"Error:",error)
    }
});

export {
    order,
    fetchDataByStatus,
    updateOrder,
};
