import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { getDocs, collection } from "firebase/firestore";
import { app } from "../firebase.js";
import { CategoryModel } from "../models/category.model.js";
import { file } from "../utils/apiFiles.js";

const category = asyncHandler(async (_, res) => {
  try {
    const snapshot = await getDocs(collection(app, "category"));
    const data = snapshot.docs.map((doc) => doc.data());
    console.log(snapshot);
    res.status(200).json(new apiResponse(200, data, "data send successfully"));
  } catch (error) {
    throw new apiError(400, error);
  }
});   

const categoryAdd = asyncHandler(async (req, res) => {
  const Image = req.file && req.file.Image ? req.file.Image[0] : undefined;
  const { name, description, offer } = req.body;

  if (!(name && Image)) {
    throw new apiError(400, "name and image are required");
  }

  const fileName = Image.split(".");
  for (let i = 0; i < fileName.length; i++) {
    if (fileName[i].toLowerCase() !== "jpeg" && fileName[i].toLowerCase() !== "jpg") {
      throw new apiError(400, "File should be in JPEG format");
    }
  }

  const processedImage = await file(Image, 'jpeg');

  const data = new CategoryModel(name, processedImage, description, offer);
  
  const categoryCollection = collection(app, 'categories');

  const docRef = await addDoc(categoryCollection, data);

  res.status(200).json(new apiResponse(200, docRef.id, "Category made successfully"));
});

export {
   category, 
   categoryAdd 
};
