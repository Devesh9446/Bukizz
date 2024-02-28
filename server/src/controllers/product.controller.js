import { apiError } from '../utils/apiError.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import { apiResponse } from '../utils/apiResponse.js';
import {app} from "../firebase.js"
import {doc,collection,query,updateDoc,where,getDocs,addDoc} from 'firebase/firestore'
import { SetData } from '../models/SetData.model.js';
import { Stream } from '../models/Stream.model.js';
import { Variation } from '../models/variation.model.js';
import { productModel } from '../models/product.model.js';
import {file} from '../utils/apiFiles.js'

const product=asyncHandler(async(_,res)=>{
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

const productAdd=asyncHandler(async(req,res)=>{
    const {productId,name,description,categoryId,classId,board,sku,salePrice,setName,price,costPerItem,streamName}=req.body;
    if(!(productId,name,description,board,sku,salePrice,setName,price,costPerItem)){
        throw new apiError(400,"All fields required");
    }
    if(!categoryId){
        throw new apiError(400,"category Id is required");
    }
    if(!classId){
        throw new apiError(400,"classId is required");
    }
    
    const Image=req.file;
    console.log(req.file);
    const fileName = Image.originalname.split(".");
    async () => {
        for (let i = 0; i < fileName.lenght(); i++) {
        if (fileName[i].lowercase() !== "jpeg" || "jpg") {
            throw new apiError(400, "File should be in Jpeg format");
        }
        }
    };
    const image = await file(Image, 'jpeg');
    const set1=new SetData(setName);
    set1.addImage(image);
    const jsonData1 = JSON.stringify(set1);
    const  set= JSON.parse(jsonData1);

    const stream1=new Stream(streamName||0);
    stream1.addImage(image); 
    const jsonData2 = JSON.stringify(stream1);
    const stream = JSON.parse(jsonData2);

    const new_product1=new productModel(productId,name,description,categoryId,image,classId,board)
    new_product1.addSet(set);
    new_product1.addSteam(stream);

    const variation1=new Variation(price,salePrice,sku,image,costPerItem)
    const jsonData3 = JSON.stringify(variation1);
    const variation = JSON.parse(jsonData3);
    new_product1.addVariation(setName,variation);//0 for setName bookset //1 for set+notebook set

    const jsonData4 = JSON.stringify(new_product1);
    const new_product= JSON.parse(jsonData4);

    const resp = await addDoc(collection(app, "products"), new_product);
    console.log(resp.id);
    res.status(200).json(new apiResponse(200,new_product,"data stored successfully"));
})

export {
    product,
    productByCategoryId,
    productByproductId,
    productStockUpdate,
    productAdd
}