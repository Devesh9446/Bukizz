import { Router } from "express";
import {order,fetchDataByStatus} from "../controllers/order.controller.js"
import { schoolAdd,school } from "../controllers/school.controller.js";
import {category} from "../controllers/category.controller.js"
import { categoryAdd } from "../controllers/category.controller.js";
import {upload} from "../middleware/multer.middleware.js"
import { general_products } from "../controllers/general_product.controller.js";
import {product} from "../controllers/product.controller.js"

const router=Router();
router.route("/orders").get(order);
router.route("/school").post(school);
router.route("/orders/c/:/status").get(fetchDataByStatus); 
router.route("/category").get(category);
router.route("/generalPoducts").get(general_products)
router.route("/products/c/:categoryId").get(product);
router.route("/school").post(schoolAdd);
router.route("/category").post(category);
router.route("/addcategory").post(upload.single("Image"),categoryAdd);

export default router;
   