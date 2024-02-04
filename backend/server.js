import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import cors from "cors";
import connectToDb from "./config/connectDb.js";
import seedRouter from "./routes/seedRoute.js";
import productRoute from "./routes/productRoute.js";

const app = express();
app.use(cors());
dotenv.config();

connectToDb();

app.get("/", (req, res) => {
  res.send("api is running...");
});
app.use('/api/seeds', seedRouter);
app.use('/api/products', productRoute)


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
