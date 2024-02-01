import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors())
// app.use(dotenv());

app.get("/", (req, res) => {
    res.send("api is running...")
})
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
})
