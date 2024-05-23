import { Router } from "express";
import UploadImage from "../../middlewares/multer";
const controller = require('../controller/controller')

const router = Router();

// GET cars
router.get("/", controller.getCars);

// GET specific car by ID
router.get("/:id", controller.getCarById);

// CREATE car
router.post("/create", UploadImage.single('image'), controller.createCar);

// UPDATE / EDIT car
router.put("/:id", UploadImage.single('image'), controller.updateCar);

//  DELETE car
router.delete("/:id", controller.deleteCar);

export default router;
