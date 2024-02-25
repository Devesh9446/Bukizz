import {apiError} from "../utils/apiError.js";

class CategoryModel {
    constructor (name,image,description,offer) {
        if(!(name||image))
        {
            throw new apiError(404,"name and image is required")
        }
        this.name = name;
        this.image = image;
        this.description=description; 
        this.offer=offer;
    }
}  

export{
    CategoryModel,
}