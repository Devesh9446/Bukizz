import { Router } from "express";
import {order,fetchDataByStatus} from "../controllers/order.controller.js"
import { schoolAdd,school } from "../controllers/school.controller.js";
import {category} from "../controllers/category.controller.js"
import { categoryAdd } from "../controllers/category.controller.js";
import {upload} from "../middleware/multer.middleware.js"
import { general_products } from "../controllers/general_product.controller.js";
import {product} from "../controllers/product.controller.js"

const router=Router();
router.route("/orders").post(order);
router.route("/school").post(school);
router.route("/orders/c/:/status").post(fetchDataByStatus); 
router.route("/category").post(category);
router.route("/generalPoducts").post(general_products)
router.route("/products/c/:categoryId").post(product);
router.route("/school").post(schoolAdd);
router.route("/category").post(category);
router.route("/addcategory").post(upload.single("Image"),categoryAdd);

export default router;
   