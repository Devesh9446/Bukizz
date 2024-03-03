import { file } from "../utils/apiFiles.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const ImageUPloader= asyncHandler(async (req,res) =>{
    const image = req.file;  
    const {uploadPath} = req.body || "images/";  
    if (!( image)) {
        throw new apiError(400, "image is required"); 
    }
    const fileName = image.originalname.split(".");
    async () => {
        for (let i = 0; i < fileName.lenght(); i++) {
            if (fileName[i].lowercase() !== "jpeg" || "jpg") {
                throw new apiError(400, "File should be in Jpeg format");
            }
        }
    };
    const imageLink = await file(image, 'jpeg',uploadPath);

    res.status(200)
        .json(new apiResponse(200, imageLink, "Image uploaded successfully"));
});

export {ImageUPloader};