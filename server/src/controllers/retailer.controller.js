import { collection, getDocs } from "firebase/firestore";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { app } from "../firebase.js";

const getRetailer = asyncHandler(async (_, res) => {
  try {
    const snapshot = await getDocs(collection(app, "retailer"));
    const data = snapshot.docs.map((doc) => doc.data());
    console.log(snapshot);
    res.status(200).json(new apiResponse(200, data, "Retailer data send successfully"));
  } catch (error) {
    throw new apiError(400, error);
  }
});

export { getRetailer };