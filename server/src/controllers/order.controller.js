import { asyncHandler } from '../utils/asyncHandler.js';
import { apiError } from '../utils/apiError.js';
import { apiQuueryResponse, apiResponse } from '../utils/apiResponse.js';
import { app } from '../firebase.js';
import { collection, query, doc, getDocs, where, updateDoc, orderBy } from 'firebase/firestore';

const order = asyncHandler(async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 10;

        const startAt = (page - 1) * pageSize;
        const endAt = startAt + pageSize;

        const snapshot = await getDocs(
            query(
                collection(app, "orderDetails"),
                // orderBy("yourOrderByField") // Replace "yourOrderByField" with the actual field you want to order by
            )
        );

        const totalItems = snapshot.docs.length;

        const data = snapshot.docs.slice(startAt, endAt).map((doc) => doc.data());

        if (data.length > 0) {
            res.status(200).json(new apiQuueryResponse(200,
                page,
                pageSize,
                totalItems,
                Math.ceil(totalItems / pageSize),
                data,
                "Data sent successfully"
            ));
        } else {
            res.status(200).json(new apiResponse(200, {}, "No data found"));
        }
    } catch (error) {
        throw new apiError(400, error);
    }
});

const fetchDataByStatus = asyncHandler(async (req, res) => {
    const { status } = req.params; 
    try {
        const q = query(collection(app, "orderDetails"), where("status", "==", status));
        const snapshot = await getDocs(q);
        if (snapshot.empty) { 
            res.status(200).json(new apiResponse(200, {}, "No data found for this status"));
        } else {
            const data = snapshot.docs.map(doc => doc.data());
            res.status(200).json(new apiResponse(200, data, "Data sent successfully"));
        }
    } catch (error) {
        throw new apiError(400, error);
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
