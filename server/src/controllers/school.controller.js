import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiQuueryResponse, apiResponse } from "../utils/apiResponse.js";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { app } from "../firebase.js";
import School from "../models/school.model.js";
import { file } from "../utils/apiFiles.js";

const school = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;

    const startAt = (page - 1) * pageSize;
    const endAt = startAt + pageSize;

    const snapshot = await getDocs(
      query(
        collection(app, "schools")
        //  orderBy("yourOrderByField")
      )
    );

    const totalItems = snapshot.docs.length;

    const data = snapshot.docs.slice(startAt, endAt).map((doc) => doc.data());

    res.status(200).json(
      new apiQuueryResponse(
        200,
        page,
        pageSize,
        totalItems,
        Math.ceil(totalItems / pageSize), //totalPages
        data,
        "Data sent successfully" // message
      )
    );
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
    schoolId,
    logo,
    banner,
    image,
    productId,
    uniformId,
  } = req.body;

  // Check if all required fields are provided
  const requiredFields = [
    "aboutUs",
    "address",
    "board",
    "city",
    "contactNumber",
    "email",
    "mission",
    "name",
    "ourInspiration",
    "pincode",
    "state",
    "website",
    "schoolId",
    "logo",
    "banner",
    "image",
    "productId",
    "uniformId",
  ];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      throw new apiError(400, `${field} is required`);
    }
  }

  try {
    // Create new School object
    const data = new School(
      schoolId,
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
      ourInspiration,
      productId,
      uniformId
    );

    // Convert School object to JSON
    const jsonData = data.toJson();

    // Add school data to Firestore
    const instance = collection(app, "testSchool");
    const addData = await addDoc(instance, jsonData);

    res
      .status(200)
      .json(new apiResponse(200, addData, "School added successfully"));
  } catch (error) {
    throw new apiError(400, error);
  }
});

export default schoolAdd;

export { schoolAdd, school };
