import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase.js";
import School from "../models/school.model.js";
import {file} from '../utils/apiFiles.js'

const school = asyncHandler(async (_, res) => {
  try {
    const snapshot = await getDocs(collection(app, "schools"));
    const data = snapshot.docs.map((doc) => doc.data());
    console.log(snapshot);
    res.status(200).json(new apiResponse(200, data, "data send successfully"));
  } catch (error) {
    throw new apiError(400, error);
  }
});

const schoolAdd = asyncHandler(async (req, res) => {
  const {
    aboutUs,
    address,
    board,
    city,
    contactNumber,
    email,
    mission,
    name,
    ourInspiration,
    pincode,
    state,
    website,
  } = req.body;
  if (!aboutUs) {
    throw new apiError(400, "about us is required");
  }
  if (!address) {
    throw new apiError(400, "address is required");
  }
  if (!board) {
    throw new apiError(400, "board is required");
  }
  if (!city) {
    throw new apiError(400, "city is required");
  }
  if (!contactNumber) {
    throw new apiError(400, "contact Number is required");
  }
  if (!email) {
    throw new apiError(400, "email is required");
  }
  if (!mission) {
    throw new apiError(400, "mission is required");
  }
  if (!name) {
    throw new apiError(400, "name is required");
  }
  if (!ourInspiration) {
    throw new apiError(400, "our Inspiration is required");
  }
  if (!pincode) {
    throw new apiError(400, "pincode is required");
  }
  if (!state) {
    throw new apiError(400, "state is required");
  }
  if (!website) {
    throw new apiError(400, "website is required");
  }
  // console.log(req.files);
  const {Image,Banner,Logo} = req.files;
  const fileName1= Image[0].originalname.split(".");
  const fileName2= Banner[0].originalname.split(".");
  const fileName3= Logo[0].originalname.split(".");
  async () => {
    for (let i = 0; i < fileName1.lenght(); i++) {
      if (fileName1[i].lowercase() !== "jpeg" || "jpg") {
        throw new apiError(400, "Image should be in Jpeg format");
      }
    }
    for (let i = 0; i < fileName2.lenght(); i++) {
      if (fileName2[i].lowercase() !== "jpeg" || "jpg") {
        throw new apiError(400, "banner should be in Jpeg format");
      }
    }
    for (let i = 0; i < fileName3.lenght(); i++) {
      if (fileName3[i].lowercase() !== "jpeg" || "jpg") {
        throw new apiError(400, "banner should be in Jpeg format");
      }
    }
  };
  const image = await file(Image[0], "jpeg");
  const banner = await file(Banner[0], "jpeg");
  const logo = await file(Logo[0], "jpeg");
  try {
    const data = new School(
      name,
      address,
      city,
      state,
      board,
      pincode,
      contactNumber,
      email,
      website,
      logo,
      banner,
      aboutUs,
      mission,
      image,
      ourInspiration
    );
    const jsonData = JSON.stringify(data);
    const jsonObject = JSON.parse(jsonData);
    const instance = collection(app, "schools");
    const add_data = await addDoc(instance, jsonObject);
    res
      .status(200)
      .json(new apiResponse(200, add_data, "school added successfully"));
  } catch (error) {
    throw new apiError(400, error);
  }
});

export { schoolAdd, school };
