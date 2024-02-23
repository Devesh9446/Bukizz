import { asyncHandler } from '../utils/apiError';
import { apiError } from '../utils/apiError';
import { apiResponse } from '../utils/apiResponse';
import { app } from '../firebase';
import { collection, query, doc, getDocs, where, updateDoc } from 'firebase/firestore';

const order = asyncHandler(async (req, res) => {
    try {
        const ref = doc(app, "orderDetails");
        const data = await getDoc(ref);
        if (data.exists()) {
            res.status(200).json(new apiResponse(200, data.data(), "data send successfully"));
        } else {
            res.status(200).josn(new apiResponse(200,{},"no data found"));
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
