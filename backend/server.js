import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
// app.use(dotenv());

app.get("/", (req, res) => {
  res.send("api is running...");
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find(
    (product) => product.slug === req.params.slug
  );
  if (product) {
    res.send(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});
app.get("/api/product/:id", (req, res) => {
  const product = data.products.find(
    (product) => product._id === req.params.id
  );
  if (product) {
    res.send(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
