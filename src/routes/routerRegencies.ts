import { Router } from "express";
import RegenciesControllers from "../controllers/RegenciesControllers";

const router = Router();

router.get("/regencies/:id", RegenciesControllers.find);
router.post("/regency", RegenciesControllers.create);
router.patch("/regencies/:id", RegenciesControllers.update);
router.delete("/regencies/:id", RegenciesControllers.delete);

export default router;
