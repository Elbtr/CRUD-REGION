import { Router } from "express";
import RegionControl from "../controllers/RegionControl";

const router = Router();

router.get("/", RegionControl.find);

export default router;
