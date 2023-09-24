import { Router } from "express";
import ProvinceControllers from "../controllers/ProvinceControllers";

const router = Router();

router.get("/provinces", ProvinceControllers.find);
router.get("/province/:id", ProvinceControllers.findOne);
router.post("/province", ProvinceControllers.create);
router.delete("/province/:id", ProvinceControllers.delete);
router.patch("/province/:id", ProvinceControllers.update);

export default router;
