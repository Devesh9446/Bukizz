import {asyncHandler} from '../utils/asyncHandler.js'
import {apiError} from "../utils/apiError.js"
import {apiResponse} from "../utils/apiResponse.js"
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, setDoc } from "firebase/firestore";

const db = getFirestore(app);

const logIn=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!(email||password)){
        console.log("email and password is required")
    }
    const querySnapshot = await getDocs(query(collection(db,"users"),where("status","==",email)));
    if(!querySnapshot){
        throw new apiError(400,"Email or password is incorrect")
    }
    res.status(200).json(new apiResponse(200,querySnapshot,"LoggedIn successfully"))
})

const signIn=asyncHandler(async(req,res)=>{
    const {email,password,username,name}=req.body;
    if(!(email.trim()||password.trim()||username.trim()||name.trim())){
        throw new apiError(404,"All fields required")
    }

    const user=await getDocs(query(collection(db,"users"),where("status","==",email),where("status","==",username)));
    if(user){
        throw new apiError(404,"User already exist")
    }

    const new_user={
        email:email||"",
        password:password||"",
        username:username||"",
        name:name||"",
    }
    const newUserCreated=await setDoc(db,"user",new_user)

    res.status(200).json(200,newUserCreated,"User Created Successfully")
})

const orders= asyncHandler(async(req,res)=>{
    const {status}=req.params.status;
    if(!status){
        throw new apiError(404,"status is required")
    }
    const querySnapshot = await getDocs(query(collection(db,"orderDetails"),where("status","==",status)));
    if(!querySnapshot){
        res.status(200).json(new apiResponse(200,{},`No order was ${status}`))
    }
    res.status(200).json(new apiResponse(200,querySnapshot,"Data send Successfully"))
})

const products=asyncHandler(async(req,res)=>{
    const {category}=req.params.category;
    if(!category){
        throw new apiError(400,"category is required")
    }
    const querySnapshot = await getDocs(query(collection(db,"products"),where("status","==",category)));
    if(!querySnapshot){
        res.status(200).json(new apiResponse(200,{},`No product was found of this category`))
    }
    res.status(200).json(new apiResponse(200,querySnapshot,"Data send Successfully"))
})

const dashboard=asyncHandler(async(req,res)=>{
    const querySnapshot = await getDocs(collection(db,"schools"));
    if(!querySnapshot){
        res.status(200).json(new apiResponse(200,{},`No School was there`))
    }
    res.status(200).json(new apiResponse(200,querySnapshot,"Data send Successfully"))
})

const category=asyncHandler(async(req,res)=>{
    const querySnapshot = await getDocs(collection(db,"category"));
    if(!querySnapshot){
        res.status(200).json(new apiResponse(200,{},`No category yet made`))
    }
    res.status(200).json(new apiResponse(200,querySnapshot,"Data send Successfully"))
})

export {
    orders,
    products,
    dashboard,
    category,
    logIn,
    signIn
}