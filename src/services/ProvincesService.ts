import { Request, Response } from "express";
import Province from "../models/models/Provinces";

export default new (class ProvinceServices {
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const provinceData = await Province.findAll();
      return res.status(200).json({ data: provinceData });
    } catch (error) {
      return res.status(500).json({ message: "missing Province", error });
    }
  }
  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = Number(req.params.id);

      const data = await Province.findByPk(id);

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;
      console.log(name);

      const newData = await Province.create(
        {
          name,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { fields: ["name", "createdAt", "updatedAt"] }
      );
      return res.status(200).json(newData);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = Number(req.params.id);

      const provinceData = await Province.findByPk(id);
      if (!provinceData)
        return res
          .status(404)
          .json({ message: `connot get data with id ${id}` });

      await provinceData.destroy();
      return res.status(200).json({ message: "success to delete data" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = Number(req.params.id);
      const dataProvince = await Province.findByPk(id);
      if (!dataProvince)
        return res
          .status(404)
          .json({ message: `data with id ${id} not found` });

      const newData = req.body;
      const updateData = {
        ...newData,
        updatedAt: new Date(),
      };
      const updateProvince = await dataProvince.update(updateData);
      return res.status(200).json(updateProvince);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
})();
