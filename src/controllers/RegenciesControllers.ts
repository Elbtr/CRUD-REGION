import { Request, Response } from "express";
import RegenciesService from "../services/RegenciesService";

export default new (class RegenciesControllers {
  find(req: Request, res: Response) {
    RegenciesService.find(req, res);
  }
  create(req: Request, res: Response) {
    RegenciesService.create(req, res);
  }
  update(req: Request, res: Response) {
    RegenciesService.update(req, res);
  }
  delete(req: Request, res: Response) {
    RegenciesService.delete(req, res);
  }
})();
