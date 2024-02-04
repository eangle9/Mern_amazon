import express from "express";
import { getSingleProduct, getAllProducts, getSingleProductById } from "../controllers/productController.js";

const router = express.Router();
router.get("/", getAllProducts);
router.get("/slug/:slug", getSingleProduct);
router.get("/:id", getSingleProductById)

export default router;
