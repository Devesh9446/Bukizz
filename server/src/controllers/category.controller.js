import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { getDocs, collection, getFirestore, addDoc } from "firebase/firestore";
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
  console.log("Images is ", req.file);
  const Image = req.file;
  const { name, description, offers } = req.body;
  if (!(name || image)) {
    throw new apiError(400, "name and image is required");
  }
  const fileName = Image.originalname.split(".");
  async () => {
    for (let i = 0; i < fileName.lenght(); i++) {
      if (fileName[i].lowercase() !== "jpeg" || "jpg") {
        throw new apiError(400, "File should be in Jpeg format");
      }
    }
  };
  const image = await file(Image, 'jpeg');
  // console.log("image ", image);
  const data = new CategoryModel(name, image, description, offers);
  const jsonData = JSON.stringify(data); // Convert the object to a JSON string
  const jsonObject = JSON.parse(jsonData);
  const db = getFirestore();
  const resp = await addDoc(collection(db, "category"), jsonObject);

  console.log(resp.id);
  res
    .status(200)
    .json(new apiResponse(200, data, "category made successfully"));
});

export {
   category, 
   categoryAdd 
};
