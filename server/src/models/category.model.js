import {apiError} from "../utils/apiError.js";

class CategoryModel {
    constructor (name,image,description,offers) {
        if(!(name||image))
        {
            throw new apiError(404,"name and image is required")
        }
        this.categoryId=name;
        this.name = name;
        this.image = image;
        this.description=description;  
        this.offers=offers;
    }
    addId(id){
        this.id=id;
    }
}   
 
export{
    CategoryModel, 
}