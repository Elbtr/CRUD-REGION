import { Request, Response } from "express";
import ProvincesService from "../services/ProvincesService";

export default new (class ProvinceControllers {
  find(req: Request, res: Response) {
    ProvincesService.find(req, res);
  }
  findOne(req: Request, res: Response) {
    ProvincesService.findOne(req, res);
  }
  create(req: Request, res: Response) {
    ProvincesService.create(req, res);
  }
  delete(req: Request, res: Response) {
    ProvincesService.delete(req, res);
  }
  update(req: Request, res: Response) {
    ProvincesService.update(req, res);
  }
})();
