import { Request, Response } from "express";
import RegionServices from "../services/RegionServices";

export default new (class RegionsControllers {
  find(req: Request, res: Response) {
    RegionServices.find(req, res);
  }
})();
