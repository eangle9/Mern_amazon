import express from "express";
import seedController from "../controllers/seedController.js";
const seedRouter = express.Router();

seedRouter.get('/', seedController);

export default seedRouter;
