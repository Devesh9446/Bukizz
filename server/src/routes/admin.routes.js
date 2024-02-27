import { Router } from "express";
import {order,fetchDataByStatus} from "../controllers/order.controller.js"
import { schoolAdd,school } from "../controllers/school.controller.js";
import {category ,categoryAdd} from "../controllers/category.controller.js"
import {upload} from "../middleware/multer.middleware.js"
import { general_products } from "../controllers/general_product.controller.js";
import {product ,productByCategory ,productByproductId} from "../controllers/product.controller.js"

const router=Router();
router.route("/orders").get(order);
router.route("/orders/c/:status").get(fetchDataByStatus); 
router.route("/generalPoducts").get(general_products)
router.route("/product").get(product);
router.route("/product/c/:categoryId").get(productByCategory);
router.route("/product/c/:productId").get(productByproductId);
router.route("/school").get(school);
router.route("/school").post(upload.single("Banner"),schoolAdd);
router.route("/category").get(category);
router.route("/category").post(
    upload.fields([
        {
            name:"Image",
            maxCount:1
        },
        {
            name:"Banner",
            maxCount:1
        }
    ])
,categoryAdd);
 
export default router;
     