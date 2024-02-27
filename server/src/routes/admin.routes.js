import { Router } from "express";
import {order,fetchDataByStatus} from "../controllers/order.controller.js"
import { schoolAdd } from "../controllers/school.controller.js";
import {category ,categoryAdd} from "../controllers/category.controller.js"
import {upload} from "../middleware/multer.middleware.js"

const router=Router();

router.route("/orders").get(order);
router.route("/orders/c/:/status").get(fetchDataByStatus);
router.route("/school").post(schoolAdd);
router.route("/category").post(category);
router.route("/addcategory").post(upload.single("Image"),categoryAdd);

export default router;
  