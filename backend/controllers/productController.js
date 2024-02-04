import asyncHandler from "async-error-handler";
import Product from "../model/productModel.js";

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    if (products) {
      res.send(products);
    } else {
      res.status(404).json({ message: "Products Not Found" });
    }
  } catch (error) {
    console.log("error:", error);
    res
      .status(404)
      .json({ message: "something went wrong on featching products" });
  }
});

const getSingleProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.send(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    throw new Error("something went wrong on fetching single product");
  }
});

const getSingleProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    throw new Error("something went wrong in the server");
  }
});

export { getAllProducts, getSingleProduct, getSingleProductById };
