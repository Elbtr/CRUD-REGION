import { Request, Response } from "express";
import Provinces from "../interface/IRegion";
import { provinces } from "../mocks/Region";

export default new (class RegionServices {
  private provinces: Provinces[];

  constructor() {
    this.provinces = [...provinces];
  }

  find(req: Request, res: Response): Response {
    try {
      return res.status(200).json({ data: this.provinces });
    } catch (error) {
      return res.status(500).json({
        errorMessage: "something when wrong in find provinces method",
      });
    }
  }
})();
