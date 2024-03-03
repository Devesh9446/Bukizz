import { Router } from "express";
import {order,fetchDataByStatus} from "../controllers/order.controller.js"
import { schoolAdd,school } from "../controllers/school.controller.js";
import {category ,categoryAdd} from "../controllers/category.controller.js"
import {upload} from "../middleware/multer.middleware.js"
import { general_products } from "../controllers/general_product.controller.js";
import {product ,productByCategoryId ,productByproductId ,productAdd} from "../controllers/product.controller.js"
import { ImageUPloader } from "../controllers/upload.controller.js";
import {notification} from "../controllers/notification.controllers.js";

const router=Router();
router.route("/category").post(category);
router.route("/addcategory").post(upload.single("Image"),categoryAdd);

router.route("/school").post(school);
router.route("/addschool").post(
    upload.fields([ 
        {
            name:"Image",
            maxCount:1 
        },
        {
            name:"Banner", 
            maxCount:1
        },
        {
            name:"Logo",
            maxCount:1
        },
    ])
,schoolAdd);

router.route("/product").post(product);
router.route("/product/c/:categoryId").post(productByCategoryId);
router.route("/product/c/:productId").post(productByproductId);
router.route("/addproduct").post(productAdd);
// router.route("/addproduct").post(upload.single("Image"),productAdd)
 
router.route("/generalPoducts").post(general_products)

router.route("/orders").post(order);
router.route("/orders/c/:/status").post(fetchDataByStatus); 
router.route("/imageupload").post(upload.single("Image"), ImageUPloader);

router.route("/notification").post(notification);

export default router;
     