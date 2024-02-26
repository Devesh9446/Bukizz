import { apiError } from "../utils/apiError";

class ProductModel {
    constructor(name, description, price, categoryId,classId, board ,stream ,retailerId, set ,reviewIdList) {
        if (!name) {
            throw new apiError(400, "Product name is required");
        }
        if (!description) {
            throw new apiError(400, "Description is required");
        }
        if (!price) {
            throw new apiError(400, "Price is required");
        }
        if (!stockQuantity) {
            throw new apiError(400, "Stock quantity is required");
        } 
        if (!categoryId) {
            throw new apiError(400, "Category ID is required");
        }
        if (!retailerId) {
            throw new apiError(400, "Retailer ID is required");
        }
        if (!image) {
            throw new apiError(400, "Image is required");
        } 
        this.name = name;
        this.description = description;
        this.price = price;
        this.categoryId = categoryId;
        this.classId = classId;
        this.board = board;
        this.stream =stream;
        this.set =set;
        this.retailerId = retailerId;
        this.reviewIdList = reviewIdList;
    }

    addReview(id) {
        this.reviewIdList.push(id);
    }

    addRetailer(id) {
        this.retailerId.push(id);
    }
}

export { ProductModel };