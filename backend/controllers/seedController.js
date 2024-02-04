import asyncHandler from "async-error-handler";
import Product from "../model/productModel.js";
import data from "../data.js";

const seedController = asyncHandler(async (req, res) => {
  await Product.deleteMany({})
    .then(() => console.log("all documents deleted successfully"))
    .catch((err) => console.log("error while deleting the documents", err));
  const product = await Product.insertMany(data.products);
  res.send(product);
});

export default seedController;
